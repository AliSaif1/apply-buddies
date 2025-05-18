const StoryDetail = ({ story, onBack }) => {
  return (
    <div>
      <button 
        onClick={onBack}
        className="flex items-center text-primary hover:text-primary-dark mb-6 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to all stories
      </button>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="h-64 bg-gray-100 overflow-hidden">
          <img 
            src={story.image} 
            alt={story.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-dark">{story.name}</h2>
              <p className="text-gray-600">{story.program} at {story.university} ({story.year})</p>
            </div>
            <div className="mt-3 sm:mt-0">
              <span className="inline-block bg-accent text-white text-sm px-3 py-1 rounded-full">
                Student Story
              </span>
            </div>
          </div>

          <blockquote className="text-xl italic text-gray-700 border-l-4 border-secondary pl-4 my-6">
            "{story.quote}"
          </blockquote>

          <div className="prose max-w-none text-gray-700 mb-6">
            <p>{story.content}</p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-medium text-primary-dark mb-3">Key Takeaways</h3>
            <ul className="space-y-2">
              {story.tags.map((tag, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block bg-secondary text-white rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;