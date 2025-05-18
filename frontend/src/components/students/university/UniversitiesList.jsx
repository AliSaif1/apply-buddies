// src/components/universities/UniversitiesList.js
import React from 'react';
import { motion } from 'framer-motion';
import UniversityCard from './UniversityCard';

const universities = [
  {
    id: 1,
    name: "Stanford University",
    location: "Stanford, California",
    ranking: 3,
    programs: 150,
    image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "World-renowned for innovation and entrepreneurship with a beautiful campus in Silicon Valley."
  },
  {
    id: 2,
    name: "University of Oxford",
    location: "Oxford, United Kingdom",
    ranking: 1,
    programs: 200,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "The oldest university in the English-speaking world with a rich academic tradition."
  },
  {
    id: 3,
    name: "ETH Zurich",
    location: "Zurich, Switzerland",
    ranking: 7,
    programs: 120,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Leading university in science and technology with strong industry connections."
  }
];

const UniversitiesList = ({ filters }) => {
  // In a real app, you would filter the universities based on the filters
  const filteredUniversities = universities; 

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-primary-dark font-serif">
          Featured Universities
        </h2>
        <div className="text-gray-600">
          Showing <span className="font-bold text-primary">{filteredUniversities.length}</span> institutions
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {filteredUniversities.map((university, index) => (
          <motion.div
            key={university.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <UniversityCard university={university} />
          </motion.div>
        ))}
      </div>
      
      {filteredUniversities.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No universities match your filters</h3>
          <p className="text-gray-500">Try adjusting your search criteria or browse all institutions</p>
        </div>
      )}
    </div>
  );
};

export default UniversitiesList;