// src/components/NewsletterSection.js
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const NewsletterSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-primary to-primary-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-secondary/10 text-secondary rounded-full p-3 mb-4">
            <FaPaperPlane className="h-6 w-6" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
            Never Miss an <span className="text-secondary">Opportunity</span>
          </h3>
          <p className="text-neutral-dark text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to get personalized scholarship recommendations, university updates, 
            and exclusive application tips delivered to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="w-full px-5 py-4 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent placeholder-gray-400"
              />
            </div>
            <button 
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Subscribe <FaPaperPlane className="h-4 w-4" />
            </button>
          </form>
          
          <p className="text-neutral-dark text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white/10 backdrop-blur-sm"></div>
    </section>
  );
};

export default NewsletterSection;