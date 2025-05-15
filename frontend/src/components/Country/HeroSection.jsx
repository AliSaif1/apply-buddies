import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
      {/* Parallax background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20"
        style={{
          willChange: 'transform',
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-secondary/10 blur-xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/5 blur-xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
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
            Discover Your Perfect <span className="text-secondary">Study Destination</span>
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Explore 100+ countries and 5,000+ universities to find your ideal education path
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg shadow-lg transition-all"
            >
              Browse Countries
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-lg border-2 border-white transition-all"
            >
              Watch Student Stories
            </motion.button>
          </div>

          {/* Stats badge */}
          <motion.div 
            className="inline-flex items-center mt-10 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
            Trusted by 50,000+ students worldwide
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;