// src/components/courses/CoursesCategories.js
import React from 'react';

const categories = [
  { name: "Computer Science", icon: "💻", count: 2450, color: "bg-blue-100 text-blue-800" },
  { name: "Business", icon: "📊", count: 1890, color: "bg-green-100 text-green-800" },
  { name: "Data Science", icon: "📈", count: 1560, color: "bg-purple-100 text-purple-800" },
  { name: "Health", icon: "🏥", count: 1320, color: "bg-red-100 text-red-800" },
  { name: "Arts & Humanities", icon: "🎨", count: 980, color: "bg-yellow-100 text-yellow-800" },
  { name: "Engineering", icon: "⚙️", count: 1750, color: "bg-indigo-100 text-indigo-800" }
];

const CoursesCategories = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 overflow-hidden">
      <h3 className="text-xl font-bold text-primary-dark font-serif mb-6">
        Popular Categories
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`p-3 rounded-lg ${category.color} flex items-center transition-all hover:shadow-md hover:translate-y-[-2px] min-h-[80px]`}
          >
            <span className="text-2xl mr-3 flex-shrink-0">{category.icon}</span>
            <div className="min-w-0">
              <div className="min-w-0 group relative">
                <h4 className="font-medium truncate">{category.name}</h4>
                <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  {category.name}
                </div>
              </div>
              <p className="text-sm opacity-80">{category.count.toLocaleString()} courses</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesCategories;