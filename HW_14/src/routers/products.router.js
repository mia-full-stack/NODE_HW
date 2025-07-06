import { Router } from "express";

import {
    addProductController,
    getProductsAllController,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/", addProductController);
productsRouter.get("/", getProductsAllController);

export default productsRouter;