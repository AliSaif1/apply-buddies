// src/components/visa/VisaTips.js
import React from 'react';
import { FiAlertTriangle, FiClock, FiThumbsUp } from 'react-icons/fi';

const tips = [
  {
    icon: <FiClock className="text-yellow-600" />,
    title: "Start Early",
    content: "Begin process 3-4 months before your program starts"
  },
  {
    icon: <FiAlertTriangle className="text-red-500" />,
    title: "Avoid Common Mistakes",
    content: "Double-check all forms for accuracy before submission"
  },
  {
    icon: <FiThumbsUp className="text-green-500" />,
    title: "Interview Preparation",
    content: "Practice explaining your study plans clearly and concisely"
  }
];

const VisaTips = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-primary-dark font-serif mb-6">
        Expert Tips
      </h2>
      
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start">
            <div className="text-xl mr-3 mt-1">{tip.icon}</div>
            <div>
              <h3 className="font-medium text-gray-900">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> Requirements vary by country. Always check with the official embassy website for your specific case.
        </p>
      </div>
    </div>
  );
};

export default VisaTips;