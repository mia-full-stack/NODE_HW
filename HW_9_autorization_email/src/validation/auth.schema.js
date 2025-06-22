import * as Yup from "yup";

import { passwordSchema, emailSchema } from "./users.schema.js";

export const loginSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
});

export const registerSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
});
