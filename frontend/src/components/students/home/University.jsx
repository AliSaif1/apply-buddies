// src/components/UniversitiesSection.js
import React from 'react';
import { FaChevronRight, FaMapMarkerAlt, FaTrophy, FaGraduationCap } from 'react-icons/fa';

const universitiesData = [
  {
    image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Stanford University',
    location: 'California, USA',
    ranking: 3,
    courses: 120,
    featured: true
  },
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'University of Cambridge',
    location: 'Cambridge, UK',
    ranking: 2,
    courses: 95,
    featured: false
  },
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'ETH Zurich',
    location: 'Zurich, Switzerland',
    ranking: 7,
    courses: 80,
    featured: true
  },
  {
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'National University of Singapore',
    location: 'Singapore',
    ranking: 11,
    courses: 150,
    featured: false
  }
];

const UniversityCard = ({ university }) => (
  <div className="relative flex flex-col h-full bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-neutral-dark border-opacity-10 hover:border-opacity-20 group">
    {university.featured && (
      <div className="absolute top-4 right-4 bg-secondary-DEFAULT text-white text-xs font-bold px-3 py-1 rounded-full z-10">
        Featured
      </div>
    )}

    <div className="h-48 overflow-hidden">
      <img
        src={university.image}
        alt={`${university.name} campus`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div className="p-6 flex-grow">
      <h4 className="text-xl font-bold text-primary-dark mb-2 font-serif">{university.name}</h4>

      <div className="flex items-center text-neutral-600 mb-3">
        <FaMapMarkerAlt className="text-accent-DEFAULT mr-2" />
        <span>{university.location}</span>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        <div className="flex items-center">
          <div className="bg-primary-light bg-opacity-10 p-2 rounded-full mr-3">
            <FaTrophy className="text-primary-DEFAULT" />
          </div>
          <div>
            <p className="text-xs text-neutral-600">Ranking</p>
            <p className="font-bold text-primary-dark">#{university.ranking}</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-primary-light bg-opacity-10 p-2 rounded-full mr-3">
            <FaGraduationCap className="text-primary-DEFAULT" />
          </div>
          <div>
            <p className="text-xs text-neutral-600">Courses</p>
            <p className="font-bold text-primary-dark">{university.courses}+</p>
          </div>
        </div>
      </div>
    </div>

    <div className="px-6 pb-6">
      <button className="w-full flex items-center justify-center py-3 px-4 bg-primary text-white hover:bg-primary-dark rounded-lg transition-colors duration-300 font-medium">
        <span className="text-white">View Programs</span>
        <FaChevronRight className="ml-2 text-sm text-white" />
      </button>
    </div>
  </div>
);

const UniversitiesSection = () => {
  return (
    <section className="py-16 bg-neutral-DEFAULT">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-3xl font-bold text-primary-dark font-serif">
              Top Universities
              <span className="block w-16 h-1 bg-secondary-DEFAULT mt-3"></span>
            </h3>
            <p className="text-neutral-600 mt-2">Discover world-class institutions and their programs</p>
          </div>
          <a
            href="#"
            className="flex items-center text-primary-dark font-medium hover:text-primary-light transition-colors"
          >
            View All <FaChevronRight className="ml-1 text-sm" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {universitiesData.map((university, index) => (
            <UniversityCard key={index} university={university} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;