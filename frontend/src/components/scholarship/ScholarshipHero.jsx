// src/components/scholarships/ScholarshipHero.js
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScholarshipHero = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 md:py-28 h-[500px]">
      {/* Custom parallax background without external dependency */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20"
        style={{
          willChange: 'transform',
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            Discover <span className="text-secondary">Life-Changing</span> Scholarships
          </h1>
          <p className="text-xl text-white opacity-90 mb-8">
            We've helped students secure over $50M in funding. Your dream education is within reach.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg shadow-lg transition-colors"
          >
            Find Your Perfect Scholarship
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ScholarshipHero;