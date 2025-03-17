import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        websites: { type: [String], required: true }
    },
    { timestamps: true }
);

export default mongoose.model("Country", CountrySchema);
