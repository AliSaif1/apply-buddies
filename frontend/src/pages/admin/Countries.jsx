// src/pages/admin/Countries.jsx
import React, { useState, useEffect } from 'react';
import CountriesTable from '../../components/admin/countries/CountriesTable';
import CountryForm from '../../components/admin/countries/CountryForm';
import ConfirmationModal from '../../components/admin/ConfirmationModal';
import { fetchCountries, createCountry, updateCountry, deleteCountry } from '../../services/countryService';
import { toast } from 'react-toastify';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = async () => {
    try {
      setLoading(true);
      const data = await fetchCountries();
      setCountries(data);
    } catch (error) {
      toast.error('Failed to load countries');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setCurrentCountry(null);
    setIsFormOpen(true);
  };

  const handleEdit = (country) => {
    setCurrentCountry(country);
    setIsFormOpen(true);
  };

  const handleDelete = (country) => {
    setCurrentCountry(country);
    setIsDeleteModalOpen(true);
  };

  const handleSubmit = async (countryData) => {
    try {
      if (currentCountry) {
        await updateCountry(currentCountry.id, countryData);
        toast.success('Country updated successfully');
      } else {
        await createCountry(countryData);
        toast.success('Country created successfully');
      }
      setIsFormOpen(false);
      loadCountries();
    } catch (error) {
      toast.error(error.message || 'Operation failed');
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteCountry(currentCountry.id);
      toast.success('Country deleted successfully');
      setIsDeleteModalOpen(false);
      loadCountries();
    } catch (error) {
      toast.error('Failed to delete country');
    }
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-primary">Manage Countries</h1>
        <button
          onClick={handleCreate}
          className="bg-secondary hover:bg-secondary-dark text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors text-sm sm:text-base w-full sm:w-auto"
        >
          Add New Country
        </button>
      </div>

      <CountriesTable 
        countries={countries} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        loading={loading}
      />

      <CountryForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
        country={currentCountry}
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message={`Are you sure you want to delete ${currentCountry?.name || 'this country'}?`}
      />
    </div>
  );
};

export default Countries;