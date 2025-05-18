// src/pages/admin/Analytics.jsx
import React from 'react';
import { 
  FiUsers, 
  FiEye, 
  FiGlobe, 
  FiClock,
  FiTrendingUp,
  FiBook,
  FiDollarSign
} from 'react-icons/fi';
import LineChart from '../../components/admin/charts/LineChart';
import BarChart from '../../components/admin/charts/BarChart';
import PieChart from '../../components/admin/charts/PieChart';

const Analytics = () => {
  // Sample data - replace with real API data
  const metrics = [
    { 
      title: 'Total Visitors', 
      value: '24,589', 
      change: '+12.5%', 
      icon: <FiUsers className="text-accent" size={24} />,
      chartData: [1200, 1900, 1500, 2000, 1800, 2400, 2100]
    },
    { 
      title: 'Page Views', 
      value: '78,342', 
      change: '+18.3%', 
      icon: <FiEye className="text-secondary" size={24} />,
      chartData: [3200, 4100, 3500, 5200, 4800, 6300, 5900]
    },
    { 
      title: 'Avg. Session', 
      value: '4m 23s', 
      change: '+5.2%', 
      icon: <FiClock className="text-warning" size={24} />,
      chartData: [2.5, 3.1, 3.8, 4.2, 3.9, 4.5, 4.3]
    },
    { 
      title: 'Countries', 
      value: '24', 
      change: '+3', 
      icon: <FiGlobe className="text-info" size={24} />,
      chartData: [35, 25, 15, 10, 8, 7]
    }
  ];

  const topCountries = [
    { name: 'India', value: 35, color: 'bg-secondary' },
    { name: 'Nigeria', value: 25, color: 'bg-accent' },
    { name: 'Pakistan', value: 15, color: 'bg-warning' },
    { name: 'Bangladesh', value: 10, color: 'bg-info' },
    { name: 'Others', value: 15, color: 'bg-primary-grey' }
  ];

  const contentPerformance = [
    { name: 'Scholarships', views: 12500, conversion: 8.2 },
    { name: 'University Guides', views: 9800, conversion: 6.5 },
    { name: 'Visa Info', views: 8700, conversion: 5.8 },
    { name: 'Test Prep', views: 6500, conversion: 4.3 },
    { name: 'Application Tips', views: 5200, conversion: 3.7 }
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary-dark font-serif">Platform Analytics</h1>
        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-primary-light">
          Key metrics and performance indicators
        </p>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-neutral rounded-lg p-4 shadow-card">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-primary-light">{metric.title}</p>
                <div className="flex items-end mt-1">
                  <p className="text-xl sm:text-2xl font-bold text-primary-dark">{metric.value}</p>
                  <span className={`ml-2 text-sm ${metric.change.startsWith('+') ? 'text-success' : 'text-error'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <div className="text-2xl">
                {metric.icon}
              </div>
            </div>
            <div className="mt-4 h-16">
              <LineChart data={metric.chartData} color={index === 0 ? 'accent' : index === 1 ? 'secondary' : index === 2 ? 'warning' : 'info'} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Overview */}
        <div className="bg-neutral rounded-lg p-4 sm:p-6 shadow-card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-primary-dark">Traffic Overview</h2>
            <select className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-secondary">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64">
            <BarChart 
              labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
              datasets={[
                {
                  label: 'Unique Visitors',
                  data: [4500, 5200, 4800, 6100, 7200, 9300],
                  color: 'secondary'
                },
                {
                  label: 'Page Views',
                  data: [6800, 7500, 8200, 9500, 11000, 12500],
                  color: 'accent'
                }
              ]}
            />
          </div>
        </div>

        {/* Traffic by Country */}
        <div className="bg-neutral rounded-lg p-4 sm:p-6 shadow-card">
          <h2 className="text-lg sm:text-xl font-bold text-primary-dark mb-4">Traffic by Country</h2>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 h-48 sm:h-64">
              <PieChart 
                data={topCountries.map(c => c.value)}
                colors={topCountries.map(c => c.color.replace('bg-', ''))}
                labels={topCountries.map(c => c.name)}
              />
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0 sm:pl-4">
              <ul className="space-y-3">
                {topCountries.map((country, index) => (
                  <li key={index} className="flex items-center">
                    <span className={`w-3 h-3 rounded-full ${country.color} mr-2`}></span>
                    <span className="text-sm text-primary-dark flex-1">{country.name}</span>
                    <span className="text-sm font-medium">{country.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Content Performance */}
      <div className="bg-neutral rounded-lg p-4 sm:p-6 shadow-card">
        <h2 className="text-lg sm:text-xl font-bold text-primary-dark mb-4">Content Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content Type</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contentPerformance.map((content, index) => (
                <tr key={index}>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {content.name === 'Scholarships' && <FiDollarSign className="text-secondary mr-2" />}
                      {content.name === 'University Guides' && <FiBook className="text-accent mr-2" />}
                      {content.name === 'Visa Info' && <FiGlobe className="text-info mr-2" />}
                      <div className="text-sm font-medium text-primary-dark">{content.name}</div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {content.views.toLocaleString()}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {content.conversion}%
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-success">
                      <FiTrendingUp className="mr-1" />
                      <span className="text-xs">+{(content.conversion * 0.3).toFixed(1)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Engagement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-neutral rounded-lg p-4 sm:p-6 shadow-card">
          <h2 className="text-lg sm:text-xl font-bold text-primary-dark mb-4">User Engagement</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-primary-light">Pages per Session</span>
                <span className="font-medium text-primary-dark">3.2</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-primary-light">Bounce Rate</span>
                <span className="font-medium text-primary-dark">42%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-warning h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-primary-light">Returning Visitors</span>
                <span className="font-medium text-primary-dark">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-info h-2 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral rounded-lg p-4 sm:p-6 shadow-card">
          <h2 className="text-lg sm:text-xl font-bold text-primary-dark mb-4">Top Performing Pages</h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span className="text-sm text-primary-dark">Scholarship Database</span>
              <span className="text-xs bg-secondary-light text-secondary-dark px-2 py-1 rounded-full">12.5k visits</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm text-primary-dark">Top Universities</span>
              <span className="text-xs bg-accent-light text-accent-dark px-2 py-1 rounded-full">9.8k visits</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm text-primary-dark">Visa Requirements</span>
              <span className="text-xs bg-warning-light text-secondary-dark px-2 py-1 rounded-full">8.7k visits</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm text-primary-dark">Application Guide</span>
              <span className="text-xs bg-info-light text-info px-2 py-1 rounded-full">6.5k visits</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;