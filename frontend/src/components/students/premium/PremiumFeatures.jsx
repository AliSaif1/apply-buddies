// src/components/premium/PremiumFeatures.js
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🔍',
    title: "Advanced Search Filters",
    description: "Access exclusive filters to find perfect scholarships and programs"
  },
  {
    icon: '📞',
    title: "1-on-1 Advisor Sessions",
    description: "Monthly video calls with education experts"
  },
  {
    icon: '📝',
    title: "Application Review",
    description: "Get your applications reviewed by professionals"
  },
  {
    icon: '💼',
    title: "Exclusive Job Board",
    description: "Access to premium internships and jobs"
  },
  {
    icon: '🎓',
    title: "Early Course Access",
    description: "Enroll in new courses before general release"
  },
  {
    icon: '📊',
    title: "Advanced Analytics",
    description: "Track your progress with detailed insights"
  }
];

const PremiumFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-dark font-serif mb-4">
            Premium <span className="text-secondary">Benefits</span>
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in your educational journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 hover:border-primary transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary-dark font-serif mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;