// src/layouts/AdminLayout.jsx
import React, { useState, useRef, useEffect } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminHeader from '../components/admin/AdminHeader';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();
  const headerRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close sidebar if click is outside of both sidebar and header menu button
      if (isSidebarOpen &&
        !sidebarRef.current?.contains(event.target) &&
        !headerRef.current?.contains(event.target)) {
        closeSidebar();
      }
    };

    // Add event listener when sidebar is open
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        ref={sidebarRef}
      />
      
      <div className="flex-1 flex flex-col">
        <div ref={headerRef}>
          <AdminHeader toggleSidebar={toggleSidebar} />
        </div>
        <main
          className="p-4 flex-grow"
          onClick={() => isSidebarOpen && closeSidebar()}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;