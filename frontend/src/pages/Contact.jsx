// src/components/contact/Contact.js
import React, { useState } from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <ContactHeader 
        title="Get in Touch" 
        subtitle="We'd love to hear from you"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="space-y-8">
          <ContactForm 
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
          />
          <ContactInfo />
        </div>
        
        <div className="h-full">
          <ContactMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;