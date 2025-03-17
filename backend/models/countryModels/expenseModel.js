import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    country: { type: mongoose.Schema.Types.ObjectId, ref: "Country", required: true },
    app_fee: { type: Number, default: 0 },
    eng_test: { type: Number, default: 0 },
    block_acc: { type: Number, default: 0 },
    visa_fee: { type: Number, default: 0 },
    accomodation_fee: { type: Number, default: 0 },
    health_insurance: { type: Number, default: 0 },
    travel_expense: { type: Number, default: 0 },
});

export default mongoose.model("Expense", ExpenseSchema);
