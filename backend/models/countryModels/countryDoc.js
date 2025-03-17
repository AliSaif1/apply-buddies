import mongoose from "mongoose";

const CountryDocSchema = new mongoose.Schema({
    country: { type: mongoose.Schema.Types.ObjectId, ref: "Country", required: true },
    official_transcript: { type: Boolean, default: true },
    degree_certificate: { type: Boolean, default: true },
    language_certificate: { type: Boolean, default: true },
    letter_of_motivation: { type: Boolean, default: true },
    passport: { type: Boolean, default: true },
    recommendation_letter: { type: Number, default: 0 },
    cv: { type: String, default: "" },
    passport_size_photo: { type: Boolean, default: true },
});

export default mongoose.model("CountryDoc", CountryDocSchema);
