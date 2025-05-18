// src/components/about/MissionSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-serif mb-4">
            Our <span className="text-secondary">Mission</span>
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To democratize access to quality education worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div 
            className="relative h-[400px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="absolute w-full h-full backface-hidden"
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front Side */}
              <motion.div
                className="absolute w-full h-full bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-2xl p-8 flex flex-col justify-center text-white"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <h3 className="text-2xl font-bold mb-4 font-serif">Our Vision</h3>
                <p className="text-lg opacity-90">
                  A world where every student can access the education they deserve, regardless of background or location.
                </p>
              </motion.div>

              {/* Back Side */}
              <motion.div
                className="absolute w-full h-full bg-white rounded-xl shadow-2xl p-8 flex flex-col justify-center border-2 border-primary"
                style={{ 
                  backfaceVisibility: 'hidden',
                  rotateY: 180 
                }}
              >
                <h3 className="text-2xl font-bold mb-4 font-serif text-primary-dark">2025 Goals</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Reach 1 million active users
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Partner with 10,000+ institutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    $100M in scholarships facilitated
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <div className="bg-neutral p-8 rounded-xl shadow-lg border-l-4 border-secondary">
              <h3 className="text-2xl font-bold mb-4 font-serif text-primary-dark">Our Approach</h3>
              <p className="text-gray-700">
                We combine cutting-edge technology with human expertise to guide students through every step of their educational journey.
              </p>
            </div>
            <div className="bg-neutral p-8 rounded-xl shadow-lg border-l-4 border-accent">
              <h3 className="text-2xl font-bold mb-4 font-serif text-primary-dark">Core Belief</h3>
              <p className="text-gray-700">
                Education transforms lives. We're here to ensure that transformation is accessible to all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;