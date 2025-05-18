// src/components/premium/PricingPlans.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Monthly",
    price: "$19",
    period: "month",
    features: [
      "All premium features",
      "1 advisor session/month",
      "5 application reviews",
      "Basic analytics"
    ],
    featured: false
  },
  {
    name: "Annual",
    price: "$149",
    period: "year",
    features: [
      "All premium features",
      "2 advisor sessions/month",
      "Unlimited application reviews",
      "Advanced analytics",
      "Free ebook bundle"
    ],
    featured: true,
    savings: "35%"
  },
  {
    name: "Student",
    price: "$99",
    period: "year",
    features: [
      "All premium features",
      "1 advisor session/month",
      "10 application reviews",
      "Basic analytics",
      "Student ID required"
    ],
    featured: false,
    savings: "58%"
  }
];

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Annual plan

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-dark font-serif mb-4">
            Simple, Transparent <span className="text-secondary">Pricing</span>
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for your educational goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPlan(index)}
              className={`relative cursor-pointer ${plan.featured ? 'mt-0 md:-mt-4' : ''}`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  MOST POPULAR
                </div>
              )}
              <div className={`h-full p-8 rounded-xl border-2 ${selectedPlan === index ? 'border-primary bg-white shadow-xl' : 'border-neutral-200 bg-white'}`}>
                <h3 className="text-2xl font-bold text-primary-dark font-serif mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                  {plan.savings && (
                    <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Save {plan.savings}
                    </span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${selectedPlan === index ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-primary-dark'}`}
                >
                  {selectedPlan === index ? 'Selected' : 'Select Plan'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;