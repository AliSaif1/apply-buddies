// src/components/admin/AdminHeader.jsx
import React from 'react';
import { FiMenu, FiBell } from 'react-icons/fi';

const AdminHeader = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-primary border-b border-primary-grey px-4 sm:px-6 py-3 flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden text-neutral p-1 rounded-md hover:bg-primary-grey transition-colors"
        >
          <FiMenu className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
          <h1 className="text-lg sm:text-xl font-semibold text-neutral font-sans">Admin Console</h1>
        </div>
      </div>
      <div className="flex items-center space-x-3 sm:space-x-4">
        <button className="p-2 rounded-full bg-primary-grey hover:bg-accent-dark transition-colors">
          <FiBell className="w-5 h-5 text-neutral" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-neutral font-medium">A</div>
          <span className="hidden sm:inline text-sm font-medium text-neutral">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;