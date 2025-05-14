// src/pages/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/Hero';
import FeaturesSection from '../components/home/Feature';
import ScholarshipsSection from '../components/home/Scholarship';
import UniversitiesSection from '../components/home/University';
import ServicesSection from '../components/home/Service';
import TestimonialsSection from '../components/home/Testimonal';
import NewsletterSection from '../components/home/NewsLetter';
import YoutubeVideoSection from '../components/home/YoutubeVideoSection';
import CountrySection from '../components/home/CountrySection';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const sectionVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const HomePage = () => {
  return (
    <motion.div 
      className="home-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <CountrySection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <YoutubeVideoSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <ScholarshipsSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <UniversitiesSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <ServicesSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <FeaturesSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <TestimonialsSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <NewsletterSection />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;