// src/services/adminService.js
// Mock API functions - replace with actual API calls in a real application
const mockAdmins = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'superadmin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin', status: 'active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'admin', status: 'inactive' },
];

export const fetchAdmins = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return [...mockAdmins];
};

export const createAdmin = async (adminData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newAdmin = {
    id: Math.max(...mockAdmins.map(a => a.id)) + 1,
    ...adminData
  };
  mockAdmins.push(newAdmin);
  return newAdmin;
};

export const updateAdmin = async (id, adminData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockAdmins.findIndex(a => a.id === id);
  if (index !== -1) {
    mockAdmins[index] = { ...mockAdmins[index], ...adminData };
    return mockAdmins[index];
  }
  throw new Error('Admin not found');
};

export const deleteAdmin = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockAdmins.findIndex(a => a.id === id);
  if (index !== -1) {
    mockAdmins.splice(index, 1);
    return true;
  }
  throw new Error('Admin not found');
};