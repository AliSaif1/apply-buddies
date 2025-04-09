import mongoose from "mongoose";

const universitySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        country_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Country" },
        ranking: { type: Number, required: true },
        programs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
        admission_req: { type: String, required: true },
        deadline: { type: String, required: true },
        tuition_fee: { type: Number, required: true },
        faculty: [{ type: String }],
        accommodation: { type: String, default: "In-house 10k-20k USD" },
        intakes: [{ type: String }],
        websites: [{ type: String }],
        research_opportunities: { type: String },
        location: { type: String },
        accreditation: { type: String },
        student_population: { type: Number },
        alumni_network: { type: Boolean, default: false }
    }
);

export default mongoose.model("University", universitySchema);
