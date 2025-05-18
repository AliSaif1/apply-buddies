// src/components/about/TestimonialsSection.js
import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "EduFind helped me secure a full scholarship to my dream university. I couldn't have done it without their guidance!",
    name: "Maria Gonzalez",
    university: "Harvard University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "The university matching system found programs I didn't even know existed. Perfect fit for my career goals!",
    name: "James Wilson",
    university: "University of Toronto",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "As an international student, the visa guidance was invaluable. Whole process was so much smoother with EduFind.",
    name: "Aisha Mohammed",
    university: "University of Melbourne",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "Saved me months of research and connected me with scholarship opportunities I qualified for.",
    name: "David Kim",
    university: "ETH Zurich",
    image: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 bg-neutral"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-out'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-serif mb-4">
            Success <span className="text-secondary">Stories</span>
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6 md:mb-8" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who've transformed their futures
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="flex-shrink-0 w-full px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-secondary' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mr-4"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
          <p className="text-sm text-secondary">{testimonial.university}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
    </div>
  );
};

export default TestimonialsSection;