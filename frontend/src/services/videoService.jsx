// src/services/videoService.js
// Mock API functions - replace with actual API calls in a real application
const mockVideos = [
  { 
    id: 1, 
    ytId: 'dQw4w9WgXcQ', 
    title: 'How to Apply for Scholarships', 
    university: 'Harvard University', 
    country: 'United States', 
    type: 'scholarship',
    description: 'Complete guide to scholarship applications'
  },
  { 
    id: 2, 
    ytId: '9bZkp7q19f0', 
    title: 'Visa Process Explained', 
    university: 'Stanford University', 
    country: 'United States', 
    type: 'visa',
    description: 'Step-by-step visa application process'
  },
];

export const fetchVideos = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return [...mockVideos];
};

export const createVideo = async (videoData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newVideo = {
    id: Math.max(...mockVideos.map(v => v.id)) + 1,
    ...videoData
  };
  mockVideos.push(newVideo);
  return newVideo;
};

export const updateVideo = async (id, videoData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockVideos.findIndex(v => v.id === id);
  if (index !== -1) {
    mockVideos[index] = { ...mockVideos[index], ...videoData };
    return mockVideos[index];
  }
  throw new Error('Video not found');
};

export const deleteVideo = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockVideos.findIndex(v => v.id === id);
  if (index !== -1) {
    mockVideos.splice(index, 1);
    return true;
  }
  throw new Error('Video not found');
};