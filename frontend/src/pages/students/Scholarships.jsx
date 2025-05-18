// src/components/scholarships/Scholarships.js
import React, { useState } from 'react';
import ScholarshipHero from '../../components/students/scholarship/ScholarshipHero';
import ScholarshipFilters from '../../components/students/scholarship/ScholarshipFilters';
import ScholarshipList from '../../components/students/scholarship/ScholarshipList';
import ScholarshipTestimonials from '../../components/students/scholarship/ScholarshipTestimonials';

const Scholarships = () => {
  const [filters, setFilters] = useState({
    country: '',
    degree: '',
    deadline: '',
    amount: ''
  });

  return (
    <div className="bg-neutral-light">
      <ScholarshipHero />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Sticky container */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <ScholarshipFilters filters={filters} setFilters={setFilters} />
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <ScholarshipList filters={filters} />
          </div>
        </div>
      </div>
      
      <ScholarshipTestimonials />
    </div>
  );
};

export default Scholarships;