import { motion } from 'framer-motion';

const TipsList = ({ tips, onTipSelect }) => {
  if (tips.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tips available for this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tips.map((tip, index) => (
        <motion.div
          key={tip.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -2 }}
        >
          <div 
            onClick={() => onTipSelect(tip)}
            className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-accent transition-all hover:shadow-sm"
          >
            <h3 className="font-serif font-bold text-primary-dark mb-2">{tip.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-2">{tip.content}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs bg-accent-light text-white px-2 py-1 rounded-full">
                {tip.category}
              </span>
              <span className="text-xs text-gray-500">{tip.readTime}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TipsList;