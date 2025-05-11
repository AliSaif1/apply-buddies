// src/components/HeroSection.js
import React from 'react';
import { FaSearch, FaGraduationCap, FaUniversity, FaBook } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-neutral to-neutral-dark py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content - Now full width on mobile */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark font-serif leading-snug sm:leading-tight">
              Find Your Perfect <span className="text-secondary block sm:inline">Education Pathway</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-700">
              Discover scholarships, universities, and courses tailored to your dreams and academic goals.
              We've helped over 50,000 students find their ideal education opportunities.
            </p>
            
            {/* Search Box - Stacked on mobile */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover">
              <div className="flex overflow-x-auto no-scrollbar border-b border-neutral-dark">
                <button className={`flex-shrink-0 flex items-center gap-2 px-4 sm:px-6 py-3 font-medium text-white bg-primary hover:bg-primary-light transition-colors`}>
                  <FaGraduationCap className="text-sm sm:text-base" /> <span className="text-sm sm:text-base">Scholarships</span>
                </button>
                <button className="flex-shrink-0 flex items-center gap-2 px-4 sm:px-6 py-3 font-medium text-gray-600 hover:bg-neutral hover:text-primary transition-colors">
                  <FaUniversity className="text-sm sm:text-base" /> <span className="text-sm sm:text-base">Universities</span>
                </button>
                <button className="flex-shrink-0 flex items-center gap-2 px-4 sm:px-6 py-3 font-medium text-gray-600 hover:bg-neutral hover:text-primary transition-colors">
                  <FaBook className="text-sm sm:text-base" /> <span className="text-sm sm:text-base">Courses</span>
                </button>
              </div>
              
              <div className="p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 relative">
                    <input 
                      type="text" 
                      placeholder="Search for scholarships..." 
                      className="w-full pl-4 pr-10 py-2 sm:py-3 border border-neutral-dark rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-sm sm:text-base"
                    />
                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                  </div>
                  <select className="border border-neutral-dark rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-accent focus:border-transparent text-sm sm:text-base">
                    <option>All Countries</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                  <button className="bg-secondary hover:bg-secondary-light text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors flex items-center gap-2 justify-center text-sm sm:text-base">
                    <FaSearch className="text-sm sm:text-base" /> <span>Search</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Popular Searches - Adjusted for mobile */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
              <span className="text-xs sm:text-sm text-gray-600">Popular:</span>
              <a href="#" className="text-xs sm:text-sm bg-neutral hover:bg-neutral-dark text-primary px-2 sm:px-3 py-1 rounded-full transition-colors">STEM</a>
              <a href="#" className="text-xs sm:text-sm bg-neutral hover:bg-neutral-dark text-primary px-2 sm:px-3 py-1 rounded-full transition-colors">MBA</a>
              <a href="#" className="text-xs sm:text-sm bg-neutral hover:bg-neutral-dark text-primary px-2 sm:px-3 py-1 rounded-full transition-colors">Europe</a>
              <a href="#" className="text-xs sm:text-sm bg-neutral hover:bg-neutral-dark text-primary px-2 sm:px-3 py-1 rounded-full transition-colors">Engineering</a>
            </div>
          </div>

          {/* Image Section - Full width on mobile */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Happy students celebrating graduation" 
                className="rounded-xl shadow-xl w-full object-cover h-64 sm:h-80 md:h-96 lg:h-auto"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-md border border-neutral-dark">
                <div className="text-accent font-bold text-lg sm:text-xl">5,000+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Scholarships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;