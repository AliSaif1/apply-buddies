// src/components/admin/scholarships/ScholarshipsTable.jsx
import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const ScholarshipsTable = ({ scholarships, onEdit, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (scholarships.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 text-center text-gray-500">
        No scholarships found. Create one to get started.
      </div>
    );
  }

  const getTypeBadgeColor = (type) => {
    switch(type) {
      case 'full': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-blue-100 text-blue-800';
      case 'research': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        {/* Desktop Table */}
        <table className="min-w-full divide-y divide-gray-200 hidden sm:table">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">University</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {scholarships.map((scholarship) => (
              <tr key={scholarship.id}>
                <td className="px-4 sm:px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{scholarship.title}</div>
                  <div className="text-sm text-gray-500 line-clamp-1">{scholarship.description}</div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {scholarship.university}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {scholarship.country}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeBadgeColor(scholarship.type)}`}>
                    {scholarship.type.charAt(0).toUpperCase() + scholarship.type.slice(1)}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(scholarship.deadline).toLocaleDateString()}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => onEdit(scholarship)}
                    className="text-secondary hover:text-secondary-dark mr-3 sm:mr-4"
                    aria-label="Edit"
                  >
                    <FiEdit2 className="inline" />
                  </button>
                  <button
                    onClick={() => onDelete(scholarship)}
                    className="text-accent hover:text-accent-dark"
                    aria-label="Delete"
                  >
                    <FiTrash2 className="inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-3 p-2">
          {scholarships.map((scholarship) => (
            <div key={scholarship.id} className="bg-white rounded-lg shadow p-4 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{scholarship.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{scholarship.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(scholarship)}
                    className="text-secondary hover:text-secondary-dark"
                    aria-label="Edit"
                  >
                    <FiEdit2 size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(scholarship)}
                    className="text-accent hover:text-accent-dark"
                    aria-label="Delete"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-gray-500">University</p>
                  <p className="text-sm text-gray-700">{scholarship.university}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Country</p>
                  <p className="text-sm text-gray-700">{scholarship.country}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Type</p>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeBadgeColor(scholarship.type)}`}>
                    {scholarship.type.charAt(0).toUpperCase() + scholarship.type.slice(1)}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Deadline</p>
                  <p className="text-sm text-gray-700">{new Date(scholarship.deadline).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipsTable;