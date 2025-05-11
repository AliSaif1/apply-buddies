// src/layouts/AuthLayout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-4">
      <main className="w-full max-w-md py-8">
        <Link to="/" className="text-blue-600 hover:underline text-sm">
          ← Back to Home
        </Link>
        {children}
        <div className="text-center mt-4">
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;