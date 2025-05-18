// src/components/about/AboutHero.js
import React, { useEffect, useRef } from 'react';

const AboutHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const background = heroRef.current.querySelector('.parallax-bg');
        if (background) {
          background.style.transform = `translateY(${scrollY * -0.15}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-24"
    >
      <div 
        className="parallax-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20 will-change-transform"
        style={{ transition: 'transform 0.1s linear' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          className="max-w-3xl mx-auto text-center"
          style={{
            animation: 'fadeInUp 0.8s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)'
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-6">
            Our <span className="text-secondary">Story</span>
          </h1>
          <p className="text-xl text-white opacity-90 mb-8">
            Empowering students worldwide to find their perfect education pathway since 2015
          </p>
          <button
            className="px-8 py-3 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Join Our Community
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;