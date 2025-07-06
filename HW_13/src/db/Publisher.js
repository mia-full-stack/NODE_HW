import { Schema, model } from "mongoose";

import { postalCodeValidation } from "../constants/constants.js";

const PublisherSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        unique: true,
    },
    location: {
        country: {
            type: String,
            required: true,
            minlength: 2,
        },
        city: {
            type: String,
            required: true,
            minlength: 2,
        },
        street: {
            type: String,
            required: true,
            minlength: 2,
        },
        building: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: false,
            match: postalCodeValidation.value,
        },
    },
}, { versionKey: false, timestamps: true });

const Publisher = model("publisher", PublisherSchema);

export default Publisher;