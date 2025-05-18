import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../../components/students/about/AboutHero';
import MissionSection from '../../components/students/about/Mission';
import TeamSection from '../../components/students/about/Team';
import StatsSection from '../../components/students/about/Stats';
import ValuesSection from '../../components/students/about/Values';
import TestimonialsSection from '../../components/students/about/Testimonals';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <StatsSection />
      <ValuesSection />
      <TestimonialsSection />
    </motion.div>
  );
};

export default AboutPage;