// src/components/scholarships/ScholarshipCard.js
import React from 'react';
import { FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ScholarshipCard = ({ scholarship }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-primary-dark font-serif mb-2">
              {scholarship.title}
            </h3>
            <p className="text-gray-600 mb-4">{scholarship.provider}</p>
          </div>
          {scholarship.featured && (
            <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-700 mb-6">{scholarship.description}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center">
            <FaMoneyBillWave className="text-secondary mr-2" />
            <div>
              <p className="text-xs text-gray-500">Amount</p>
              <p className="font-medium">{scholarship.amount}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-secondary mr-2" />
            <div>
              <p className="text-xs text-gray-500">Deadline</p>
              <p className="font-medium">{scholarship.deadline}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaGraduationCap className="text-secondary mr-2" />
            <div>
              <p className="text-xs text-gray-500">Degree</p>
              <p className="font-medium">{scholarship.degree}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-secondary mr-2" />
            <div>
              <p className="text-xs text-gray-500">Country</p>
              <p className="font-medium">{scholarship.country}</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors">
            View Details
          </button>
          <button className="px-4 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg transition-colors">
            Save for Later
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ScholarshipCard;