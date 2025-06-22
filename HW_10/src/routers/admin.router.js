import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { checkRole } from "../middlewares/checkRole.js";

const adminRouter = Router();

adminRouter.get("/admin", authenticate, checkRole("admin"), (req, res) => {
    res.json({ message: "Добро пожаловать, admin!" });
});

export default adminRouter;
