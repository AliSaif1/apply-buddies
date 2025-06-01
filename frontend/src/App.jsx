import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

// Layouts
import DefaultLayout from './layouts/DefaultLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

// Student Pages
import Home from './pages/students/Home';
import Scholarships from './pages/students/Scholarships';
import Universities from './pages/students/Universities';
import Courses from './pages/students/Courses';
import Premium from './pages/students/Premium';
import Chat from './pages/students/Chat';

// Auth Pages
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerifyOTPPage from './pages/VerifyOTPPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import NotFound from './pages/students/NotFound';

import About from './pages/students/About';
import Contact from './pages/students/Contact';
import BlogList from './components/students/blog/BlogList';
import BlogPage from './components/students/blog/BlogPage';

import ApplicationTips from './pages/students/ApplicationTips';
import ScholarshipGuide from './pages/students/ScholarshipGuide';
import VisaInformation from './pages/students/VisaInformation';
import StudentStories from './pages/students/StudentStories';

import CountryGuide from './pages/students/CountryGuide';
import CountriesList from './components/students/Country/CountriesList';
import CountryDetails from './components/students/Country/CountryDetails';
import CountryVideos from './components/students/Country/CountryVideos';
import CountryScholarships from './components/students/Country/CountryScholarships';
import ScholarshipDetail from './components/students/Country/ScholarshipDetail';

import VideoGallery from './pages/students/VideoGallery';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import ManageAdmins from './pages/admin/ManageAdmins';
import Countries from './pages/admin/Countries';
import AdminUniversities from './pages/admin/Universities';
import Videos from './pages/admin/Videos';
import Scholarship from './pages/admin/Scholarships';
import Analytics from './pages/admin/Analytics';

function App() {
  const [currentUser,] = useState(null);

  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* ------------------ Student Routes ------------------ */}
        {/* Header Quick Links */}
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/scholarships" element={<DefaultLayout><Scholarships /></DefaultLayout>} />
        <Route path="/universities" element={<DefaultLayout><Universities /></DefaultLayout>} />
        <Route path="/courses" element={<DefaultLayout><Courses /></DefaultLayout>} />
        <Route path="/premium" element={<DefaultLayout><Premium /></DefaultLayout>} />
        <Route path="/chat" element={<DefaultLayout><Chat currentUser={currentUser} /></DefaultLayout>} />

        {/* Auth Pages */}
        <Route path="/signup" element={<AuthLayout><SignUpPage /></AuthLayout>} />
        <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path="/forgot-password" element={<AuthLayout><ForgotPasswordPage /></AuthLayout>} />
        <Route path="/verify-otp" element={<AuthLayout><VerifyOTPPage /></AuthLayout>} />
        <Route path="/reset-password" element={<AuthLayout><ResetPasswordPage /></AuthLayout>} />

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


        {/* ------------------ Admin Routes ------------------ */}
        {/* -- Dashboard routes -- */}
        <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/admin/admins" element={<AdminLayout><ManageAdmins /></AdminLayout>} />
        <Route path="/admin/countries" element={<AdminLayout><Countries /></AdminLayout>} />
        <Route path="/admin/universities" element={<AdminLayout><AdminUniversities /></AdminLayout>} />
        <Route path="/admin/videos" element={<AdminLayout><Videos /></AdminLayout>} />
        <Route path="/admin/scholarships" element={<AdminLayout><Scholarship /></AdminLayout>} />
        <Route path="/admin/analytics" element={<AdminLayout><Analytics /></AdminLayout>} />

        <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
      </Routes>
    </Router>
  );
}

export default App;