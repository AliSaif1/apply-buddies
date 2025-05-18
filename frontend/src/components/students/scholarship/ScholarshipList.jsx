// src/components/scholarships/ScholarshipList.js
import React from 'react';
import { motion } from 'framer-motion';
import ScholarshipCard from './ScholarshipCard';

const scholarships = [
  {
    id: 1,
    title: "Global Excellence Scholarship",
    provider: "University of Cambridge",
    amount: "$50,000",
    deadline: "May 15, 2023",
    type: "Full Tuition",
    country: "United Kingdom",
    degree: "Bachelor's, Master's",
    featured: true,
    description: "Awarded to exceptional international students demonstrating academic excellence and leadership potential."
  },
  {
    id: 2,
    title: "STEM Women's Leadership Award",
    provider: "MIT",
    amount: "$30,000",
    deadline: "June 30, 2023",
    type: "Partial Funding",
    country: "United States",
    degree: "Master's",
    featured: false,
    description: "Supporting women pursuing graduate studies in STEM fields with leadership aspirations."
  },
  {
    id: 3,
    title: "Future Innovators Scholarship",
    provider: "ETH Zurich",
    amount: "Full Tuition + Stipend",
    deadline: "April 1, 2023",
    type: "Full Tuition",
    country: "Switzerland",
    degree: "PhD",
    featured: true,
    description: "For doctoral candidates working on groundbreaking research in technology and engineering."
  }
];

const ScholarshipList = ({ filters }) => {
  // In a real app, you would filter the scholarships based on the filters
  const filteredScholarships = scholarships; 

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-primary-dark font-serif">
          Available Scholarships
        </h2>
        <div className="text-gray-600">
          Showing <span className="font-bold text-primary">{filteredScholarships.length}</span> opportunities
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredScholarships.map((scholarship, index) => (
          <motion.div
            key={scholarship.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ScholarshipCard scholarship={scholarship} />
          </motion.div>
        ))}
      </div>
      
      {filteredScholarships.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No scholarships match your filters</h3>
          <p className="text-gray-500">Try adjusting your search criteria or browse all opportunities</p>
        </div>
      )}
    </div>
  );
};

export default ScholarshipList;