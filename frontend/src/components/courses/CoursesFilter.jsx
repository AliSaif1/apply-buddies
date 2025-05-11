// src/components/courses/CoursesFilter.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch } from 'react-icons/fa';

const CoursesFilter = ({ filters, setFilters }) => {
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
      className="bg-white rounded-xl shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-primary-dark font-serif flex items-center">
          <FaFilter className="mr-2 text-secondary" /> Filter Courses
        </h3>
        <button 
          className="text-sm text-primary hover:text-primary-dark"
          onClick={() => setFilters({
            category: '',
            level: '',
            duration: '',
            language: ''
          })}
        >
          Reset All
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">All Categories</option>
            <option value="computer-science">Computer Science</option>
            <option value="business">Business</option>
            <option value="health">Health & Medicine</option>
            <option value="humanities">Humanities</option>
            <option value="engineering">Engineering</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
          <select
            name="level"
            value={filters.level}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
          <select
            name="duration"
            value={filters.duration}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Any Duration</option>
            <option value="1-4weeks">1-4 Weeks</option>
            <option value="1-3months">1-3 Months</option>
            <option value="3+months">3+ Months</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
          <select
            name="language"
            value={filters.language}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">All Languages</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="mandarin">Mandarin</option>
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

export default CoursesFilter;