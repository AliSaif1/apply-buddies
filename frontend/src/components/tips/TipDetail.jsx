const TipDetail = ({ tip, onBack }) => {
  return (
    <div>
      <button 
        onClick={onBack}
        className="flex items-center text-primary hover:text-primary-dark mb-4 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to all tips
      </button>

      <div className="bg-neutral-DEFAULT p-6 rounded-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="inline-block bg-accent-light text-white text-xs px-3 py-1 rounded-full mb-2">
              {tip.category}
            </span>
            <h2 className="text-2xl font-serif font-bold text-primary-dark">{tip.title}</h2>
          </div>
          <span className="text-sm text-gray-500">{tip.readTime}</span>
        </div>

        <div className="prose max-w-none text-gray-700">
          <p>{tip.content}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <h3 className="font-medium text-primary-dark mb-2">Key Takeaways</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Tailor your application materials for each position</li>
            <li>Focus on quantifiable achievements</li>
            <li>Prepare thoroughly for interviews</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TipDetail;