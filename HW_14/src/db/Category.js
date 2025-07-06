import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        unique: true,
    },
}, { versionKey: false, timestamps: true });

const Category = model("category", CategorySchema);

export default Category;