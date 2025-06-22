import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../db/User.js";

import HttpExeption from "../utils/HttpExeption.js";

const { JWT_SECRET } = process.env;

export const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) throw HttpExeption(401, `User with email=${email} not found`); // throw HttpExeption(401, "Email or password invalid");

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) throw HttpExeption(401, `Password invalid`);

  const payload = {
    id: user.id,
    role: user.role
  };


  const token = jwt.sign(payload, JWT_SECRET.toString(), { expiresIn: "24h" });


  return token;
  
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

export const register = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    email,
    password: hashedPassword,
    mustChangePassword: false,
    role: "user"
  });
};
