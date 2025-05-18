// src/components/premium/FAQ.js
import React, { useState } from 'react';

const faqs = [
  {
    question: "What's included in the free trial?",
    answer: "Our 7-day free trial gives you full access to all premium features, including advisor sessions and application reviews. No credit card required to start."
  },
  {
    question: "How do advisor sessions work?",
    answer: "After subscribing, you can book 30-minute video calls with our education experts through your dashboard. They'll provide personalized guidance on applications, essays, and strategy."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely! You can cancel your subscription at any time and continue to access premium features until the end of your billing period."
  },
  {
    question: "Is there a student discount?",
    answer: "Yes! Our student plan offers 58% savings for verified students. You'll need to provide a valid student ID during signup."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-serif mb-4">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our premium services
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-neutral-200 rounded-lg transition-all duration-300 ${openIndex === index ? 'shadow-md' : 'hover:shadow-sm'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-primary-dark pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button
            className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
          >
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;