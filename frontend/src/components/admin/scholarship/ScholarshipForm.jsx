// src/components/admin/scholarships/ScholarshipForm.jsx
import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const ScholarshipForm = ({ isOpen, onClose, onSubmit, scholarship }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    university: '',
    country: '',
    type: 'full',
    deadline: '',
    amount: '',
    link: ''
  });

  const scholarshipTypes = [
    { value: 'full', label: 'Full Scholarship' },
    { value: 'partial', label: 'Partial Scholarship' },
    { value: 'research', label: 'Research Grant' },
    { value: 'merit', label: 'Merit-based' },
    { value: 'need', label: 'Need-based' }
  ];

  useEffect(() => {
    if (scholarship) {
      setFormData({
        title: scholarship.title,
        description: scholarship.description,
        university: scholarship.university,
        country: scholarship.country,
        type: scholarship.type,
        deadline: scholarship.deadline.split('T')[0],
        amount: scholarship.amount || '',
        link: scholarship.link || ''
      });
    } else {
      const today = new Date();
      const nextMonth = new Date(today.setMonth(today.getMonth() + 1)).toISOString().split('T')[0];
      
      setFormData({
        title: '',
        description: '',
        university: '',
        country: '',
        type: 'full',
        deadline: nextMonth,
        amount: '',
        link: ''
      });
    }
  }, [scholarship]);

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
            {scholarship ? 'Edit Scholarship' : 'Create New Scholarship'}
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
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title *
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
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
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
          <div className="grid grid-cols-2 gap-4 mb-3 sm:mb-4">
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                Type *
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
                required
              >
                {scholarshipTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                Deadline *
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-6">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                Amount (Optional)
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
                placeholder="$10,000"
              />
            </div>
            <div>
              <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">
                Application Link (Optional)
              </label>
              <input
                type="url"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
                placeholder="https://example.com/apply"
              />
            </div>
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
              {scholarship ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScholarshipForm;