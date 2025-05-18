import React, { useEffect, useState } from 'react';

const PieChart = ({ data, colors, labels }) => {
  const [dimensions, setDimensions] = useState({
    outerRadius: 50,
    innerRadius: 30,
    center: 50
  });

  useEffect(() => {
    const handleResize = () => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 1024;
      if (width < 640) { // Mobile
        setDimensions({
          outerRadius: 40,
          innerRadius: 20,
          center: 40
        });
      } else { // Tablet and Desktop
        setDimensions({
          outerRadius: 50,
          innerRadius: 30,
          center: 50
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = data.reduce((sum, value) => sum + value, 0);
  let cumulativePercent = 0;

  return (
    <svg 
      viewBox={`0 0 ${dimensions.center * 2} ${dimensions.center * 2}`} 
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full"
    >
      {data.map((value, index) => {
        const percent = value / total;
        const startX = dimensions.center + dimensions.outerRadius * Math.cos(2 * Math.PI * cumulativePercent);
        const startY = dimensions.center + dimensions.outerRadius * Math.sin(2 * Math.PI * cumulativePercent);
        cumulativePercent += percent;
        const endX = dimensions.center + dimensions.outerRadius * Math.cos(2 * Math.PI * cumulativePercent);
        const endY = dimensions.center + dimensions.outerRadius * Math.sin(2 * Math.PI * cumulativePercent);
        
        const largeArcFlag = percent > 0.5 ? 1 : 0;
        
        return (
          <path
            key={index}
            d={`M ${dimensions.center} ${dimensions.center} L ${startX} ${startY} A ${dimensions.outerRadius} ${dimensions.outerRadius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
            fill={colors[index]}
          />
        );
      })}
      <circle 
        cx={dimensions.center} 
        cy={dimensions.center} 
        r={dimensions.innerRadius} 
        fill="#f5f9f6" 
      />
    </svg>
  );
};

export default PieChart;