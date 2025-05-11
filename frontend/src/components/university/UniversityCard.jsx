// src/components/universities/UniversityCard.js
import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { FaMapMarkerAlt, FaTrophy, FaGraduationCap } from 'react-icons/fa';

const UniversityCard = ({ university }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });
  const transform = useMotionTemplate`rotateX(${ySpring}deg) rotateY(${xSpring}deg)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rotateY = ((mouseX - width / 2) / width) * 10;
    const rotateX = ((mouseY - height / 2) / height) * -10;
    
    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img 
            src={university.image} 
            alt={university.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-primary-dark font-serif mb-2">
                {university.name}
              </h3>
              <p className="text-gray-600 mb-4">{university.location}</p>
            </div>
            {university.featured && (
              <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <p className="text-gray-700 mb-6">{university.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <div className="bg-primary-light bg-opacity-10 p-2 rounded-full mr-3">
                <FaTrophy className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500">World Ranking</p>
                <p className="font-medium">#{university.ranking}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-primary-light bg-opacity-10 p-2 rounded-full mr-3">
                <FaGraduationCap className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Programs</p>
                <p className="font-medium">{university.programs}+</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-primary-light bg-opacity-10 p-2 rounded-full mr-3">
                <FaMapMarkerAlt className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-medium">{university.location.split(',')[0]}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors">
              View Programs
            </button>
            <button className="px-4 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg transition-colors">
              Save University
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UniversityCard;