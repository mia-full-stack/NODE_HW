import { Schema, model } from "mongoose";

const TagSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        unique: true,
    },
    articles: {
        type: Schema.Types.ObjectId,
        ref: "article",
        required: true,
    },
}, { versionKey: false, timestamps: true });

const Tag = model("tag", TagSchema);

export default Tag;