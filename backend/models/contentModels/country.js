import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        image: { type: String, required: true },

        // Required Documents
        official_transcript: { type: Boolean, default: true },
        degree_certificate: { type: Boolean, default: true },
        academic_certificate: { type: Boolean, default: true },
        language_certificate: { type: Boolean, default: true },
        letters_of_motivation: { type: Number, default: 0 },
        recommendation_letter: { type: Number, default: 0 },
        cv: { type: Boolean, default: true },
        passport: { type: Boolean, default: true },
        passport_size_photo: { type: Boolean, default: true },
        app_form: { type: Boolean, default: true },
        national_pass: { type: Boolean, default: true },
        admission_letter: { type: Boolean, default: true },

        // Proofs Required
        block_acc_proof: { type: Boolean, default: true },
        visa_fee_proof: { type: Boolean, default: true },
        accomodation_proof: { type: Boolean, default: true },

        // Financial Requirements
        app_fee: { type: Number, default: 0 },
        eng_test: { type: Number, default: 0 },
        block_acc: { type: Number, default: 0 },
        visa_fee: { type: Number, default: 0 },
        accomodation_fee: { type: Number, default: 0 },
        health_insurance: { type: Number, default: 0 },
        travel_expense: { type: Number, default: 0 },

        // Recommended Additions
        currency: { type: String, default: "USD" },
        language_test_type: [{ type: String }], // e.g. ["IELTS", "TOEFL"]
        minimum_bank_balance: { type: Number, default: 0 },
        interview_required: { type: Boolean, default: false },
        visa_processing_time: { type: String }, // e.g. "4-6 weeks"
        embassy_location: { type: String }, // e.g. "Islamabad, Lahore"
        notes: { type: String }, // any additional country-specific info
    },
    { timestamps: true }
);

export default mongoose.model("Country", CountrySchema);
