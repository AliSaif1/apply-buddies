import { useState } from 'react';
import HeroSection from '../../components/students/video/HeroSection';
import FilterControls from '../../components/students/video/FilterControls';
import VideoSection from '../../components/students/video/VideoSection';
import VideoModal from '../../components/students/video/VideoModal';
import { videoData } from '../../components/students/video/videoData';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedVideos, setLikedVideos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Combine all videos for filtering
  const allVideos = [...videoData.featured, ...videoData.popular, ...videoData.recent];

  // Filter videos based on active filter and search query
  const filteredVideos = allVideos.filter(video => {
    const matchesFilter = activeFilter === 'all' || 
      video.category.toLowerCase() === activeFilter ||
      video.tags.includes(activeFilter);
    
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.country.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const toggleLike = (videoId) => {
    if (likedVideos.includes(videoId)) {
      setLikedVideos(likedVideos.filter(id => id !== videoId));
    } else {
      setLikedVideos([...likedVideos, videoId]);
    }
  };

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
    <div className="bg-gray-50 min-h-screen">
      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <div className="container mx-auto px-4 py-12">
        <FilterControls 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          filteredVideos={filteredVideos}
        />
        
        <VideoSection 
          title="All Videos"
          videos={filteredVideos}
          likedVideos={likedVideos}
          toggleLike={toggleLike}
          openVideoModal={openVideoModal}
          cols="4"
          showSort
        />
      </div>

      <VideoModal 
        isOpen={isModalOpen}
        video={selectedVideo}
        onClose={closeVideoModal}
      />
    </div>
  );
};

export default VideoGallery;