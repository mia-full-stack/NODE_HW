import bcrypt from "bcrypt";

import User from "../db/User.js";

import HttpExeption from "../utils/HttpExeption.js";

export const addAdmin = async (payload) => {
    const hashPassword = await bcrypt.hash(payload.password, 10);
    return User.create({
        ...payload,
        password: hashPassword,
        role: "admin",
    });
};

export const changeAdminPassword = async (id, { oldPassword, newPassword }) => {
    const admin = await User.findByPk(id);
    if (!admin) return null;

    const passwordCompare = await bcrypt.compare(oldPassword, admin.password);
    if (!passwordCompare) throw HttpExeption(400, "Old password invalid");

    const hashPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashPassword;
    await admin.save();

    return admin;
}

export const updateEmail = async (userId, newEmail) => {
    const user = await User.findByPk(userId);
    if (!user) return null;

    user.email = newEmail;
    await user.save();

    return user;
};

export const deleteAccount = async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) return false;

    await user.destroy();
    return true;
};

export const updateRole = async (targetUserId, newRole) => {
    const user = await User.findByPk(targetUserId);
    if (!user) return null;

    user.role = newRole;
    await user.save();

    return user;
};
