// src/pages/admin/Videos.jsx
import React, { useState, useEffect } from 'react';
import VideosTable from '../../components/admin/videos/VideosTable';
import VideoForm from '../../components/admin/videos/VideoForm';
import ConfirmationModal from '../../components/admin/ConfirmationModal';
import { fetchVideos, createVideo, updateVideo, deleteVideo } from '../../services/videoService';
import { toast } from 'react-toastify';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      setLoading(true);
      const data = await fetchVideos();
      setVideos(data);
    } catch (error) {
      toast.error('Failed to load videos');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setCurrentVideo(null);
    setIsFormOpen(true);
  };

  const handleEdit = (video) => {
    setCurrentVideo(video);
    setIsFormOpen(true);
  };

  const handleDelete = (video) => {
    setCurrentVideo(video);
    setIsDeleteModalOpen(true);
  };

  const handleSubmit = async (videoData) => {
    try {
      if (currentVideo) {
        await updateVideo(currentVideo.id, videoData);
        toast.success('Video updated successfully');
      } else {
        await createVideo(videoData);
        toast.success('Video created successfully');
      }
      setIsFormOpen(false);
      loadVideos();
    } catch (error) {
      toast.error(error.message || 'Operation failed');
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteVideo(currentVideo.id);
      toast.success('Video deleted successfully');
      setIsDeleteModalOpen(false);
      loadVideos();
    } catch (error) {
      toast.error('Failed to delete video');
    }
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Manage Videos</h1>
        <button
          onClick={handleCreate}
          className="bg-secondary hover:bg-secondary-dark text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors text-sm sm:text-base w-full sm:w-auto"
        >
          Add New Video
        </button>
      </div>

      <VideosTable 
        videos={videos} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        loading={loading}
      />

      <VideoForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
        video={currentVideo}
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message={`Are you sure you want to delete "${currentVideo?.title || 'this video'}"?`}
      />
    </div>
  );
};

export default Videos;