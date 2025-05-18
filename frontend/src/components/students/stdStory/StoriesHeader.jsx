const StoriesHeader = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', name: 'All Stories' },
    { id: 'recent', name: 'Most Recent' },
    { id: 'popular', name: 'Most Popular' }
  ];

  return (
    <div className="bg-primary text-white p-6">
      <h2 className="text-2xl font-serif font-bold mb-2">Student Success Stories</h2>
      <p className="text-primary-light mb-4">Real experiences from students who achieved their academic goals</p>
      
      <div className="flex flex-wrap gap-2">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter.id
                ? 'bg-secondary text-white'
                : 'bg-primary-light hover:bg-primary-dark text-white'
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoriesHeader;