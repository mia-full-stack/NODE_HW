import { Router } from "express";

import {
    addCategoryController,
} from "../controllers/categories.controller.js";

const categoriesRouter = Router();

categoriesRouter.post("/", addCategoryController);

export default categoriesRouter;