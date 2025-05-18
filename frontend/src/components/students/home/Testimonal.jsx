// src/components/TestimonialsSection.js
import React from 'react';
import { FaQuoteLeft, FaUniversity } from 'react-icons/fa';

const testimonialsData = [
  {
    quote: "Thanks to EduFind, I discovered a full scholarship at my dream university! The guidance I received was invaluable in my application process.",
    image: "/student1.jpg",
    name: "Maria Gonzalez",
    program: "MIT, Computer Science",
    rating: 5
  },
  {
    quote: "The essay editing service helped me craft a personal statement that stood out. I got accepted to all 5 universities I applied to!",
    image: "/student2.jpg",
    name: "James Chen",
    program: "Stanford University, MBA",
    rating: 5
  },
  {
    quote: "My consultant helped me navigate the complex application process for UK universities. I'm now studying at Oxford with a full scholarship!",
    image: "/student3.jpg",
    name: "Aisha Mohammed",
    program: "University of Oxford, PPE",
    rating: 4
  },
  {
    quote: "Found three perfect scholarship matches I never would have discovered on my own. The database is worth every penny!",
    image: "/student4.jpg",
    name: "David Wilson",
    program: "ETH Zurich, Mechanical Engineering",
    rating: 5
  }
];

const RatingStars = ({ rating }) => (
  <div className="flex mb-3">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-secondary-DEFAULT' : 'text-neutral-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col h-full p-8 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-dark border-opacity-10">
    <FaQuoteLeft className="text-primary-light text-3xl mb-4 opacity-20" />
    <p className="text-lg text-neutral-700 mb-6 flex-grow">"{testimonial.quote}"</p>

    <div className="flex items-center">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-primary-light"
      />
      <div className="ml-4">
        <RatingStars rating={testimonial.rating} />
        <h5 className="font-bold text-primary-dark">{testimonial.name}</h5>
        <div className="flex items-center text-sm text-neutral-600">
          <FaUniversity className="mr-1 text-accent-DEFAULT" />
          <span>{testimonial.program}</span>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-neutral-DEFAULT">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary-dark font-serif">
            Success Stories
            <span className="block w-16 h-1 bg-secondary-DEFAULT mx-auto mt-3"></span>
          </h3>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Hear from students who achieved their academic dreams with our help
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-primary text-white hover:bg-primary-dark rounded-lg font-medium transition-colors duration-300">
            <span className="text-white">Read More Stories</span>
            <FaUniversity className="ml-2 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;