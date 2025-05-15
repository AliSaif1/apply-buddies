import VideoCard from './VideoCard';
import NoResults from './NoResults';

const VideoSection = ({ title, videos, likedVideos, toggleLike, openVideoModal, cols, showSort }) => {
  const gridClasses = {
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };

  return (
    <section className="mb-16">
      {showSort ? (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="w-2 h-6 bg-primary-600 mr-3"></span>
            {title}
          </h2>
          <div className="text-sm text-gray-500">
            Sorted by: <span className="font-medium text-gray-700">Most Relevant</span>
          </div>
        </div>
      ) : (
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="w-2 h-6 bg-primary-600 mr-3"></span>
          {title}
        </h2>
      )}
      
      {videos.length > 0 ? (
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridClasses[cols] || 'lg:grid-cols-3'} gap-6`}>
          {videos.map(video => (
            <VideoCard 
              key={video.id}
              video={video}
              isLiked={likedVideos.includes(video.id)}
              onLike={toggleLike}
              onClick={openVideoModal}
            />
          ))}
        </div>
      ) : (
        <NoResults />
      )}
    </section>
  );
};

export default VideoSection;