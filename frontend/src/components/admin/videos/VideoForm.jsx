// src/components/admin/videos/VideoForm.jsx
import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const VideoForm = ({ isOpen, onClose, onSubmit, video }) => {
  const [formData, setFormData] = useState({
    ytId: '',
    title: '',
    university: '',
    country: '',
    type: 'scholarship',
    description: ''
  });

  const videoTypes = [
    { value: 'scholarship', label: 'Scholarship' },
    { value: 'application', label: 'Application' },
    { value: 'visa', label: 'Visa' },
    { value: 'program', label: 'Program' },
    { value: 'interview', label: 'Interview' },
    { value: 'testimonial', label: 'Testimonial' }
  ];

  useEffect(() => {
    if (video) {
      setFormData({
        ytId: video.ytId,
        title: video.title,
        university: video.university,
        country: video.country,
        type: video.type,
        description: video.description || ''
      });
    } else {
      setFormData({
        ytId: '',
        title: '',
        university: '',
        country: '',
        type: 'scholarship',
        description: ''
      });
    }
  }, [video]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
          <h3 className="text-lg font-medium text-gray-900">
            {video ? 'Edit Video' : 'Create New Video'}
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-500"
            aria-label="Close"
          >
            <FiX className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 sm:p-6">
          <div className="mb-3 sm:mb-4">
            <label htmlFor="ytId" className="block text-sm font-medium text-gray-700 mb-1">
              YouTube Video ID *
            </label>
            <input
              type="text"
              id="ytId"
              name="ytId"
              value={formData.ytId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
              required
              placeholder="dQw4w9WgXcQ"
            />
            <p className="mt-1 text-xs text-gray-500">The ID after "v=" in YouTube URL</p>
          </div>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Video Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
              University *
            </label>
            <input
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country *
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Video Type *
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
              required
            >
              {videoTypes.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          <div className="mb-4 sm:mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
            />
          </div>
          <div className="flex justify-end space-x-2 sm:space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 sm:px-4 sm:py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            >
              {video ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VideoForm;