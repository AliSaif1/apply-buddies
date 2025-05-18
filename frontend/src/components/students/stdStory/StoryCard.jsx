const StoryCard = ({ story, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(story)}
      className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all h-full flex flex-col"
    >
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img 
          src={story.image} 
          alt={story.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <div className="flex items-center mb-2">
          <h3 className="text-lg font-serif font-bold text-primary-dark mr-2">{story.name}</h3>
          <span className="text-xs bg-accent text-white px-2 py-1 rounded-full">{story.year}</span>
        </div>
        <p className="text-sm text-gray-600 mb-1">{story.program} • {story.university}</p>
        <blockquote className="text-gray-700 italic my-3 line-clamp-2">"{story.quote}"</blockquote>
        <div className="flex flex-wrap gap-1 mt-2">
          {story.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;