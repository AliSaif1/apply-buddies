import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
    {
        yt_video_id: { type: String, required: true, trim: true },
        title: { type: String, required: true, trim: true },
        country: { type: String, required: true },
        category: { type: String, required: true },
        likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        viewedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    { timestamps: true } 
);

export default mongoose.model("Video", VideoSchema);
