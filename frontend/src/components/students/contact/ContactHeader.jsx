// src/components/contact/ContactHeader.js
import React from 'react';

const ContactHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-dark font-serif">
        {title}
      </h1>
      <div className="w-16 h-1 bg-secondary mx-auto my-4" />
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default ContactHeader;