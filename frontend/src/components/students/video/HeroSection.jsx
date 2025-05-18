import { motion } from 'framer-motion';
import { FaSearch, FaPlayCircle } from 'react-icons/fa';

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pattern-dots pattern-primary-500 pattern-bg-white 
        pattern-size-6 pattern-opacity-20" />
      
      {/* Animated floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-secondary-400 opacity-20"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-white opacity-10"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6 border border-white/10"
          >
            <FaPlayCircle className="mr-2" /> Student Experiences
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Real Stories from <span className="text-secondary-400">Top Universities</span>
          </h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Discover authentic experiences from students who made it to the world's best institutions
          </motion.p>

          {/* Search input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative max-w-2xl mx-auto"
          >
            <input
              type="text"
              placeholder="Search videos by title, university or country..."
              className="w-full px-6 py-4 rounded-full shadow-xl bg-white/90 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary-400 border border-white/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex justify-center gap-8 mt-10 text-white/80 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex items-center">
              <span className="font-bold text-white mr-1">500+</span> Videos
            </div>
            <div className="flex items-center">
              <span className="font-bold text-white mr-1">100+</span> Universities
            </div>
            <div className="flex items-center">
              <span className="font-bold text-white mr-1">30+</span> Countries
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 md:h-24"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-current text-white"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-current text-white"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-current text-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;