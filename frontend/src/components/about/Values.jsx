// src/components/about/ValuesSection.js
import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: '🌍',
    title: 'Global Access',
    description: 'Breaking geographical barriers in education'
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Constantly evolving our platform to serve you better'
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'Honest, transparent recommendations'
  },
  {
    icon: '❤️',
    title: 'Empathy',
    description: 'Understanding each student\'s unique journey'
  }
];

const ValuesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-serif mb-4">
            Our <span className="text-secondary">Values</span>
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-neutral p-8 rounded-xl shadow-md border-t-4 border-secondary text-center"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-primary-dark mb-2 font-serif">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;