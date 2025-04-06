import mongoose from "mongoose";

const scholarshipSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },

        country_id: { type: mongoose.Schema.Types.ObjectId, ref: "Country", required: true },
        university_id: { type: mongoose.Schema.Types.ObjectId, ref: "University" }, // optional, some scholarships are university-specific

        eligibility: { type: String, required: true }, // e.g. "Pakistani nationals, age below 30, GPA > 3.0"
        degree_level: { type: String, enum: ["Bachelor", "Master", "PhD", "Postdoc", "All"], default: "All" },
        deadline: { type: String, required: true },

        benefits: {
            tuition_fee: { type: Boolean, default: false },
            monthly_stipend: { type: Boolean, default: false },
            accommodation: { type: Boolean, default: false },
            travel_cost: { type: Boolean, default: false },
            health_insurance: { type: Boolean, default: false },
            other: { type: String },
        },

        application_link: { type: String, required: true },
        is_fully_funded: { type: Boolean, default: false },
        recurring: { type: Boolean, default: false }, // yearly, etc.
        duration: { type: String }, // e.g., "2 years", "until program ends"
        notes: { type: String },

    },
    { timestamps: true }
);

export default mongoose.model("Scholarship", scholarshipSchema);
