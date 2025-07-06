import * as Yup from "yup";

export const addProductSchema = Yup.object({
    name: Yup.string().trim().min(2).required(),
    price: Yup.number().min(0).required(),
    category: Yup.string().required(),
});