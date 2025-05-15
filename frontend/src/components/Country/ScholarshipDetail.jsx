import React from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaBookmark, FaShareAlt, FaUniversity } from 'react-icons/fa';

const ScholarshipDetail = () => {
  const { scholarshipId, countryId } = useParams();
  const navigate = useNavigate();
  const scholarships = useOutletContext();

  const selectedScholarship = scholarships.find(s => s.id === parseInt(scholarshipId));

  if (!selectedScholarship) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">Scholarship not found</p>
        <button
          onClick={() => navigate('/scholarships')}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
        >
          Back to all scholarships
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={() => navigate(`/Countries/${countryId}/scholarships`)}
        className="flex items-center text-primary hover:underline mb-6"
      >
        <FaArrowLeft className="mr-2" />
        Back to all scholarships
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                {selectedScholarship.country}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {selectedScholarship.title}
              </h2>
              <div className="flex items-center text-gray-600 mb-6">
                <FaUniversity className="mr-2 text-primary" />
                <span className="text-lg">{selectedScholarship.university}</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="text-gray-400 hover:text-yellow-500 p-2 rounded-full hover:bg-yellow-50">
                <FaBookmark size={18} />
              </button>
              <button className="text-gray-400 hover:text-primary p-2 rounded-full hover:bg-blue-50">
                <FaShareAlt size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-500 mb-2">Award Value</h4>
              <p className="text-xl text-gray-900">{selectedScholarship.amount}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-500 mb-2">Study Level</h4>
              <p className="text-xl text-gray-900">{selectedScholarship.level}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-500 mb-2">Deadline</h4>
              <p className="text-xl text-gray-900">{selectedScholarship.deadline}</p>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
            <p className="text-gray-700 mb-6">{selectedScholarship.description}</p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
            <p className="text-gray-700 mb-6">{selectedScholarship.eligibility}</p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">What's Covered</h3>
            <p className="text-gray-700 mb-6">{selectedScholarship.coverage}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={selectedScholarship.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg text-center transition-colors"
            >
              Visit Official Website
            </a>
            <button className="px-6 py-3 border border-primary text-primary hover:bg-primary/5 font-medium rounded-lg transition-colors">
              Save Scholarship
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScholarshipDetail;