import React, { useState, useEffect } from 'react';
import { FaSearch, FaCrown, FaCommentAlt, FaTimes, FaBars } from 'react-icons/fa';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('/');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActivePage(location.pathname);

    // Check login status based on token existence in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        'http://localhost:3001/apply-buddies/auth/logout',
        {},
        {
          withCredentials: true, // Important for cookie-based auth
        }
      );

      // Clear local storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      // Redirect to login
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/scholarships', label: 'Scholarships' },
    { path: '/universities', label: 'Universities' },
    { path: '/courses', label: 'Courses' },
    { path: '/premium', label: 'Premium', icon: <FaCrown className="mr-1" /> },
    { path: '/chat', label: 'Chat', icon: <FaCommentAlt className="mr-1" /> }
  ];

  const isActive = (path) => {
    return activePage === path ? 'bg-primary-light text-white' : 'text-primary hover:bg-neutral';
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="ApplyBuddies Logo"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full"
            />
            <h1 className="text-xl md:text-2xl font-bold text-primary font-serif">
              <span className="text-secondary">Apply</span>Buddies
            </h1>
          </Link>

          {/* Main Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${isActive(item.path)}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons and Search - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center justify-center p-2 rounded-full text-gray-500 hover:bg-neutral transition-colors">
              <FaSearch className="h-4 w-4" />
            </button>

            <div className="flex space-x-2">
              {!isLoggedIn ? (
                <>
                  {/* Show either Login or Sign Up, or both */}
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-neutral transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary hover:bg-secondary-light text-white transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button className="md:hidden p-2 rounded-md text-gray-500 hover:bg-neutral transition-colors">
              <FaSearch className="h-4 w-4" />
            </button>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-500 hover:bg-neutral focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - appears when toggled */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white py-4 px-2 shadow-lg rounded-b-lg">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center ${isActive(item.path)}`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                {!isLoggedIn ? (
                  <>
                    <Link
                      to="/login"
                      onClick={toggleMobileMenu}
                      className="w-full px-4 py-2 text-base font-medium rounded-lg border border-primary text-primary hover:bg-neutral transition-colors text-center"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={toggleMobileMenu}
                      className="w-full px-4 py-2 text-base font-medium rounded-lg bg-secondary hover:bg-secondary-light text-white transition-colors text-center"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMobileMenu();
                    }}
                    className="w-full px-4 py-2 text-base font-medium rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition-colors"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;