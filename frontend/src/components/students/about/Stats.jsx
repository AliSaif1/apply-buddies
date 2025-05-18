import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const statsData = [
  { number: 50, suffix: 'K+', label: 'Students Helped' },
  { number: 5, suffix: 'K+', label: 'Institutions' },
  { number: 10, suffix: 'K+', label: 'Scholarships' },
  { number: 95, suffix: '%', label: 'Success Rate' }
];

const useCountUp = (end, duration = 2000, startOnView = false) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return [count, () => setHasStarted(true)];
};

const StatCard = ({ number, suffix, label, delay }) => {
  const [count, startCounter] = useCountUp(number, 2500, true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={startCounter}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 font-serif">
        {count}{suffix}
      </div>
      <p className="text-lg opacity-90">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;