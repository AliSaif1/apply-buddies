// src/components/scholarships/ScholarshipTestimonials.js
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Thanks to EduFind, I discovered a scholarship that covered my entire tuition at Stanford. This platform changed my life!",
    name: "Maria Gonzalez",
    university: "Stanford University",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "I never thought I could afford to study abroad until I found three matching scholarships through EduFind's search tools.",
    name: "James Wilson",
    university: "University of Toronto",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "The scholarship matching algorithm found opportunities I didn't even know existed. It's like having a personal advisor!",
    name: "Aisha Mohammed",
    university: "University of Melbourne",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const ScholarshipTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToIndex = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Success <span className="text-secondary">Stories</span>
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto" />
        </div>
        
        <div className="relative max-w-3xl mx-auto h-96">
          <div className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="px-4 sm:px-8 py-12 h-full">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8 h-full flex flex-col justify-center">
                <p className="text-lg sm:text-xl italic mb-8">"{testimonials[currentIndex].quote}"</p>
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-4 border-2 border-secondary"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-secondary">{testimonials[currentIndex].university}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-secondary' : 'bg-white bg-opacity-30'}`}
              aria-label={`View testimonial from ${testimonials[index].name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipTestimonials;