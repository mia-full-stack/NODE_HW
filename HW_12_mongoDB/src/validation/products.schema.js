import * as Yup from "yup";

export const productAddSchema = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().required(),
    description: Yup.string().required(),
});

export const productUpdateSchema = Yup.object({
    name: Yup.string(),
    price: Yup.number().required(),
    description: Yup.string(),
});