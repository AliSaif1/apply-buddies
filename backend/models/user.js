import mongoose from "mongoose";

const User = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, unique: true },
        type: { type: String, required: true, default: "admin" },
        password: { type: String, required: true },
        profile_photo: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model("User", User);
