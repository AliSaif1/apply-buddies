// src/components/courses/Courses.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CoursesHero from '../../components/students/courses/CoursesHero';
import CoursesCategories from '../../components/students/courses/CoursesCategories';
import CoursesFilter from '../../components/students/courses/CoursesFilter';
import CoursesList from '../../components/students/courses/CoursesList';
import LearningPathways from '../../components/students/courses/LearningPathways';

const Courses = () => {
  const [filters, setFilters] = useState({
    category: '',
    level: '',
    duration: '',
    language: ''
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-light"
    >
      <CoursesHero />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <CoursesFilter filters={filters} setFilters={setFilters} />
            <CoursesCategories />
          </div>
          
          <div className="lg:col-span-3">
            <CoursesList filters={filters} />
          </div>
        </div>
      </div>
      
      <LearningPathways />
    </motion.div>
  );
};

export default Courses;