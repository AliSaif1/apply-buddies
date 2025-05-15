import { motion } from 'framer-motion';
import { FaPlay, FaHeart, FaRegHeart, FaEye, FaUniversity, FaGlobe } from 'react-icons/fa';

const VideoCard = ({ video, isLiked, onLike, onClick }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={() => onClick(video)}
    >
      <div className="relative aspect-video">
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary-600 hover:scale-110 transition-transform">
            <FaPlay className="text-lg ml-1" />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium">
            <FaGlobe className="mr-1 text-primary-600" /> {video.country}
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium">
            {video.duration}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-900 line-clamp-2">{video.title}</h3>
          <button
            className="text-gray-400 hover:text-red-500 transition-colors ml-2"
            onClick={(e) => {
              e.stopPropagation();
              onLike(video.id);
            }}
          >
            {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </button>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <FaUniversity className="mr-1 text-primary-600" />
          <span>{video.university}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>@{video.userId}</span>
          <span className="flex items-center">
            <FaEye className="mr-1" /> {video.views.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;