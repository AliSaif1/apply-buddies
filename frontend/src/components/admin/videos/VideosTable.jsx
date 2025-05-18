// src/components/admin/videos/VideosTable.jsx
import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlay } from 'react-icons/fi';

const VideosTable = ({ videos, onEdit, onDelete, loading }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handlePlay = (video) => {
    setCurrentVideo(video);
  };

  const handleCloseVideo = (e) => {
    // Only close if clicking outside the video container
    if (e.target.classList.contains('video-modal')) {
      setCurrentVideo(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 text-center text-gray-500">
        No videos found. Create one to get started.
      </div>
    );
  }

  const getTypeBadgeColor = (type) => {
    switch (type) {
      case 'scholarship': return 'bg-purple-100 text-purple-800';
      case 'application': return 'bg-blue-100 text-blue-800';
      case 'visa': return 'bg-green-100 text-green-800';
      case 'program': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      {/* Video Modal */}
      {currentVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 video-modal"
          onClick={handleCloseVideo}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <div className="aspect-w-16 aspect-h-10 bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.ytId}?autoplay=1`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={currentVideo.title}
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          {/* Desktop Table */}
          <table className="min-w-full divide-y divide-gray-200 hidden sm:table">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Video</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">University</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {videos.map((video) => (
                <tr key={video.id}>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <button
                        onClick={() => handlePlay(video)}
                        className="text-secondary hover:text-secondary-dark"
                        aria-label="Play video"
                      >
                        <FiPlay className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{video.title}</div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {video.university}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {video.country}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeBadgeColor(video.type)}`}>
                      {video.type.charAt(0).toUpperCase() + video.type.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => onEdit(video)}
                      className="text-secondary hover:text-secondary-dark mr-3 sm:mr-4"
                      aria-label="Edit"
                    >
                      <FiEdit2 className="inline" />
                    </button>
                    <button
                      onClick={() => onDelete(video)}
                      className="text-accent hover:text-accent-dark"
                      aria-label="Delete"
                    >
                      <FiTrash2 className="inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-3 p-2">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow p-4 border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{video.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{video.university}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handlePlay(video)}
                      className="text-secondary hover:text-secondary-dark"
                      aria-label="Play video"
                    >
                      <FiPlay size={16} />
                    </button>
                    <button
                      onClick={() => onEdit(video)}
                      className="text-secondary hover:text-secondary-dark"
                      aria-label="Edit"
                    >
                      <FiEdit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(video)}
                      className="text-accent hover:text-accent-dark"
                      aria-label="Delete"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-500">Country</p>
                    <p className="text-sm text-gray-700">{video.country}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Type</p>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeBadgeColor(video.type)}`}>
                      {video.type.charAt(0).toUpperCase() + video.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosTable;