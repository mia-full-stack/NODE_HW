import Product from "../db/Product.js";

export const getProducts = () => Product.find();

//export const getProductById = _id => Product.findOne({_id});
export const getProductById = id => Product.findById(id);

export const addProduct = (payload) => Product.create(payload);

export const updateProductById = (id, payload) =>
  Product.findByIdAndUpdate(id, payload, { new: true });

export const deleteProductById = id => Product.findByIdAndDelete(id);
