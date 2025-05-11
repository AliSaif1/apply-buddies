// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-white.png" 
                alt="ApplyBuddies Logo" 
                className="h-8 w-8"
              />
              <h2 className="text-xl font-bold font-serif">
                <span className="text-secondary">Apply</span>Buddies
              </h2>
            </div>
            <p className="text-neutral-dark text-sm">
              Your comprehensive education pathway finder connecting students with global opportunities.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-neutral-dark hover:text-secondary transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-dark hover:text-secondary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-dark hover:text-secondary transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-dark hover:text-secondary transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="text-lg font-bold border-b border-accent pb-2">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="/about" className="text-neutral-dark hover:text-white transition-colors flex items-center">About Us</a></li>
              <li><a href="#" className="text-neutral-dark hover:text-white transition-colors flex items-center">Contact</a></li>
              <li><a href="#" className="text-neutral-dark hover:text-white transition-colors flex items-center">Blog</a></li>
              <li><a href="#" className="text-neutral-dark hover:text-white transition-colors flex items-center">FAQ</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h5 className="text-lg font-bold border-b border-accent pb-2">Resources</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-dark hover:text-white transition-colors">Application Tips</a></li>
              <li><a href="#" className="text-neutral-dark hover:text-white transition-colors">Scholarship Guide</a></li>
              <li><a href="#" className="text-neutral-dark hover:text-white transition-colors">Visa Information</a></li>
              <li><a href="#" className="text-neutral-dark hover:text-white transition-colors">Student Stories</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h5 className="text-lg font-bold border-b border-accent pb-2">Contact</h5>
            <div className="space-y-3 text-neutral-dark">
              <div className="flex items-start space-x-2">
                <FaEnvelope className="h-4 w-4 mt-1 text-secondary" />
                <span>hello@applybuddies.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaPhone className="h-4 w-4 mt-1 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="h-4 w-4 mt-1 text-secondary" />
                <span>123 Education St, Boston, MA</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-primary pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-dark text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} EduFind. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-neutral-dark hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-dark hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-dark hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;