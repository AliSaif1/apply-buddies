import { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';

const categories = [
  { id: 'all', name: 'All Videos' },
  { id: 'admissions', name: 'Admissions' },
  { id: 'scholarships', name: 'Scholarships' },
  { id: 'programs', name: 'Programs' },
  { id: 'campus life', name: 'Campus Life' },
  { id: 'visa process', name: 'Visa Process' }
];

const FilterControls = ({ activeFilter, setActiveFilter, filteredVideos }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const activeCategory = categories.find(cat => cat.id === activeFilter) || categories[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFilterOpen && !event.target.closest('.filter-container')) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isFilterOpen]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
      <div className="flex items-center space-x-4">
        {/* Mobile/Filter Dropdown Button - Now shows active selection */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors filter-container"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FaFilter className="mr-2" />
            {activeCategory.name}
            {isFilterOpen && (
              <div className="absolute z-10 mt-2 w-56 bg-white rounded-lg shadow-lg py-1">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${activeFilter === category.id
                      ? 'text-primary-600 font-medium bg-primary-50'
                      : 'text-gray-700'
                      }`}
                    onClick={() => {
                      setActiveFilter(category.id);
                      setIsFilterOpen(false);
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </button>
        </div>

        {/* Desktop Filter Buttons */}
        <div className="hidden md:flex space-x-2">
          {/* Desktop Filter Buttons */}
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-lg ${activeFilter === category.id
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Dropdown for remaining categories on desktop */}
          <div className="relative">
            {isFilterOpen && (
              <div className="absolute z-10 right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1">
                {categories.slice(4).map(category => (
                  <button
                    key={category.id}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${activeFilter === category.id
                      ? 'bg-black text-white font-medium'
                      : 'text-gray-700'
                      }`}
                    onClick={() => {
                      setActiveFilter(category.id);
                      setIsFilterOpen(false);
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-gray-600">
        Showing {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'}
      </div>
    </div>
  );
};

export default FilterControls;