import mongoose from "mongoose";

const VisaDocSchema = new mongoose.Schema({
    country: { type: mongoose.Schema.Types.ObjectId, ref: "Country", required: true },
    app_form: { type: Boolean, default: true },
    national_pass: { type: Boolean, default: true },
    passport_size_photo: { type: Boolean, default: true },
    admission_letter: { type: Boolean, default: true },
    block_acc_proof: { type: Boolean, default: true },
    health_insurance: { type: Boolean, default: true },
    language_certificate: { type: Boolean, default: true },
    academic_certificate: { type: Boolean, default: true },
    cv: { type: Boolean, default: true },
    visa_fee_proof: { type: Boolean, default: true },
    accomodation_proof: { type: Boolean, default: true },
});

export default mongoose.model("VisaDoc", VisaDocSchema);
