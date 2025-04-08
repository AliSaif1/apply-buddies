import Video from '../models/video.js';

class VideoController {
    static async uploadVideo(req, res) {
        try {
            const { yt_video_id, title, category, country } = req.body;

            // Validate required fields
            if (!yt_video_id || !title || !category || !country || !req.user.id) {
                return res.status(400).json({ message: 'All fields are required!' });
            }

            // Create new video document and optionally associate the user with the video
            const newVideo = new Video({
                yt_video_id,
                title,
                category,
                country,
                userId: req.user.id
            });

            // Save the video to the database
            await newVideo.save();

            // Return success response
            return res.status(200).json({ message: 'Video uploaded successfully', video: newVideo });
        } catch (error) {
            console.error('Error uploading video:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
}

export default VideoController;
