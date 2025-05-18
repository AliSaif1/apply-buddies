// src/components/contact/ContactInfo.js
import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <FiMail className="text-primary text-xl" />,
      title: "Email",
      value: "contact@applybuddies.com",
      link: "mailto:contact@edupath.com"
    },
    {
      icon: <FiPhone className="text-primary text-xl" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FiMapPin className="text-primary text-xl" />,
      title: "Office",
      value: "123 Education St, Boston, MA 02108",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-primary-dark font-serif mb-6">
        Contact Information
      </h3>
      
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="flex items-start space-x-4 hover:bg-neutral-50 p-3 rounded-lg transition-colors"
          >
            <div className="mt-1">{item.icon}</div>
            <div>
              <h4 className="font-medium text-gray-900">{item.title}</h4>
              <p className="text-gray-600">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;