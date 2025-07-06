import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        unique: true,
    },
    price: {
        type: Number,
        min: 0,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
}, { versionKey: false, timestamps: true });

const Product = model("product", ProductSchema);

export default Product;