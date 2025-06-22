import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 50,
    },
    image: {
        type: String,
    }
}, { versionKey: false, timestamps: true });

const Product = model("product", productSchema);

export default Product;