// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import DefaultLayout from './layouts/DefaultLayout';
import AuthLayout from './layouts/AuthLayout';

import Home from './pages/Home';
import About from './pages/About';
import Scholarships from './pages/Scholarships';
import Universities from './pages/Universities';
import Courses from './pages/Courses';
import Premium from './pages/Premium';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />
        <Route path="/scholarships" element={<DefaultLayout><Scholarships /></DefaultLayout>} />
        <Route path="/universities" element={<DefaultLayout><Universities /></DefaultLayout>} />
        <Route path="/courses" element={<DefaultLayout><Courses /></DefaultLayout>} />
        <Route path="/premium" element={<DefaultLayout><Premium /></DefaultLayout>} />
        <Route path="/signup" element={<AuthLayout><SignUpPage /></AuthLayout>} />
        <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
      </Routes>
    </Router>
  );
}

export default App;