// src/components/scholarships/ScholarshipFilters.js
import React from 'react';
import { FaFilter, FaSearch } from 'react-icons/fa';

const ScholarshipFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-primary-dark font-serif flex items-center">
          <FaFilter className="mr-2 text-secondary" /> Filters
        </h3>
        <button className="text-sm text-primary hover:text-primary-dark">
          Reset All
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <select
            name="country"
            value={filters.country}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">All Countries</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Degree Level</label>
          <select
            name="degree"
            value={filters.degree}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">All Degrees</option>
            <option value="bachelors">Bachelor's</option>
            <option value="masters">Master's</option>
            <option value="phd">PhD</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
          <select
            name="deadline"
            value={filters.deadline}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Any Time</option>
            <option value="1month">Within 1 Month</option>
            <option value="3months">Within 3 Months</option>
            <option value="6months">Within 6 Months</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <select
            name="amount"
            value={filters.amount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Any Amount</option>
            <option value="full">Full Tuition</option>
            <option value="partial">Partial Funding</option>
            <option value="5000">$5,000+</option>
            <option value="10000">$10,000+</option>
          </select>
        </div>
        
        <button className="w-full flex items-center justify-center py-2 px-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors mt-4">
          <FaSearch className="mr-2" /> Apply Filters
        </button>
      </div>
    </div>
  );
};

export default ScholarshipFilters;