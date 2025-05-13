// src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaSearch, FaGraduationCap, FaUniversity, FaBook, FaGlobeAmericas, FaUserGraduate, FaMedal, FaChevronRight, FaStar } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('scholarships');
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [10, -10, 10],
      transition: { repeat: Infinity, duration: 6, ease: "easeInOut" }
    });
  }, [controls]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-10% left-10% w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-10% right-10% w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full bg-secondary/5 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-16 xl:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            {/* Animated badge */}
            <motion.div 
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white shadow-lg border border-neutral-200 text-xs sm:text-sm font-medium text-primary-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-secondary mr-1 sm:mr-2 animate-pulse"></span>
              <span className="mr-1 sm:mr-2">Trusted by 50,000+ students</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-[0.6rem] sm:text-xs ml-0.5 sm:ml-1" />
                ))}
              </div>
            </motion.div>
            
            {/* Headline with animated gradient */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold font-serif leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-neutral-800">Unlock Your </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-text-gradient bg-300%">
                Global Education
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Personalized pathways to scholarships, top universities, and programs worldwide. 
              Our AI-powered platform matches you with perfect opportunities.
            </motion.p>

            {/* Interactive Search Box */}
            <motion.div 
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-2xl sm:hover:shadow-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* Tab buttons - now scrollable on mobile */}
              <div className="flex overflow-x-auto no-scrollbar border-b border-neutral-200">
                <button 
                  onClick={() => setActiveTab('scholarships')}
                  className={`flex-none sm:flex-1 flex items-center justify-center gap-2 sm:gap-3 px-3 py-3 sm:px-5 sm:py-4 text-sm sm:text-base font-medium transition-all ${activeTab === 'scholarships' ? 'text-white bg-gradient-to-r from-primary to-secondary' : 'text-neutral-600 hover:bg-neutral-50'}`}
                >
                  <FaGraduationCap className="text-sm sm:text-base" /> 
                  <span>Scholarships</span>
                </button>
                <button 
                  onClick={() => setActiveTab('universities')}
                  className={`flex-none sm:flex-1 flex items-center justify-center gap-2 sm:gap-3 px-3 py-3 sm:px-5 sm:py-4 text-sm sm:text-base font-medium transition-all ${activeTab === 'universities' ? 'text-white bg-gradient-to-r from-primary to-secondary' : 'text-neutral-600 hover:bg-neutral-50'}`}
                >
                  <FaUniversity className="text-sm sm:text-base" /> 
                  <span>Universities</span>
                </button>
                <button 
                  onClick={() => setActiveTab('courses')}
                  className={`flex-none sm:flex-1 flex items-center justify-center gap-2 sm:gap-3 px-3 py-3 sm:px-5 sm:py-4 text-sm sm:text-base font-medium transition-all ${activeTab === 'courses' ? 'text-white bg-gradient-to-r from-primary to-secondary' : 'text-neutral-600 hover:bg-neutral-50'}`}
                >
                  <FaBook className="text-sm sm:text-base" /> 
                  <span>Courses</span>
                </button>
              </div>

              {/* Search form */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 relative">
                    <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
                      <FaSearch className="text-sm sm:text-base" />
                    </div>
                    <input
                      type="text"
                      placeholder={activeTab === 'scholarships' ? "Search scholarships..." : activeTab === 'universities' ? "Search universities..." : "Search courses..."}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3.5 border border-neutral-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-transparent text-sm sm:text-base bg-neutral-50 transition-all duration-300"
                    />
                  </div>

                  <button className="w-full sm:w-auto bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white font-medium py-2.5 sm:py-3.5 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all flex items-center gap-2 justify-center shadow-md hover:shadow-lg">
                    <span>Search</span>
                    <FaChevronRight className="hidden sm:inline" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-2 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-2 sm:p-3 rounded-md sm:rounded-lg bg-primary/10 text-primary">
                    <FaUserGraduate className="text-lg sm:text-xl" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-800">50K+</div>
                    <div className="text-xs sm:text-sm text-neutral-500">Students</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-2 sm:p-3 rounded-md sm:rounded-lg bg-secondary/10 text-secondary">
                    <FaMedal className="text-lg sm:text-xl" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-800">5K+</div>
                    <div className="text-xs sm:text-sm text-neutral-500">Scholarships</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-2 sm:p-3 rounded-md sm:rounded-lg bg-accent/10 text-accent">
                    <FaGlobeAmericas className="text-lg sm:text-xl" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-800">100+</div>
                    <div className="text-xs sm:text-sm text-neutral-500">Countries</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Section with Floating Elements */}
          <div className="w-full lg:w-1/2 relative mt-8 sm:mt-10 lg:mt-0">
            <motion.div 
              className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-12 w-full">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                  alt="Diverse students celebrating academic success"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent"></div>
              
              {/* Floating testimonial */}
              <motion.div 
                className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-lg border border-neutral-200"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                      <FaUserGraduate className="text-sm sm:text-base md:text-xl" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-neutral-800">"Secured full scholarship to MIT through this platform!"</p>
                    <p className="text-[0.6rem] sm:text-xs text-neutral-500 mt-0.5 sm:mt-1">- Carlos, Computer Science</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Floating rocket badge */}
            <motion.div 
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-5 md:-right-5 bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-neutral-200 text-center z-10 w-20 sm:w-24 md:w-28"
              animate={controls}
              initial={{ y: 10 }}
            >
              <div className="flex items-center justify-center gap-1">
                <IoIosRocket className="text-lg sm:text-xl md:text-xl text-accent" />
                <div className="text-accent font-bold text-lg sm:text-xl md:text-xl">#1</div>
              </div>
              <div className="text-[0.6rem] sm:text-xs text-neutral-500 font-medium">Education Platform</div>
            </motion.div>

            {/* Floating university logos */}
            <motion.div 
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-neutral-200 z-10 w-28 sm:w-32 md:w-36"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="text-[0.6rem] sm:text-xs font-medium text-neutral-700 mb-0.5 sm:mb-1">Partner Universities:</div>
              <div className="flex justify-between">
                <div className="text-[0.6rem] sm:text-xs font-bold text-primary">MIT</div>
                <div className="text-[0.6rem] sm:text-xs font-bold text-secondary">Harvard</div>
                <div className="text-[0.6rem] sm:text-xs font-bold text-accent">Stanford</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;