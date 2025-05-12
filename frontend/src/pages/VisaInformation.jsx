// src/components/visa/VisaInformation.js
import React from 'react';
import VisaHeader from '../components/visa/VisaHeader';
import VisaTypes from '../components/visa/VisaTypes';
import VisaRequirements from '../components/visa/VisaRequirements';
import VisaProcess from '../components/visa/VisaProcess';
import VisaTips from '../components/visa/VisaTips';

const VisaInformation = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <VisaHeader 
        title="Student Visa Guidance"
        subtitle="Everything you need to know about study visas"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2 space-y-8">
          <VisaTypes />
          <VisaProcess />
        </div>
        
        <div className="space-y-8">
          <VisaRequirements />
          <VisaTips />
        </div>
      </div>
    </div>
  );
};

export default VisaInformation;