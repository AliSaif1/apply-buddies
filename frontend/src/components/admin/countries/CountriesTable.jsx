// src/components/admin/countries/CountriesTable.jsx
import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const CountriesTable = ({ countries, onEdit, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (countries.length === 0) {
    return (
      <div className="rounded-lg shadow p-4 sm:p-6 text-center text-primary">
        No countries found. Create one to get started.
      </div>
    );
  }

  return (
    <div className="rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        {/* Desktop Table */}
        <table className="min-w-full divide-y divide-primary-grey hidden sm:table">
          <thead className="bg-primary">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Flag</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Name</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Code</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Status</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary-grey">
            {countries.map((country) => (
              <tr key={country.id}>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  {country.flag && (
                    <span className="text-2xl">{country.flag}</span>
                  )}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-primary">{country.name}</div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-primary">
                  {country.code}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    country.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {country.status}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => onEdit(country)}
                    className="text-secondary hover:text-secondary-dark mr-3 sm:mr-4"
                    aria-label="Edit"
                  >
                    <FiEdit2 className="inline" />
                  </button>
                  <button
                    onClick={() => onDelete(country)}
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
          {countries.map((country) => (
            <div key={country.id} className="rounded-lg shadow p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  {country.flag && (
                    <span className="text-2xl mr-3">{country.flag}</span>
                  )}
                  <div>
                    <h3 className="text-sm font-medium text-primary">{country.name}</h3>
                    <p className="text-xs text-primary">{country.code}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(country)}
                    className="text-secondary hover:text-secondary-dark"
                    aria-label="Edit"
                  >
                    <FiEdit2 size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(country)}
                    className="text-accent hover:text-accent-dark"
                    aria-label="Delete"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className={`px-2 text-xs leading-5 font-semibold rounded-full ${
                  country.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {country.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesTable;