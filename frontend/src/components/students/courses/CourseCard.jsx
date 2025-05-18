// src/components/courses/CourseCard.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaUserGraduate, FaClock, FaBookmark } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
          <img 
            src={course.image} 
            alt={course.title} 
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
          <button 
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-neutral transition-colors"
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark course"}
          >
            <FaBookmark className={isBookmarked ? "text-secondary" : "text-gray-400"} />
          </button>
        </div>
        
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-primary-dark font-serif mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-1">{course.university}</p>
              <p className="text-sm text-gray-500">By {course.instructor}</p>
            </div>
            <div className="flex items-center bg-primary-light bg-opacity-10 px-3 py-1 rounded-full">
              <FaStar className="text-yellow-500 mr-1" />
              <span className="font-medium">{course.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 my-6">
            <div className="flex items-center text-sm">
              <div className="bg-primary-light bg-opacity-10 p-2 rounded-full mr-3">
                <FaUserGraduate className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Level</p>
                <p className="font-medium">{course.level}</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <div className="bg-primary-light bg-opacity-10 p-2 rounded-full mr-3">
                <FaClock className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-medium">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <div className="bg-primary-light bg-opacity-10 p-2 rounded-full mr-3">
                <FaUserGraduate className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Students</p>
                <p className="font-medium">{course.students.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
            >
              Enroll Now
            </motion.button>
            <button className="px-4 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;