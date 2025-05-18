// src/components/universities/UniversitiesFilters.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch } from 'react-icons/fa';

const UniversitiesFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md p-6 mb-6 sticky top-6"
    >
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
          <label className="block text-sm font-medium text-gray-700 mb-1">World Ranking</label>
          <select
            name="ranking"
            value={filters.ranking}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Any Ranking</option>
            <option value="top100">Top 100</option>
            <option value="top200">Top 200</option>
            <option value="top500">Top 500</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Programs Offered</label>
          <select
            name="programs"
            value={filters.programs}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">All Programs</option>
            <option value="stem">STEM Fields</option>
            <option value="business">Business</option>
            <option value="arts">Arts & Humanities</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tuition Range</label>
          <select
            name="tuition"
            value={filters.tuition}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Any Tuition</option>
            <option value="under10k">Under $10,000/year</option>
            <option value="under20k">Under $20,000/year</option>
            <option value="under30k">Under $30,000/year</option>
          </select>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center py-2 px-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors mt-4"
        >
          <FaSearch className="mr-2" /> Apply Filters
        </motion.button>
      </div>
    </motion.div>
  );
};

export default UniversitiesFilters;