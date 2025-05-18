// src/components/ScholarshipsSection.js
import React from 'react';
import { FaBookmark, FaChevronRight } from 'react-icons/fa';

const scholarshipsData = [
  {
    type: 'Full Funding',
    uniLogo: 'https://logos-download.com/wp-content/uploads/2016/02/Harvard_University_logo_emblem.png',
    title: 'International Excellence Scholarship',
    university: 'Harvard University',
    deadline: 'May 30, 2024',
    tags: ['Undergraduate', 'USA'],
    saved: false,
    image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    type: 'Partial Funding',
    uniLogo: 'https://logos-download.com/wp-content/uploads/2016/09/University_of_Oxford_logo.png',
    title: 'Global Leaders Scholarship',
    university: 'University of Oxford',
    deadline: 'June 15, 2024',
    tags: ['Postgraduate', 'UK'],
    saved: true,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    type: 'Full Funding',
    uniLogo: 'https://logos-download.com/wp-content/uploads/2021/01/ETH_Zurich_logo.png',
    title: 'STEM Research Fellowship',
    university: 'ETH Zurich',
    deadline: 'July 1, 2024',
    tags: ['PhD', 'Switzerland'],
    saved: false,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
];

const ScholarshipCard = ({ scholarship }) => {
  const [isSaved, setIsSaved] = React.useState(scholarship.saved);

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-neutral-dark border-opacity-10 hover:border-opacity-20">
      {/* Scholarship Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={scholarship.image} 
          alt={scholarship.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            scholarship.type === 'Full Funding' 
              ? 'bg-accent text-white' 
              : 'bg-secondary-light text-primary-dark'
          }`}>
            {scholarship.type}
          </span>
        </div>
        <button 
          className={`absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm ${
            isSaved ? 'text-secondary' : 'text-neutral-600 hover:text-secondary'
          }`}
          onClick={() => setIsSaved(!isSaved)}
          aria-label={isSaved ? "Unsave scholarship" : "Save scholarship"}
        >
          <FaBookmark className={isSaved ? "fill-current" : ""} />
        </button>
      </div>
      
      {/* University Logo */}
      <div className="relative flex justify-center -mt-8 mb-2">
        <img 
          src={scholarship.uniLogo} 
          alt={`${scholarship.university} logo`} 
          className="w-16 h-16 object-contain border-2 border-white rounded-lg shadow-md bg-white"
          loading="lazy"
        />
      </div>
      
      {/* Scholarship Details */}
      <div className="p-5 flex-grow">
        <h4 className="text-lg font-bold text-primary-dark mb-2 font-serif line-clamp-2 text-center">
          {scholarship.title}
        </h4>
        <p className="text-accent-dark font-medium mb-3 text-center">{scholarship.university}</p>
        
        <div className="flex items-center justify-center text-sm text-neutral-600 mb-4">
          <span className="font-semibold text-primary-light mr-1">Deadline:</span>
          <span>{scholarship.deadline}</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {scholarship.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-neutral text-neutral-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="p-4 bg-neutral-light flex justify-center items-center border-t border-neutral-dark/10">
        <button className="flex items-center text-primary-dark font-medium hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-neutral/50">
          View Details <FaChevronRight className="ml-1 text-sm" />
        </button>
      </div>
    </div>
  );
};

const ScholarshipsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-10">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-dark font-serif">
              Popular Scholarships
              <span className="block w-16 h-1 bg-secondary mt-2 md:mt-3"></span>
            </h3>
            <p className="text-neutral-600 mt-2 text-sm md:text-base">
              Browse our curated selection of top scholarships worldwide
            </p>
          </div>
          <a 
            href="#" 
            className="flex items-center text-primary-dark font-medium hover:text-primary transition-colors text-sm md:text-base"
          >
            View All Scholarships <FaChevronRight className="ml-1 text-xs md:text-sm" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {scholarshipsData.map((scholarship, index) => (
            <ScholarshipCard key={index} scholarship={scholarship} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsSection;