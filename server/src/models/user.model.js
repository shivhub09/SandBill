import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    company: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true
});

export default model("clients", clientSchema);
