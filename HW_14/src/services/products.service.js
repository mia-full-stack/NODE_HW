import Product from "../db/Product.js";

export const addProduct = payload => Product.create(payload);

export const getProductsAll = () => Product.find().populate("category", "name");