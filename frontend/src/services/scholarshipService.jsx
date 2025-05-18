// src/services/scholarshipService.js
// Mock API functions - replace with actual API calls in a real application
const mockScholarships = [
  { 
    id: 1, 
    title: 'International Student Scholarship', 
    description: 'For outstanding international students', 
    university: 'Harvard University', 
    country: 'United States', 
    type: 'full',
    deadline: '2023-12-31T00:00:00',
    amount: '$50,000',
    link: 'https://harvard.edu/scholarships'
  },
  { 
    id: 2, 
    title: 'STEM Research Grant', 
    description: 'For students pursuing STEM fields', 
    university: 'MIT', 
    country: 'United States', 
    type: 'research',
    deadline: '2023-11-15T00:00:00',
    amount: '$25,000',
    link: 'https://mit.edu/research-grants'
  },
];

export const fetchScholarships = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return [...mockScholarships];
};

export const createScholarship = async (scholarshipData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newScholarship = {
    id: Math.max(...mockScholarships.map(s => s.id)) + 1,
    ...scholarshipData
  };
  mockScholarships.push(newScholarship);
  return newScholarship;
};

export const updateScholarship = async (id, scholarshipData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockScholarships.findIndex(s => s.id === id);
  if (index !== -1) {
    mockScholarships[index] = { ...mockScholarships[index], ...scholarshipData };
    return mockScholarships[index];
  }
  throw new Error('Scholarship not found');
};

export const deleteScholarship = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockScholarships.findIndex(s => s.id === id);
  if (index !== -1) {
    mockScholarships.splice(index, 1);
    return true;
  }
  throw new Error('Scholarship not found');
};