// src/components/premium/PremiumTestimonials.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "The advisor sessions alone are worth the price. My counselor helped me craft the perfect personal statement that got me into my top choice school!",
    name: "Jessica T.",
    university: "Harvard University",
    role: "Medical Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    quote: "I landed 3 scholarship offers totaling $75,000 using the premium search tools and application review service. Best investment I've made in my education.",
    name: "Marcus L.",
    university: "MIT",
    role: "Engineering Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const PremiumTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark font-serif mb-3 sm:mb-4">
            What Our <span className="text-secondary">Members Say</span>
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6 md:mb-8" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-primary to-primary-dark p-6 sm:p-8 rounded-xl text-white"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <p className="text-lg sm:text-xl italic mb-4 sm:mb-6">"{testimonials[currentIndex].quote}"</p>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-secondary-light text-sm sm:text-base">{testimonials[currentIndex].role} at {testimonials[currentIndex].university}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons - Adjusted for mobile */}
          <div className="flex justify-between mt-6 md:hidden">
            <button 
              onClick={prevTestimonial}
              className="bg-white p-2 rounded-full shadow-md hover:bg-neutral-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white p-2 rounded-full shadow-md hover:bg-neutral-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-neutral-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-neutral-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile indicator dots */}
        <div className="flex justify-center mt-6 md:hidden gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumTestimonials;