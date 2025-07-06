import * as productsService from "../services/products.service.js";

import validateBody from "../utils/validateBody.js";

import { addProductSchema } from "../validation/productSchema.js";


export const addProductController = async (req, res) => {
    await validateBody(addProductSchema, req.body);
    const result = await productsService.addProduct(req.body);
    res.status(201).json(result);
};

export const getProductsAllController = async (req, res) => {
    const result = await productsService.getProductsAll();
    res.json(result);
};