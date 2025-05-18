import React from 'react';

const BarChart = ({ labels, datasets }) => {
  const colorMap = {
    primary: '#121212',
    secondary: '#3a7d0a',
    accent: '#4a7d64',
    warning: '#d4a53c',
    info: '#0a7d1a',
    error: '#c44c4b'
  };

  const maxValue = Math.max(...datasets.flatMap(d => d.data));

  // Calculate dynamic bar width and spacing based on number of data points
  const calculateBarDimensions = () => {
    const barCount = labels.length * datasets.length;
    const minBarWidth = 10; // Minimum width for mobile
    const maxBarWidth = 15; // Maximum width for desktop
    const minSpacing = 5; // Minimum spacing between bars for mobile
    const maxSpacing = 10; // Maximum spacing between bars for desktop
    
    // Adjust based on viewport width
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
    const scaleFactor = Math.min(1, viewportWidth / 768);
    
    const barWidth = minBarWidth + (maxBarWidth - minBarWidth) * scaleFactor;
    const spacing = minSpacing + (maxSpacing - minSpacing) * scaleFactor;
    
    return { barWidth, spacing };
  };

  const { barWidth, spacing } = calculateBarDimensions();

  return (
    <div className="h-full w-full">
      <svg 
        viewBox={`0 0 ${labels.length * (barWidth + spacing) * 2} 100`} 
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
      >
        {datasets.map((dataset, datasetIndex) => (
          labels.map((label, index) => {
            const value = dataset.data[index];
            const height = (value / maxValue) * 80;
            const x = index * (barWidth + spacing) * 2 + (datasetIndex * (barWidth + spacing));
            const y = 90 - height;

            return (
              <g key={`${datasetIndex}-${index}`}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={height}
                  fill={colorMap[dataset.color]}
                  rx="2"
                />
                {/* Label for desktop */}
                <text
                  x={x + barWidth / 2}
                  y="98"
                  textAnchor="middle"
                  fontSize="4"
                  fill="#666"
                  className="hidden sm:block"
                >
                  {label}
                </text>
              </g>
            );
          })
        ))}
      </svg>
    </div>
  );
};

export default BarChart;