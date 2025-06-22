import * as productsService from "../services/products.service.js";

import validateBody from "../utils/validateBody.js";

import HttpExeption from "../utils/HttpExeption.js";

import {
  productAddSchema,
  productUpdateSchema,
} from "../validation/products.schema.js";

export const getProductsController = async (req, res) => {
  const result = await productsService.getProducts();

  res.json(result);
};

export const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.getProductById(id);
  if (!result) throw HttpExeption(404, `Product with id=${id} not found`);

  res.json(result);
}

export const addProductController = async (req, res) => {
  await validateBody(productAddSchema, req.body);
  const result = await productsService.addProduct(req.body);

  res.status(201).json(result);
};

export const updateProductByIdController = async (req, res) => {
  await validateBody(productUpdateSchema, req.body);
  const { id } = req.params;
  const result = await productsService.updateProductById(id, req.body);
  if (!result) throw HttpExeption(404, `Product with id=${id} not found`);

  res.json(result);
}

export const deleteProductByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.deleteProductById(id);
  if (!result) throw HttpExeption(404, `Product with id=${id} not found`);

  // res.status(204).send();
  res.json(result);
}