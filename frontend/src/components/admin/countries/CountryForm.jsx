// src/components/admin/countries/CountryForm.jsx
import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const CountryForm = ({ isOpen, onClose, onSubmit, country }) => {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    flag: '',
    status: 'active'
  });

  useEffect(() => {
    if (country) {
      setFormData({
        name: country.name,
        code: country.code,
        flag: country.flag || '',
        status: country.status
      });
    } else {
      setFormData({
        name: '',
        code: '',
        flag: '',
        status: 'active'
      });
    }
  }, [country]);

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
      <div className="bg-primary-light rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b border-primary-grey px-4 sm:px-6 py-3 sm:py-4">
          <h3 className="text-lg font-medium text-neutral">
            {country ? 'Edit Country' : 'Create New Country'}
          </h3>
          <button 
            onClick={onClose} 
            className="text-neutral-dark hover:text-neutral"
            aria-label="Close"
          >
            <FiX className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 sm:p-6">
          <div className="mb-3 sm:mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-neutral mb-1">
              Country Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary-grey rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="code" className="block text-sm font-medium text-neutral mb-1">
              Country Code
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary-grey rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="flag" className="block text-sm font-medium text-neutral mb-1">
              Flag Emoji (Optional)
            </label>
            <input
              type="text"
              id="flag"
              name="flag"
              value={formData.flag}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary-grey rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
              placeholder="🇺🇸"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label htmlFor="status" className="block text-sm font-medium text-neutral mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary-grey rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-sm sm:text-base"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2 sm:space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 sm:px-4 sm:py-2 border border-primary-grey rounded-md shadow-sm text-sm font-medium text-neutral bg-primary-light hover:bg-primary-grey focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 sm:px-4 sm:py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            >
              {country ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CountryForm;