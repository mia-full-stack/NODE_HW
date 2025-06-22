import { Router } from "express";
import { loginController, registerController, deleteAccountController, changeEmailController, changePasswordController, } from "../controllers/auth.controller.js";
import  {authenticate}  from "../middlewares/authenticate.js"; // JWT проверка

const authRouter = Router();

authRouter.post("/login", loginController);
authRouter.post("/register", registerController);
authRouter.post("/change-password", authenticate, changePasswordController);
authRouter.post("/delete-account", authenticate, deleteAccountController);
authRouter.post("/change-email", authenticate, changeEmailController);
export default authRouter;
