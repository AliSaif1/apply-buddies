// src/services/universityService.js
// Mock API functions - replace with actual API calls in a real application
const mockUniversities = [
  { id: 1, name: 'Harvard University', location: 'Cambridge', country: 'United States', ranking: 1, website: 'https://harvard.edu', status: 'active' },
  { id: 2, name: 'Stanford University', location: 'Stanford', country: 'United States', ranking: 2, website: 'https://stanford.edu', status: 'active' },
  { id: 3, name: 'MIT', location: 'Cambridge', country: 'United States', ranking: 3, website: 'https://mit.edu', status: 'active' },
];

export const fetchUniversities = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return [...mockUniversities];
};

export const createUniversity = async (universityData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newUniversity = {
    id: Math.max(...mockUniversities.map(u => u.id)) + 1,
    ...universityData
  };
  mockUniversities.push(newUniversity);
  return newUniversity;
};

export const updateUniversity = async (id, universityData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockUniversities.findIndex(u => u.id === id);
  if (index !== -1) {
    mockUniversities[index] = { ...mockUniversities[index], ...universityData };
    return mockUniversities[index];
  }
  throw new Error('University not found');
};

export const deleteUniversity = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockUniversities.findIndex(u => u.id === id);
  if (index !== -1) {
    mockUniversities.splice(index, 1);
    return true;
  }
  throw new Error('University not found');
};