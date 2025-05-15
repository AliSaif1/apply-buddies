import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const countries = [
  { id: '1', name: 'United States', flag: '🇺🇸' },
  { id: '2', name: 'United Kingdom', flag: '🇬🇧' },
  { id: '3', name: 'Canada', flag: '🇨🇦' },
  { id: '4', name: 'Australia', flag: '🇦🇺' },
  { id: '5', name: 'Germany', flag: '🇩🇪' },
  { id: '6', name: 'France', flag: '🇫🇷' },
];

const CountryDetails = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();

  const country = countries.find(c => c.id === countryId);

  if (!country) {
    return <p className="text-center mt-10">Country not found</p>;
  }

  const handleBack = () => navigate('/Countries');
  const handleViewVideos = () => navigate(`/Countries/${countryId}/videos`);
  const handleViewScholarships = () => navigate(`/Countries/${countryId}/scholarships`);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.button 
          onClick={handleBack}
          className="flex items-center text-primary-600 hover:text-primary-800 mb-8 transition-colors"
          whileHover={{ x: -3 }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to countries
        </motion.button>
        
        <motion.div 
          className="bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-8">
            <div className="flex items-center mb-8">
              <span className="text-5xl mr-6">{country.flag}</span>
              <h2 className="text-3xl font-bold text-gray-900">{country.name}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Education System</h3>
                <p className="text-gray-700 leading-relaxed">
                  The education system in {country.name} is known for its high standards and international recognition. 
                  Universities offer a wide range of programs in English and local languages.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Facts</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Average tuition: $15,000 - $35,000/year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Popular cities: London, Manchester, Edinburgh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Post-study work visa: 2 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Application deadlines: January/October</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
            <motion.button 
              onClick={handleViewVideos}
              className="flex-1 bg-secondary hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Watch Student Experiences
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.button>
            
            <motion.button 
              onClick={handleViewScholarships}
              className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Scholarships
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountryDetails;