import { Router } from "express";

import {
  getProductsController,
  getProductByIdController,
  addProductController,
  updateProductByIdController,
  deleteProductByIdController,
} from "../controllers/products.controller.js";

// import { authenticate, isAdmin } from "../middlewares/authorization.js";

const productsRouter = Router();

productsRouter.get("/", getProductsController);

productsRouter.get("/:id", getProductByIdController);

productsRouter.post("/", addProductController);

productsRouter.put("/:id", updateProductByIdController);

productsRouter.delete("/:id", deleteProductByIdController);

export default productsRouter;
