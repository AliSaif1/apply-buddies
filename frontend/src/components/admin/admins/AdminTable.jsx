import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const AdminTable = ({ admins, onEdit, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (admins.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 text-center text-gray-500">
        No admins found. Create one to get started.
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
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                      {admin.name.charAt(0)}
                    </div>
                    <div className="ml-2 sm:ml-4">
                      <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.email}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    admin.role === 'superadmin' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {admin.role}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    admin.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {admin.status}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => onEdit(admin)}
                    className="text-blue-600 hover:text-blue-900 mr-3 sm:mr-4"
                    aria-label="Edit"
                  >
                    <FiEdit2 className="inline" />
                  </button>
                  <button
                    onClick={() => onDelete(admin)}
                    className="text-red-600 hover:text-red-900"
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
          {admins.map((admin) => (
            <div key={admin.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">
                    {admin.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{admin.name}</h3>
                    <p className="text-xs text-gray-500">{admin.email}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(admin)}
                    className="text-blue-600 hover:text-blue-900"
                    aria-label="Edit"
                  >
                    <FiEdit2 size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(admin)}
                    className="text-red-600 hover:text-red-900"
                    aria-label="Delete"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className={`px-2 text-xs leading-5 font-semibold rounded-full ${
                  admin.role === 'superadmin' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {admin.role}
                </span>
                <span className={`px-2 text-xs leading-5 font-semibold rounded-full ${
                  admin.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {admin.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTable;