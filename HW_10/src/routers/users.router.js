import { Router } from "express";

import { addAdminController, changeAdminPasswordController, updateEmailController,
  deleteAccountController,
  updateRoleController, } from "../controllers/users.controller.js";

import { authenticate, isSuperadmin, isAdmin } from "../middlewares/authorization.js";

const usersRouter = Router();

usersRouter.post("/admins", authenticate, isSuperadmin, addAdminController);

usersRouter.put("/admins/:id/password", authenticate, isSuperadmin, changeAdminPasswordController);

usersRouter.put("/update-email", authenticate, updateEmailController);

usersRouter.delete("/delete-account", authenticate, deleteAccountController);

usersRouter.put("/update-role", authenticate, isAdmin, updateRoleController);

export default usersRouter;