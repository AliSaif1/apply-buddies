// src/components/scholarships/ScholarshipCategories.js
import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: "STEM Fields", count: 1245, icon: "🔬" },
  { name: "Business", count: 892, icon: "💼" },
  { name: "Arts & Humanities", count: 567, icon: "🎨" },
  { name: "Sports", count: 321, icon: "⚽" },
  { name: "Women in Tech", count: 456, icon: "👩‍💻" },
  { name: "First Generation", count: 289, icon: "🌟" }
];

const ScholarshipCategories = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-primary-dark font-serif mb-6">
        Popular Categories
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            whileHover={{ scale: 1.03 }}
            className="p-4 rounded-lg bg-neutral-light hover:bg-primary-light hover:text-white transition-colors cursor-pointer"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-3">{category.icon}</span>
              <div>
                <h4 className="font-medium">{category.name}</h4>
                <p className="text-sm text-gray-500">{category.count} opportunities</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipCategories;