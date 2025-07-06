import { Schema, model } from "mongoose";

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
        unique: true,
    },
    content: {
        type: String,
        required: true,
        minlength: 10,
    },
    tags: {
        type: Schema.Types.ObjectId,
        ref: "tag",
        required: true,
    },
}, { versionKey: false, timestamps: true });

const Article = model("article", ArticleSchema);

export default Article;