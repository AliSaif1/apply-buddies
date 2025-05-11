// src/components/premium/Premium.js
import React from 'react';
import { motion } from 'framer-motion';
import PremiumHero from '../components/premium/PremiumHero';
import PremiumFeatures from '../components/premium/PremiumFeatures';
import PricingPlans from '../components/premium/PricingPlans';
import PremiumTestimonials from '../components/premium/PremiumTestimonials';
import FAQ from '../components/premium/FAQ';

const Premium = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-neutral-50 to-neutral-100"
    >
      <PremiumHero />
      <PremiumFeatures />
      <PricingPlans />
      <PremiumTestimonials />
      <FAQ />
    </motion.div>
  );
};

export default Premium;