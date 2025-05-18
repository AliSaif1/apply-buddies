// src/components/admin/universities/UniversitiesTable.jsx
import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const UniversitiesTable = ({ universities, onEdit, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (universities.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 text-center text-gray-500">
        No universities found. Create one to get started.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        {/* Desktop Table */}
        <table className="min-w-full divide-y divide-gray-200 hidden sm:table">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ranking</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {universities.map((university) => (
              <tr key={university.id}>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">
                      {university.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{university.name}</div>
                      <div className="text-sm text-gray-500">{university.location}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {university.country}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  #{university.ranking}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    university.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {university.status}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => onEdit(university)}
                    className="text-secondary hover:text-secondary-dark mr-3 sm:mr-4"
                    aria-label="Edit"
                  >
                    <FiEdit2 className="inline" />
                  </button>
                  <button
                    onClick={() => onDelete(university)}
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
          {universities.map((university) => (
            <div key={university.id} className="bg-white rounded-lg shadow p-4 border border-gray-100">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium mr-3">
                    {university.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{university.name}</h3>
                    <p className="text-xs text-gray-500">{university.location}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(university)}
                    className="text-secondary hover:text-secondary-dark"
                    aria-label="Edit"
                  >
                    <FiEdit2 size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(university)}
                    className="text-accent hover:text-accent-dark"
                    aria-label="Delete"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-gray-500">Country</p>
                  <p className="text-sm text-gray-700">{university.country}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Ranking</p>
                  <p className="text-sm text-gray-700">#{university.ranking}</p>
                </div>
                <div className="col-span-2">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    university.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {university.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversitiesTable;