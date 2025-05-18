// src/components/universities/UniversityMap.js
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const UniversityMap = () => {
  const [activeCountry, setActiveCountry] = useState(null);
  const globeRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Sample data - in a real app, this would come from an API
  const countries = [
    { id: 'usa', name: 'United States', count: 1250, fill: '#3b82f6', coordinates: [37.0902, -95.7129] },
    { id: 'uk', name: 'United Kingdom', count: 420, fill: '#ef4444', coordinates: [55.3781, -3.4360] },
    { id: 'canada', name: 'Canada', count: 380, fill: '#10b981', coordinates: [56.1304, -106.3468] },
    { id: 'australia', name: 'Australia', count: 350, fill: '#f59e0b', coordinates: [-25.2744, 133.7751] },
    { id: 'germany', name: 'Germany', count: 320, fill: '#8b5cf6', coordinates: [51.1657, 10.4515] },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!globeRef.current) return;
      
      const rect = globeRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setRotation({
        x: (y - 0.5) * 30,
        y: (x - 0.5) * -30
      });
    };

    const globe = globeRef.current;
    globe.addEventListener('mousemove', handleMouseMove);

    return () => {
      globe.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <h3 className="text-xl font-bold text-primary-dark font-serif mb-4">
        Universities Worldwide
      </h3>
      
      <div 
        ref={globeRef}
        className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D Globe Visualization */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-blue-200 border-4 border-white shadow-xl relative">
            {/* Country markers */}
            {countries.map((country) => (
              <button
                key={country.id}
                className={`absolute w-4 h-4 rounded-full ${activeCountry === country.id ? 'ring-4 ring-accent' : ''}`}
                style={{
                  left: `calc(50% + ${country.coordinates[1] / 4}%)`,
                  top: `calc(50% - ${country.coordinates[0] / 4}%)`,
                  backgroundColor: country.fill,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setActiveCountry(country.id)}
                onMouseLeave={() => setActiveCountry(null)}
              >
                <span className="sr-only">{country.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className="bg-white bg-opacity-90 px-4 py-2 rounded-full shadow-sm flex flex-wrap justify-center gap-2">
            {countries.map((country) => (
              <div key={country.id} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-1" 
                  style={{ backgroundColor: country.fill }}
                />
                <span className="text-xs font-medium">{country.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Country Info Card */}
      {activeCountry && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 bg-neutral-light p-4 rounded-lg"
        >
          <h4 className="font-bold text-primary-dark">
            {countries.find(c => c.id === activeCountry)?.name}
          </h4>
          <p className="text-sm text-gray-700">
            {countries.find(c => c.id === activeCountry)?.count} universities available
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UniversityMap;