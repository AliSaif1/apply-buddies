// src/components/visa/VisaTypes.js
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const visaTypes = [
  {
    name: "F-1 Visa",
    country: "United States",
    description: "For academic studies at accredited institutions",
    duration: "Duration of study + 60 days"
  },
  {
    name: "Tier 4 Visa",
    country: "United Kingdom",
    description: "For students aged 16+ studying in the UK",
    duration: "Depends on course length"
  },
  {
    name: "Student Visa (subclass 500)",
    country: "Australia",
    description: "For full-time study at recognized institutions",
    duration: "Up to 5 years"
  }
];

const VisaTypes = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-primary-dark font-serif mb-6">
        Common Student Visa Types
      </h2>
      
      <div className="space-y-4">
        {visaTypes.map((visa, index) => (
          <div key={index} className="border-l-4 border-primary pl-4 py-2">
            <h3 className="font-bold text-lg">{visa.name} <span className="text-sm font-normal text-gray-600">({visa.country})</span></h3>
            <p className="text-gray-600 mb-2">{visa.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <FiCheckCircle className="mr-1 text-primary" />
              <span>{visa.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaTypes;