import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUniversity, FaGlobe, FaGraduationCap, FaEye, FaHeart } from 'react-icons/fa';

const VideoModal = ({ isOpen, video, onClose }) => {
  if (!video) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 left-4 z-50 bg-black/70 hover:bg-black/90 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all"
              onClick={onClose}
            >
              <FaTimes className="text-white text-xl" />
            </button>

            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                frameBorder="0"
              />
            </div>

            <div className="p-6 bg-gray-900 text-white">
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-700 text-sm">
                  <FaUniversity className="mr-1" /> {video.university}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-700 text-sm">
                  <FaGlobe className="mr-1" /> {video.country}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-700 text-sm">
                  <FaGraduationCap className="mr-1" /> {video.category}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-gray-300">
                  <span className="block">Posted by @{video.userId}</span>
                  <span className="text-sm">Uploaded on {new Date(video.uploadDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <FaEye className="mr-1" /> {video.views.toLocaleString()}
                  </span>
                  <button className="flex items-center text-red-500">
                    <FaHeart className="mr-1" /> Like
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;