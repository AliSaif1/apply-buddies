import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HeroSection from '../../components/students/Country/HeroSection';
import Testimonials from '../../components/students/Country/Testimonials';
import StatsSection from '../../components/students/Country/StatsSection';
import ScrollToTop from '../../components/ScrollToTop'; // Import ScrollToTop

const CountryGuide = () => {
  const location = useLocation(); // Get current route info

  return (
    <div className="bg-white">
      <ScrollToTop key={location.pathname} /> {/* Forces scroll on route change */}
      <HeroSection />
      <Outlet />
      <Testimonials />
      <StatsSection />
    </div>
  );
};

export default CountryGuide;