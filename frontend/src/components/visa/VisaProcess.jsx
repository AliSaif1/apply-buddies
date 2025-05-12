// src/components/visa/VisaProcess.js
import React from 'react';

const processSteps = [
  {
    step: 1,
    title: "Receive Admission",
    description: "Get acceptance letter from your educational institution"
  },
  {
    step: 2,
    title: "Pay SEVIS Fee",
    description: "Required for US visas (other countries may vary)"
  },
  {
    step: 3,
    title: "Complete Visa Application",
    description: "Fill out the DS-160 (US) or equivalent form"
  },
  {
    step: 4,
    title: "Schedule Interview",
    description: "Book appointment at nearest embassy/consulate"
  },
  {
    step: 5,
    title: "Attend Interview",
    description: "Bring all required documents for verification"
  }
];

const VisaProcess = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-primary-dark font-serif mb-6">
        Application Process
      </h2>
      
      <div className="space-y-4">
        {processSteps.map((step) => (
          <div key={step.step} className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {step.step}
              </div>
              {step.step < processSteps.length && (
                <div className="w-0.5 h-full bg-gray-300 my-1"></div>
              )}
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaProcess;