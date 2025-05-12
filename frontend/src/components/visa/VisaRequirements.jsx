// src/components/visa/VisaRequirements.js
import React from 'react';
import { FiFileText, FiDollarSign, FiCalendar } from 'react-icons/fi';

const requirements = [
  "Valid passport (6+ months validity)",
  "Letter of acceptance from institution",
  "Proof of financial support",
  "Health insurance coverage",
  "English proficiency test scores",
  "Academic transcripts",
  "Passport-sized photographs"
];

const VisaRequirements = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-primary-dark font-serif mb-6">
        General Requirements
      </h2>
      
      <ul className="space-y-3">
        {requirements.map((item, index) => (
          <li key={index} className="flex items-start">
            <FiFileText className="text-primary mt-1 mr-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center text-blue-800 mb-2">
          <FiDollarSign className="mr-2" />
          <span className="font-medium">Average Processing Fee:</span>
        </div>
        <p className="text-sm">$160-$500 depending on country</p>
        
        <div className="flex items-center text-blue-800 mt-4 mb-2">
          <FiCalendar className="mr-2" />
          <span className="font-medium">Processing Time:</span>
        </div>
        <p className="text-sm">3-8 weeks (varies by embassy)</p>
      </div>
    </div>
  );
};

export default VisaRequirements;