// src/components/FeaturesSection.js
import React from 'react';

const featuresData = [
  {
    icon: 'icons8-scholarship-64.png',
    title: '10,000+ Scholarships',
    desc: 'Access the largest database of verified scholarships worldwide'
  },
  {
    icon: 'https://img.icons8.com/fluency/96/university.png',
    title: '5,000+ Universities',
    desc: 'Find your dream university with detailed information'
  },
  {
    icon: 'https://img.icons8.com/fluency/96/verified-badge.png',
    title: 'Verified Experts',
    desc: 'Connect with certified education consultants'
  },
  {
    icon: 'https://img.icons8.com/fluency/96/chat.png',
    title: 'Student Community',
    desc: 'Get advice from peers who\'ve been through the process'
  }
];

const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center p-8 rounded-xl bg-white shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-dark border-opacity-10 hover:border-opacity-20">
    <div className="w-16 h-16 mb-6 p-4 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center">
      <img 
        src={icon} 
        alt={title} 
        className="w-8 h-8 object-contain" 
        loading="lazy"
      />
    </div>
    <h4 className="text-xl font-bold text-primary-dark mb-3 font-serif text-center">{title}</h4>
    <p className="text-neutral-600 text-center">{desc}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-neutral-DEFAULT">
      <div className="container mx-auto px-4 max-w-6xl">
        <h3 className="text-3xl font-bold text-primary-dark mb-12 text-center font-serif">
          Why Choose Apply Buddies?
          <span className="block w-16 h-1 bg-secondary-DEFAULT mx-auto mt-4"></span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;