import React, { useEffect, useState } from 'react';

const LineChart = ({ data, color = 'secondary' }) => {
  const colorMap = {
    primary: '#121212',
    secondary: '#3a7d0a',
    accent: '#4a7d64',
    warning: '#d4a53c',
    info: '#0a7d1a',
    error: '#c44c4b'
  };

  const [dimensions, setDimensions] = useState({
    pointSpacing: 30,
    chartHeight: 60,
    pointRadius: 2,
    strokeWidth: 1.5
  });

  useEffect(() => {
    const handleResize = () => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 1024;
      if (width < 640) { // Mobile
        setDimensions({
          pointSpacing: 20,
          chartHeight: 50,
          pointRadius: 1.5,
          strokeWidth: 1
        });
      } else if (width < 1024) { // Tablet
        setDimensions({
          pointSpacing: 25,
          chartHeight: 55,
          pointRadius: 2,
          strokeWidth: 1.5
        });
      } else { // Desktop
        setDimensions({
          pointSpacing: 30,
          chartHeight: 60,
          pointRadius: 2.5,
          strokeWidth: 2
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative h-full w-full">
      <svg 
        viewBox={`0 0 ${data.length * dimensions.pointSpacing} ${dimensions.chartHeight}`} 
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
      >
        {data.map((value, index) => {
          const x = index * dimensions.pointSpacing;
          const y = dimensions.chartHeight - (value / Math.max(...data) * (dimensions.chartHeight - 10));
          const nextY = index < data.length - 1 ? 
            dimensions.chartHeight - (data[index + 1] / Math.max(...data) * (dimensions.chartHeight - 10)) : 
            y;
          
          return (
            <React.Fragment key={index}>
              <circle 
                cx={x} 
                cy={y} 
                r={dimensions.pointRadius} 
                fill={colorMap[color]} 
              />
              {index < data.length - 1 && (
                <line 
                  x1={x} 
                  y1={y} 
                  x2={x + dimensions.pointSpacing} 
                  y2={nextY} 
                  stroke={colorMap[color]} 
                  strokeWidth={dimensions.strokeWidth} 
                />
              )}
            </React.Fragment>
          );
        })}
      </svg>
    </div>
  );
};

export default LineChart;