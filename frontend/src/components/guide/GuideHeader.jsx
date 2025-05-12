const GuideHeader = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All Guides' },
    { id: 'search', name: 'Search Strategies' },
    { id: 'application', name: 'Application Tips' },
    { id: 'safety', name: 'Safety Tips' },
    { id: 'financial', name: 'Financial Advice' }
  ];

  return (
    <div className="bg-primary text-white p-6">
      <h2 className="text-2xl font-serif font-bold mb-2">Scholarship Guide</h2>
      <p className="text-primary-light mb-4">Expert advice to help you secure scholarship funding</p>
      
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-secondary text-white'
                : 'bg-primary-light hover:bg-primary-dark text-white'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GuideHeader;