// src/components/contact/ContactMap.js
import React from 'react';

const ContactMap = () => {
  return (
    <div className="h-full rounded-xl shadow-md overflow-hidden">
      <iframe
        title="Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.6659667963446!2d-71.0594349246864!3d42.3518719711876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708e46b4b5f7%3A0x7b9a3f6e4b0a5a5d!2sBoston%20Public%20Library!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="min-h-[300px]"
      ></iframe>
    </div>
  );
};

export default ContactMap;