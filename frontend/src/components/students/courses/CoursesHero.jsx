// src/components/courses/CoursesHero.js
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const CoursesHero = () => {
  const floatingElements = useRef([]);

  useEffect(() => {
    const animateElements = () => {
      floatingElements.current.forEach((el, index) => {
        if (el) {
          const yOffset = Math.sin(Date.now() / 1000 + index) * 10;
          el.style.transform = `translateY(${yOffset}px)`;
        }
      });
      requestAnimationFrame(animateElements);
    };
    
    animateElements();
    return () => cancelAnimationFrame(animateElements);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 md:py-28">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            Expand Your <span className="text-secondary">Knowledge</span>
          </h1>
          <p className="text-xl text-white opacity-90 mb-8">
            Discover 10,000+ courses from top universities and industry leaders
          </p>
          
          <div className="relative inline-block">
            <motion.input
              type="text"
              placeholder="Search courses..."
              className="pl-6 pr-12 py-4 w-full md:w-96 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-secondary"
              whileFocus={{ scale: 1.02 }}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary hover:bg-secondary-light p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Animated floating course icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['📚', '💻', '🔬', '🎨', '📊', '🌍'].map((icon, index) => (
          <div
            key={index}
            ref={el => floatingElements.current[index] = el}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index * 10)}%`,
              transition: 'transform 0.5s ease-out'
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesHero;