// src/components/premium/PremiumHero.js
import React from 'react';
import { motion } from 'framer-motion';

const PremiumHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark py-20 md:py-28">
      <div className="absolute inset-0 opacity-10 pattern-dots pattern-blue-500 pattern-bg-white 
        pattern-size-6 pattern-opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <span className="mr-2">✨</span> Premium Membership
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            Unlock Your <span className="text-secondary">Full Potential</span>
          </h1>
          <p className="text-xl text-white opacity-90 mb-8">
            Get exclusive access to personalized guidance, premium content, and career-boosting tools
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg shadow-lg transition-colors"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumHero;