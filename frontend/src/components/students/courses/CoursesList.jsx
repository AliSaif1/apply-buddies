// src/components/courses/CoursesList.js
import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    university: "Stanford University",
    instructor: "Dr. Andrew Ng",
    level: "Intermediate",
    duration: "10 weeks",
    rating: 4.9,
    students: 125000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Computer Science"
  },
  {
    id: 2,
    title: "Financial Markets",
    university: "Yale University",
    instructor: "Prof. Robert Shiller",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.8,
    students: 89000,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Business"
  },
  {
    id: 3,
    title: "The Science of Well-Being",
    university: "Yale University",
    instructor: "Prof. Laurie Santos",
    level: "Beginner",
    duration: "6 weeks",
    rating: 4.9,
    students: 320000,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Health"
  }
];

const CoursesList = ({ filters }) => {
  // In a real app, you would filter courses based on filters
  const filteredCourses = courses;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-primary-dark font-serif">
          Featured Courses
        </h2>
        <div className="text-gray-600">
          Showing <span className="font-bold text-primary">{filteredCourses.length}</span> courses
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CourseCard course={course} />
          </motion.div>
        ))}
      </div>
      
      {filteredCourses.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No courses match your filters</h3>
          <p className="text-gray-500">Try adjusting your search criteria or browse all courses</p>
        </div>
      )}
    </div>
  );
};

export default CoursesList;