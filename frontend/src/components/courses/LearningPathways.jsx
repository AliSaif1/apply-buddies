// src/components/courses/LearningPathways.js
import React from 'react';
import { motion } from 'framer-motion';

const pathways = [
  {
    title: "Become a Data Scientist",
    steps: 6,
    duration: "8 months",
    courses: ["Python Fundamentals", "Statistics", "Machine Learning", "Data Visualization"],
    color: "from-purple-500 to-purple-700"
  },
  {
    title: "Master Digital Marketing",
    steps: 5,
    duration: "6 months",
    courses: ["Marketing Fundamentals", "SEO", "Social Media", "Content Strategy"],
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Full-Stack Developer",
    steps: 7,
    duration: "10 months",
    courses: ["HTML/CSS", "JavaScript", "React", "Node.js", "Databases"],
    color: "from-green-500 to-green-700"
  }
];

const LearningPathways = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-dark font-serif mb-4">
            Structured <span className="text-secondary">Learning Pathways</span>
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated sequences of courses to help you master new skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${pathway.color} rounded-xl shadow-xl overflow-hidden text-white`}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif mb-2">{pathway.title}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">📚</span>
                    <span>{pathway.steps} Courses</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">⏱️</span>
                    <span>{pathway.duration}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Course Sequence:</h4>
                  <ul className="space-y-2">
                    {pathway.courses.map((course, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2">→</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all border border-white border-opacity-30"
                >
                  Start Pathway
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathways;