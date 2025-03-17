import mongoose from "mongoose";

const User = new mongoose.Schema(
    {
        name : { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, unique: true },
        type: { type: String, enum:["admin", "student"] , required: true, default: "student" },
        password: { type: String, required: true },
        verified: { type: Boolean, default: false },
        profile_photo: { type: String },
        bio: { type: String },
        target_countries: { type: [String], enum: ["Germany", "Italy", "Canada", "USA", "Australia", "UK", "Austria"] },
    },
    { timestamps: true }
);

export default mongoose.model("User", User);
