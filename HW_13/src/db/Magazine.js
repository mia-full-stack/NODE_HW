import { model, Schema } from "mongoose";

const MagazineSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
    },
    issueNumber: {
        type: String,
        required: true,
        minlength: 2,
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: "publisher",
        required: true,
    },
}, { versionKey: false, timestamps: true });

const Magazine = model("magazine", MagazineSchema);

export default Magazine;