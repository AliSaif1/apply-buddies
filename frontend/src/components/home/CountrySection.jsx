import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CountriesSection = () => {
  // Sample country data - replace with your actual data
  const featuredCountries = [
    { name: 'United States', students: '25K+', flag: '🇺🇸' },
    { name: 'United Kingdom', students: '18K+', flag: '🇬🇧' },
    { name: 'Canada', students: '12K+', flag: '🇨🇦' },
    { name: 'Australia', students: '9K+', flag: '🇦🇺' },
    { name: 'Germany', students: '7K+', flag: '🇩🇪' },
    { name: 'France', students: '5K+', flag: '🇫🇷' },
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">100+ Countries</span> Worldwide
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Our students have successfully pursued education across the globe in top destinations
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-10 md:mb-12 lg:mb-16">
          {featuredCountries.map((country, index) => (
            <div
              key={index}
              className="bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:shadow-md"
            >
              <div className="text-3xl mb-2">{country.flag}</div>
              <h3 className="font-medium text-neutral-800 text-sm sm:text-base mb-1">{country.name}</h3>
              <p className="text-xs sm:text-sm text-neutral-500">{country.students} students</p>
            </div>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="text-center">
          <Link to="/Countries">
            <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-primary rounded-full text-white font-medium bg-primary hover:text-white transition-all duration-300 group">
              <span>Browse All Countries</span>
              <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>

        {/* Stats Bar */}
        {/* <div className="mt-12 md:mt-16 lg:mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-2 sm:p-3">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">100+</div>
              <div className="text-xs sm:text-sm opacity-90">Countries</div>
            </div>
            <div className="p-2 sm:p-3">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">5K+</div>
              <div className="text-xs sm:text-sm opacity-90">Universities</div>
            </div>
            <div className="p-2 sm:p-3">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">50K+</div>
              <div className="text-xs sm:text-sm opacity-90">Students</div>
            </div>
            <div className="p-2 sm:p-3">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">$10M+</div>
              <div className="text-xs sm:text-sm opacity-90">Scholarships</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CountriesSection;