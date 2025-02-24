import mongoose, { Schema as _Schema, model } from "mongoose";
const { Schema } = mongoose;

const clientSchema = new Schema({
    clientName: {
        type: String,
        required: true,
    },
    clientLocation: {
        type: String,
        required: true,
    },
    clientWebsite: {
        type: String,
        required: true,
    },
    clientPhoto: {
        type: String,
        required: true,
    },
    clientAssigned: [{
        userId: {
            type: _Schema.Types.ObjectId,
            ref: "users", // Reference to the 'users' collection
            required: true,
        },
    }],
}, {
    timestamps: true,
});

export default model("Client", clientSchema);
