import * as authService from "../services/auth.service.js";
import validateBody from "../utils/validateBody.js";
import { loginSchema, registerSchema } from "../validation/auth.schema.js";
import User from "../db/User.js";
import bcrypt from "bcrypt";
export const loginController = async (req, res) => {
    await validateBody(loginSchema, req.body);
    const token = await authService.login(req.body);
    res.json({ token });
};

export const registerController = async (req, res) => {
    try {
        await validateBody(registerSchema, req.body);
        const { email, password } = req.body;

        const existingUser = await authService.findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "Email уже зарегистрирован" });
        }

        await authService.register({ email, password });
        res.status(201).json({ message: "Пользователь зарегистрирован" });
    } catch (error) {
        res.status(500).json({ message: "Ошибка регистрации", error: error.message });
    }
};

export const changePasswordController = async (req, res) => {
    const userId = req.user?.id;
    const { newPassword } = req.body;

    if (!newPassword) {
        return res.status(400).json({ message: "Новый пароль обязателен" });
    }

    const user = await User.findByPk(userId);
    if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    user.mustChangePassword = false;
    await user.save();

    res.json({ message: "Пароль успешно изменён" });
};

export const deleteAccountController = async (req, res) => {
    const userId = req.user?.id;
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ message: "Пароль обязателен" });
    }

    const user = await User.findByPk(userId);
    if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).json({ message: "Неверный пароль" });
    }

    await user.destroy();
    res.json({ message: "Аккаунт удалён" });
};


export const changeEmailController = async (req, res) => {
    const userId = req.user?.id;
    const { newEmail, password } = req.body;

    if (!newEmail || !password) {
        return res.status(400).json({ message: "Email и пароль обязательны" });
    }

    const user = await User.findByPk(userId);
    if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).json({ message: "Неверный пароль" });
    }

    // Проверка уникальности email
    const existing = await User.findOne({ where: { email: newEmail } });
    if (existing) {
        return res.status(400).json({ message: "Такой email уже используется" });
    }

    user.email = newEmail;
    await user.save();

    res.json({ message: "Email успешно изменён" });
};
