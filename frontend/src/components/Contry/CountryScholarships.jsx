import React from 'react';
import { useNavigate, Outlet, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBookmark, FaUniversity, FaGraduationCap, FaMoneyBillWave, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';

const CountryScholarships = () => {
  const navigate = useNavigate();
  const { countryId } = useParams();

  const scholarships = [
    {
      id: 1,
      title: "International Excellence Scholarship",
      university: "University of Toronto",
      country: "Canada",
      amount: "$20,000 per year",
      deadline: "January 15, 2024",
      level: "Undergraduate",
      description: "This prestigious scholarship recognizes outstanding international students who demonstrate exceptional academic achievement and leadership potential. The award is renewable for up to 4 years of undergraduate study.",
      eligibility: "Minimum 90% average in final year of secondary school, demonstrated leadership in community activities, IELTS 6.5 or equivalent",
      coverage: "Tuition fees, on-campus accommodation, health insurance",
      website: "https://utoronto.ca/scholarships"
    },
    {
      id: 2,
      title: "Global Leaders Scholarship",
      university: "Imperial College London",
      country: "United Kingdom",
      amount: "£10,000 one-time",
      deadline: "March 1, 2024",
      level: "Postgraduate",
      description: "Awarded to international students showing exceptional promise in STEM fields. Recipients become part of the Global Leaders Network with access to exclusive events and mentorship.",
      eligibility: "First-class undergraduate degree, research experience, IELTS 7.0, statement of purpose",
      coverage: "Tuition fee reduction",
      website: "https://imperial.ac.uk/scholarships"
    },
    {
      id: 3,
      title: "Australia Awards Scholarship",
      university: "Multiple Institutions",
      country: "Australia",
      amount: "Full tuition + living allowance",
      deadline: "April 30, 2024",
      level: "Undergraduate/Postgraduate",
      description: "Funded by the Australian government, these scholarships aim to contribute to the development needs of Australia's partner countries. Includes preparatory academic training and networking opportunities.",
      eligibility: "Citizen of participating country, minimum 2 years work experience, commitment to return home after studies",
      coverage: "Full tuition, travel allowance, establishment allowance, health coverage",
      website: "https://www.dfat.gov.au/people-to-people/australia-awards"
    }
  ];

  const handleScholarshipClick = (scholarshipId) => {
    navigate(`/Countries/${countryId}/scholarships/${scholarshipId}`);
  };

  return (
    <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Outlet for nested routes */}
        <Outlet context={scholarships} />

        {/* List view (only shown when not on a detail page) */}
        {!window.location.pathname.includes('/scholarships/') && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <button
                onClick={() => navigate(`/Countries/${countryId}/`)}
                className="flex items-center text-primary hover:underline mb-6"
              >
                <FaArrowLeft className="mr-2" />
                Back to Country
              </button>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
                Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Scholarships</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse through our curated list of international scholarships
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholarships.map((scholarship) => (
                <motion.div
                  key={scholarship.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 cursor-pointer transition-all hover:shadow-lg"
                  onClick={() => handleScholarshipClick(scholarship.id)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {scholarship.country}
                      </span>
                      <button className="text-gray-400 hover:text-yellow-500">
                        <FaBookmark />
                      </button>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{scholarship.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FaUniversity className="mr-2 text-primary" />
                      <span>{scholarship.university}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <FaMoneyBillWave className="mr-2 text-green-500" />
                        <span className="text-gray-700">{scholarship.amount}</span>
                      </div>
                      <div className="flex items-center">
                        <FaGraduationCap className="mr-2 text-blue-500" />
                        <span className="text-gray-700">{scholarship.level}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-red-500" />
                        <span className="text-gray-700">Apply by {scholarship.deadline}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryScholarships;