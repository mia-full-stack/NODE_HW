import * as categoriesService from "../services/categories.service.js";

import validateBody from "../utils/validateBody.js";

import { addCategorySchema } from "../validation/categorySchema.js";


export const addCategoryController = async (req, res) => {
    await validateBody(addCategorySchema, req.body);
    const result = await categoriesService.addCategory(req.body);
    res.status(201).json(result);
};