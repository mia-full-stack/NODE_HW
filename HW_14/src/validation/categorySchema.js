import * as Yup from "yup";

export const addCategorySchema = Yup.object({
    name: Yup.string().trim().min(2).required(),
});