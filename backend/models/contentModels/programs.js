import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        des: { type: String, required: true },
        major: { type: String, required: true },
        admission_req: { type: String, required: true },
        pre_requisites: { type: String },
        deadline: { type: String, required: true },
        tuition_fee: { type: Number, required: true },
        application_fee: { type: Number, default: 0 },
        duration: { type: String },
        faculty: [{ type: String }],
        intakes: { type: String },
        language_of_instruction: { type: String, default: "English" },
        english_proficiency_required: { type: Boolean, default: true },
        research_opportunities: { type: String },
        scholarships_available: { type: Boolean, default: false },
        mode: {
            type: String,
            enum: ["on-campus", "online", "hybrid"],
            default: "on-campus",
        },
        program_level: {
            type: String,
            enum: ["Bachelors", "Masters", "PhD"],
            required: true,
        },
        documents_required: [{ type: String }],
        program_link: { type: String },
        active: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model("Program", programSchema);
