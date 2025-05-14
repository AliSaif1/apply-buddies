import React, { useState } from 'react';
import { FaPlay, FaHeart, FaEye, FaGlobe, FaUniversity, FaGraduationCap, FaChevronRight, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const YoutubeVideoSection = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data structure (will be replaced with your actual data from DB)
  const sampleVideos = [
    {
      id: '1mSaF0a6EmU',
      title: 'How to Get Into Top Universities',
      country: 'United States',
      category: 'Admissions',
      university: 'Harvard University',
      userId: 'user123',
      likedBy: ['user456', 'user789'],
      viewedBy: 1250
    },
    {
      id: 'nROxnWBhrv0',
      title: 'Scholarship Application Tips',
      country: 'United Kingdom',
      category: 'Scholarships',
      university: 'Oxford University',
      userId: 'user456',
      likedBy: ['user123', 'user789'],
      viewedBy: 980
    },
    {
      id: 'ft3seYIoQfE',
      title: 'STEM Programs Overview',
      country: 'Canada',
      category: 'Programs',
      university: 'University of Toronto',
      userId: 'user789',
      likedBy: ['user123', 'user456'],
      viewedBy: 750
    }
  ];

  const displayedVideos = videos || sampleVideos;

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-serif mb-4">
            University <span className="text-secondary">Applications Videos</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Watch real experiences and advice from students who got into top universities worldwide.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openVideoModal(video)}
            >
              {/* Video thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary hover:scale-110 transition-transform">
                    <FaPlay className="text-xl ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium">
                    <FaGlobe className="mr-1 text-secondary" /> {video.country}
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium">
                    {video.viewedBy.toLocaleString()} <FaEye className="ml-1 text-primary" />
                  </span>
                </div>
              </div>

              {/* Video info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-neutral-800 line-clamp-2">{video.title}</h3>
                  <button
                    className="text-neutral-400 hover:text-red-500 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle like functionality here
                    }}
                  >
                    <FaHeart className={video.likedBy.length > 0 ? 'text-red-500' : ''} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-neutral-100 text-xs font-medium">
                    <FaGraduationCap className="mr-1 text-primary" /> {video.category}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-neutral-100 text-xs font-medium">
                    <FaUniversity className="mr-1 text-secondary" /> {video.university}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <span>Posted by @{video.userId}</span>
                  <span>{video.likedBy.length} likes</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
            Browse All Videos
            <FaChevronRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button positioned safely in top-left corner */}
              <button
                className="absolute top-4 left-4 z-50 bg-black/70 hover:bg-black/90 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all"
                onClick={closeVideoModal}
              >
                <FaTimes className="text-white text-xl" />
              </button>

              {/* Video container */}
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  frameBorder="0"
                />
              </div>

              {/* Video info below the video */}
              <div className="p-4 bg-black text-white">
                <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 text-sm">
                    <FaUniversity className="mr-1" /> {selectedVideo.university}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 text-sm">
                    <FaGlobe className="mr-1" /> {selectedVideo.country}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 text-sm">
                    <FaGraduationCap className="mr-1" /> {selectedVideo.category}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Posted by @{selectedVideo.userId}</span>
                  <span>{selectedVideo.viewedBy.toLocaleString()} views</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default YoutubeVideoSection;