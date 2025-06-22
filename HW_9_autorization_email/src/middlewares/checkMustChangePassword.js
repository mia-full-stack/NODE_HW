import User from "../db/User.js";

export const checkMustChangePassword = async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: "Неавторизован" });

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: "Пользователь не найден" });

    if (user.mustChangePassword) {
        return res.status(403).json({ message: "Необходимо сменить пароль" });
    }

    next();
};
