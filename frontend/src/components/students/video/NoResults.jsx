const NoResults = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-12 text-center">
      <h3 className="text-xl font-medium text-gray-700 mb-2">No videos found</h3>
      <p className="text-gray-500">Try adjusting your search or filter criteria</p>
    </div>
  );
};

export default NoResults;