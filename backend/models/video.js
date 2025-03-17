import mongoose from "mongoose";

const Video = new mongoose.Schema(
    {
        video_id: { type: String, required: true, trim: true },
        title: { type: String, required: true, trim: true },
        country: { type: String, enum: ["Germany", "Italy", "Canada", "USA", "Australia", "UK", "Austria"] },
    }
);

export default mongoose.model("Video", Video);
