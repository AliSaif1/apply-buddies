import { motion } from 'framer-motion';
import StoryCard from './StoryCard';

const StoriesList = ({ stories, onStorySelect }) => {
  if (stories.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No stories available for this filter.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories.map((story, index) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <StoryCard 
            story={story} 
            onSelect={onStorySelect} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StoriesList;