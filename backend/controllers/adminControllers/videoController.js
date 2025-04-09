import Video from '../../models/contentModels/video.js';

class VideoController {
    // Upload a video
    static async uploadVideo(req, res) {
        try {
            const { yt_video_id, title, category, country, university } = req.body;

            if (!yt_video_id || !title || !category || !country || !req.user.id) {
                return res.status(400).json({ message: 'All fields are required!' });
            }

            const newVideo = new Video({
                yt_video_id,
                title,
                category,
                country,
                university,
                userId: req.user.id
            });

            await newVideo.save();

            return res.status(200).json({ message: 'Video uploaded successfully', video: newVideo });
        } catch (error) {
            console.error('Error uploading video:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    // Update a video by ID
    static async updateVideo(req, res) {
        try {
            const videoId = req.params.id;
            const updateData = req.body;

            // Check if updateData is not empty
            if (!updateData || Object.keys(updateData).length === 0) {
                return res.status(400).json({ message: 'No update data provided' });
            }

            const video = await Video.findById(videoId);

            if (!video) {
                return res.status(404).json({ message: 'Video not found' });
            }

            // Check if the user is the owner (authorization)
            if (video.userId.toString() !== req.user.id) {
                return res.status(403).json({ message: 'Not authorized to update this video' });
            }

            const updatedVideo = await Video.findByIdAndUpdate(videoId, updateData, {
                new: true,
                runValidators: true,
            });

            return res.status(200).json({ message: 'Video updated successfully', video: updatedVideo });
        } catch (error) {
            console.error('Error updating video:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    // Delete a video by ID
    static async deleteVideo(req, res) {
        try {
            const videoId = req.params.id;

            const video = await Video.findById(videoId);

            if (!video) {
                return res.status(404).json({ message: 'Video not found' });
            }

            // Check if the user is the owner
            if (video.userId.toString() !== req.user.id) {
                return res.status(403).json({ message: 'Not authorized to delete this video' });
            }

            await Video.findByIdAndDelete(videoId);

            return res.status(200).json({ message: 'Video deleted successfully' });
        } catch (error) {
            console.error('Error deleting video:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
}

export default VideoController;
