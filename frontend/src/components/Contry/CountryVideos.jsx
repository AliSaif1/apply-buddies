import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPlay, FaHeart, FaEye, FaGlobe, FaUniversity, FaGraduationCap, FaChevronRight, FaTimes, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const countries = [
  { id: '1', name: 'United States', flag: '🇺🇸' },
  { id: '2', name: 'United Kingdom', flag: '🇬🇧' },
  { id: '3', name: 'Canada', flag: '🇨🇦' },
  { id: '4', name: 'Australia', flag: '🇦🇺' },
  { id: '5', name: 'Germany', flag: '🇩🇪' },
  { id: '6', name: 'France', flag: '🇫🇷' },
];

const CountryVideos = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const country = countries.find(c => c.id === countryId);

  const videos = [
    {
      id: 'TntALe8HpEw',
      title: 'Campus Tour of Oxford University',
      country: 'United Kingdom',
      category: 'Campus Tour',
      university: 'Oxford University',
      userId: 'student123',
      likedBy: ['user456', 'user789'],
      viewedBy: 125000,
      thumbnail: 'https://img.youtube.com/vi/abc123/maxresdefault.jpg'
    },
    {
      id: 'yFlFxlXWXrg',
      title: 'Student Life in London',
      country: 'United Kingdom',
      category: 'Student Life',
      university: 'University College London',
      userId: 'student456',
      likedBy: ['user123'],
      viewedBy: 89000,
      thumbnail: 'https://img.youtube.com/vi/def456/maxresdefault.jpg'
    },
    {
      id: '8RHZ1K-ev2w',
      title: 'How I Got My UK Student Visa',
      country: 'United Kingdom',
      category: 'Visa Process',
      university: 'Imperial College London',
      userId: 'student789',
      likedBy: ['user123', 'user456', 'user101'],
      viewedBy: 210000,
      thumbnail: 'https://img.youtube.com/vi/ghi789/maxresdefault.jpg'
    },
  ];

  if (!country) {
    return <p className="text-center mt-10">Country not found</p>;
  }

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Back button */}
        <button
          onClick={() => navigate(`/Countries/${countryId}`)}
          className="flex items-center text-primary mb-6 hover:underline"
        >
          <FaArrowLeft className="mr-2" /> Back to {country.name} details
        </button>

        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-serif mb-4">
            Student Videos from <span className="text-secondary">{country.name}</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Watch real experiences and advice from students studying in {country.name}.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
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
                  src={video.thumbnail}
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
                    {(video.viewedBy / 1000).toFixed(0)}K <FaEye className="ml-1 text-primary" />
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
            Browse All Videos from {country.name}
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
              {/* Close button */}
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
                  <span>{(selectedVideo.viewedBy / 1000).toFixed(0)}K views</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CountryVideos;