import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "This platform helped me find the perfect university in Canada. The country guides were incredibly detailed!",
      name: "Sarah Johnson",
      university: "University of Toronto",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      country: "🇨🇦"
    },
    {
      id: 2,
      quote: "I discovered scholarship opportunities I never knew existed through this service. Highly recommended!",
      name: "Michael Chen",
      university: "Imperial College London",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      country: "🇬🇧"
    },
    {
      id: 3,
      quote: "The video testimonials gave me real insight into student life abroad. Made my decision so much easier!",
      name: "Priya Patel",
      university: "University of Sydney",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      country: "🇦🇺"
    },
    {
      id: 4,
      quote: "Secured a $20,000 scholarship through this platform. The application guidance was invaluable.",
      name: "David Müller",
      university: "Technical University of Munich",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      country: "🇩🇪"
    },
    {
      id: 5,
      quote: "From country selection to visa process, this was my one-stop solution for studying abroad.",
      name: "Aisha Bello",
      university: "McGill University",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg",
      country: "🇨🇦"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = React.useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    const next = () => setCurrentIndex(prev => (prev + 1) % testimonials.length);
    
    if (isAutoPlaying && !isHovered) {
      timeoutRef.current = setTimeout(next, 6000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isAutoPlaying, isHovered, testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Animation variants
  const variants = {
    enter: (direction) => ({
      y: 20,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: 'spring', stiffness: 300, damping: 20 },
        opacity: { duration: 0.3 },
        scale: { type: 'spring', stiffness: 300, damping: 20 }
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      scale: 0.95
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Students Worldwide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students who transformed their education journey with our platform
          </p>
        </motion.div>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows - Desktop */}
          <button 
            onClick={prevTestimonial}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all group"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextTestimonial}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all group"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="relative h-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                custom={1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Student Image */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary-50 to-primary-100 p-8 flex items-center justify-center">
                    <div className="relative">
                      <img 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].name}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
                        <span className="text-2xl">{testimonials[currentIndex].country}</span>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="md:w-2/3 p-8 md:p-10">
                    <div className="flex items-center mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{testimonials[currentIndex].name}</h3>
                        <p className="text-primary-600 font-medium">{testimonials[currentIndex].university}</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    {/* Mobile Navigation */}
                    <div className="flex md:hidden justify-between mt-8">
                      <button 
                        onClick={prevTestimonial}
                        className="flex items-center text-primary hover:underline"
                      >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                      </button>
                      <button 
                        onClick={nextTestimonial}
                        className="flex items-center text-primary hover:underline"
                      >
                        Next
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/10 blur-xl opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-secondary/10 blur-xl opacity-50"></div>
      </div>
    </section>
  );
};

export default Testimonials;