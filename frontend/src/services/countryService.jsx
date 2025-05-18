// src/services/countryService.js
// Mock API functions - replace with actual API calls in a real application
const mockCountries = [
  { id: 1, name: 'United States', code: 'US', flag: '🇺🇸', status: 'active' },
  { id: 2, name: 'United Kingdom', code: 'UK', flag: '🇬🇧', status: 'active' },
  { id: 3, name: 'Canada', code: 'CA', flag: '🇨🇦', status: 'active' },
];

export const fetchCountries = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return [...mockCountries];
};

export const createCountry = async (countryData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newCountry = {
    id: Math.max(...mockCountries.map(c => c.id)) + 1,
    ...countryData
  };
  mockCountries.push(newCountry);
  return newCountry;
};

export const updateCountry = async (id, countryData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockCountries.findIndex(c => c.id === id);
  if (index !== -1) {
    mockCountries[index] = { ...mockCountries[index], ...countryData };
    return mockCountries[index];
  }
  throw new Error('Country not found');
};

export const deleteCountry = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockCountries.findIndex(c => c.id === id);
  if (index !== -1) {
    mockCountries.splice(index, 1);
    return true;
  }
  throw new Error('Country not found');
};