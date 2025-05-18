import { motion } from 'framer-motion';

const GuideList = ({ guides, onGuideSelect }) => {
  if (guides.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No guides available for this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {guides.map((guide, index) => (
        <motion.div
          key={guide.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -2 }}
        >
          <div 
            onClick={() => onGuideSelect(guide)}
            className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-accent transition-all hover:shadow-sm h-full flex flex-col"
          >
            <h3 className="font-serif font-bold text-primary-dark mb-2">{guide.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-2 flex-grow">{guide.content}</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-xs bg-accent-light text-white px-2 py-1 rounded-full">
                {guide.category}
              </span>
              <span className="text-xs text-gray-500">{guide.readTime}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GuideList;