// src/components/ServicesSection.js
import React from 'react';
import { FaCheckCircle, FaArrowRight, FaStar } from 'react-icons/fa';

const servicesData = [
  {
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    title: 'Application Review',
    desc: 'Get your applications reviewed by experts with 10+ years experience',
    price: 49,
    features: ['3-round review', 'Priority feedback', 'Checklist included'],
    popular: false,
    rating: 4.8
  },
  {
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    title: 'Essay Editing',
    desc: 'Professional editing by Ivy League graduates',
    price: 79,
    features: ['Structural editing', 'Grammar polish', '2 revisions'],
    popular: true,
    rating: 4.9
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    title: '1-on-1 Consultation',
    desc: 'Personalized roadmap for your academic journey',
    price: 99,
    features: ['60min session', 'Follow-up notes', 'School shortlisting'],
    popular: false,
    rating: 4.7
  }
];

const ServiceCard = ({ service }) => (
  <div className={`relative flex flex-col h-full p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
    service.popular 
      ? 'border-secondary bg-white shadow-md transform md:-translate-y-2' 
      : 'border-neutral-dark border-opacity-20 bg-white hover:border-opacity-40'
  }`}>
    {service.popular && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-xs font-bold px-4 py-1 rounded-full flex items-center">
        <FaStar className="mr-1" /> MOST POPULAR
      </div>
    )}
    
    <div className="flex justify-center mb-6">
      <img 
        src={service.image} 
        alt={service.title} 
        className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
      />
    </div>
    
    <h4 className="text-xl font-bold text-primary-dark mb-2 text-center font-serif">{service.title}</h4>
    <p className="text-neutral-600 text-center mb-4">{service.desc}</p>
    
    <div className="flex justify-center items-center mb-4">
      <div className="flex items-center bg-primary/10 px-3 py-1 rounded-full">
        <FaStar className="text-yellow-500 mr-1" />
        <span className="text-sm font-medium text-primary-dark">{service.rating}</span>
      </div>
    </div>
    
    <div className="my-5 text-center">
      <span className="text-3xl font-bold text-primary-dark">${service.price}</span>
      <span className="text-neutral-600"> / service</span>
    </div>
    
    <ul className="mb-6 space-y-3">
      {service.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
          <span className="text-neutral-700">{feature}</span>
        </li>
      ))}
    </ul>
    
    <div className="mt-auto">
      <button className={`w-full flex items-center justify-center py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${
        service.popular
          ? 'bg-secondary hover:bg-secondary-dark text-white shadow-md'
          : 'bg-primary hover:bg-primary-dark text-white shadow-md'
      }`}>
        Book Now
        <FaArrowRight className="ml-2 text-sm" />
      </button>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary-dark font-serif">
            Premium Services
            <span className="block w-16 h-1 bg-secondary mx-auto mt-3"></span>
          </h3>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Get personalized help from our network of verified education consultants with 90%+ success rate
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm">
            View All Services
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;