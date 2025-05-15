// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import DefaultLayout from './layouts/DefaultLayout';
import AuthLayout from './layouts/AuthLayout';

import Home from './pages/Home';
import Scholarships from './pages/Scholarships';
import Universities from './pages/Universities';
import Courses from './pages/Courses';
import Premium from './pages/Premium';
import Chat from './pages/Chat';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import NotFound from './pages/NotFound';

import About from './pages/About';
import Contact from './pages/Contact';
import BlogList from './components/blog/BlogList';
import BlogPage from './components/blog/BlogPage';

import ApplicationTips from './pages/ApplicationTips';
import ScholarshipGuide from './pages/ScholarshipGuide';
import VisaInformation from './pages/VisaInformation';
import StudentStories from './pages/StudentStories';

import CountryGuide from './pages/CountryGuide';
import CountriesList from './components/Country/CountriesList';
import CountryDetails from './components/Country/CountryDetails';
import CountryVideos from './components/Country/CountryVideos';
import CountryScholarships from './components/Country/CountryScholarships';
import ScholarshipDetail from './components/Country/ScholarshipDetail';

import VideoGallery from './pages/VideoGallery';

function App() {
  const [currentUser,] = useState(null);

  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* Header Quick Links */}
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/scholarships" element={<DefaultLayout><Scholarships /></DefaultLayout>} />
        <Route path="/universities" element={<DefaultLayout><Universities /></DefaultLayout>} />
        <Route path="/courses" element={<DefaultLayout><Courses /></DefaultLayout>} />
        <Route path="/premium" element={<DefaultLayout><Premium /></DefaultLayout>} />
        <Route path="/chat" element={<DefaultLayout><Chat currentUser={currentUser} /></DefaultLayout>} />
        <Route path="/signup" element={<AuthLayout><SignUpPage /></AuthLayout>} />
        <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />

        {/* Footer Quick Links */}
        <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />
        <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />
        <Route path="/blogs" element={<DefaultLayout><BlogList /></DefaultLayout>} />
        <Route path="/blog/:id" element={<DefaultLayout><BlogPage /></DefaultLayout>} />

        {/* Footer Resources Links */}
        <Route path="/application-Tips" element={<DefaultLayout><ApplicationTips /></DefaultLayout>} />
        <Route path="/scholarship-guide" element={<DefaultLayout><ScholarshipGuide /></DefaultLayout>} />
        <Route path="/Visa-info" element={<DefaultLayout><VisaInformation /></DefaultLayout>} />
        <Route path="/student-stories" element={<DefaultLayout><StudentStories /></DefaultLayout>} />

        {/* Parent Route */}
        <Route path="/Countries" element={<DefaultLayout><CountryGuide /></DefaultLayout>}>
          <Route index element={<CountriesList />} />
          <Route path=":countryId" element={<CountryDetails />} />
          <Route path=":countryId/videos" element={<CountryVideos />} />
          <Route path="/Countries/:countryId/scholarships" element={<CountryScholarships />}>
            <Route path=":scholarshipId" element={<ScholarshipDetail />} />
          </Route>
        </Route>

        <Route path="/Videos" element={<DefaultLayout><VideoGallery /></DefaultLayout>} />

        <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
      </Routes>
    </Router>
  );
}

export default App;