import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Обязательно!

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Отсутствует токен" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // теперь в контроллере доступно req.user.id и req.user.role
        next();
  } catch (error) {
    return res.status(401).json({ message: "Невалидный токен" });
  }
};
