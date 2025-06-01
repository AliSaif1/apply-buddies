// src/pages/admin/Dashboard.jsx
import { FaUsers, FaUniversity, FaVideo, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';

const Dashboard = () => {
  const metrics = [
    { title: 'Total Users', value: '1,248', icon: <FaUsers className="text-accent" />, change: '+12%' },
    { title: 'Universities', value: '87', icon: <FaUniversity className="text-secondary" />, change: '+5' },
    { title: 'Videos', value: '342', icon: <FaVideo className="text-warning" />, change: '+23' },
    { title: 'Scholarships', value: '156', icon: <FaGraduationCap className="text-success" />, change: '+8' },
    { title: 'Countries', value: '24', icon: <FaGlobeAmericas className="text-info" />, change: '+2' },
    { title: 'Admins', value: '5', icon: <RiAdminFill className="text-error" />, change: '' },
  ];

  const recentActivities = [
    { id: 1, action: 'New university added', target: 'Harvard University', time: '2 hours ago' },
    { id: 2, action: 'Video uploaded', target: 'Campus Tour - MIT', time: '5 hours ago' },
    { id: 3, action: 'Scholarship updated', target: 'Fulbright Program', time: '1 day ago' },
    { id: 4, action: 'New country added', target: 'Germany', time: '2 days ago' },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary-dark font-serif">Admin Dashboard</h1>
        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-primary-light">Overview and quick actions</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-neutral rounded-lg p-3 sm:p-4 shadow-card hover:shadow-card-hover transition-shadow">
            <div className="flex justify-between items-start">
              <div className="text-xs sm:text-sm text-primary-light font-medium">{metric.title}</div>
              <div className="text-xl sm:text-2xl">{metric.icon}</div>
            </div>
            <div className="mt-1 sm:mt-2 flex items-end justify-between">
              <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primary-dark">{metric.value}</div>
              {metric.change && (
                <span className={`text-xs sm:text-sm ${metric.change.startsWith('+') ? 'text-success' : 'text-error'}`}>
                  {metric.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Activity */}
        <div className="bg-neutral rounded-lg p-4 sm:p-6 shadow-card">
          <h2 className="text-lg sm:text-xl font-bold text-primary-dark mb-3 sm:mb-4">Recent Activity</h2>
          <div className="space-y-3 sm:space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="border-b border-primary-grey pb-2 sm:pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <p className="text-sm sm:text-base text-primary-dark">
                    <span className="font-medium">{activity.action}</span>: {activity.target}
                  </p>
                  <span className="text-xs sm:text-sm text-primary-light whitespace-nowrap ml-2">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Analytics */}
        <div className="bg-neutral rounded-lg p-4 sm:p-6 shadow-card">
          <h2 className="text-lg sm:text-xl font-bold text-primary-dark mb-3 sm:mb-4">Platform Analytics</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-primary-grey p-3 sm:p-4 rounded-lg">
              <h3 className="text-white text-xs sm:text-sm">Total Visits</h3>
              <p className="text-lg sm:text-xl xl:text-2xl font-bold text-secondary">8,742</p>
              <p className="text-success text-xs sm:text-sm mt-1">↑ 24% from last month</p>
            </div>
            <div className="bg-primary-grey p-3 sm:p-4 rounded-lg">
              <h3 className="text-white text-xs sm:text-sm">Video Views</h3>
              <p className="text-lg sm:text-xl xl:text-2xl font-bold text-accent">12,589</p>
              <p className="text-success text-xs sm:text-sm mt-1">↑ 42% from last month</p>
            </div>
            <div className="bg-primary-grey p-3 sm:p-4 rounded-lg">
              <h3 className="text-white text-xs sm:text-sm">Avg. Session</h3>
              <p className="text-lg sm:text-xl xl:text-2xl font-bold text-warning">4m 23s</p>
              <p className="text-success text-xs sm:text-sm mt-1">↑ 8% from last month</p>
            </div>
            <div className="bg-primary-grey p-3 sm:p-4 rounded-lg">
              <h3 className="text-white text-xs sm:text-sm">Top Country</h3>
              <p className="text-lg sm:text-xl xl:text-2xl font-bold text-info">India</p>
              <p className="text-success text-xs sm:text-sm mt-1">32% of traffic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;