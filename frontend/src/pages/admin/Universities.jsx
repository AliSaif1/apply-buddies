// src/pages/admin/Universities.jsx
import React, { useState, useEffect } from 'react';
import UniversitiesTable from '../../components/admin/universities/UniversitiesTable';
import UniversityForm from '../../components/admin/universities/UniversityForm';
import ConfirmationModal from '../../components/admin/ConfirmationModal';
import { fetchUniversities, createUniversity, updateUniversity, deleteUniversity } from '../../services/universityService';
import { toast } from 'react-toastify';

const Universities = () => {
  const [universities, setUniversities] = useState([]);
  const [currentUniversity, setCurrentUniversity] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUniversities();
  }, []);

  const loadUniversities = async () => {
    try {
      setLoading(true);
      const data = await fetchUniversities();
      setUniversities(data);
    } catch (error) {
      toast.error('Failed to load universities');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setCurrentUniversity(null);
    setIsFormOpen(true);
  };

  const handleEdit = (university) => {
    setCurrentUniversity(university);
    setIsFormOpen(true);
  };

  const handleDelete = (university) => {
    setCurrentUniversity(university);
    setIsDeleteModalOpen(true);
  };

  const handleSubmit = async (universityData) => {
    try {
      if (currentUniversity) {
        await updateUniversity(currentUniversity.id, universityData);
        toast.success('University updated successfully');
      } else {
        await createUniversity(universityData);
        toast.success('University created successfully');
      }
      setIsFormOpen(false);
      loadUniversities();
    } catch (error) {
      toast.error(error.message || 'Operation failed');
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteUniversity(currentUniversity.id);
      toast.success('University deleted successfully');
      setIsDeleteModalOpen(false);
      loadUniversities();
    } catch (error) {
      toast.error('Failed to delete university');
    }
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Manage Universities</h1>
        <button
          onClick={handleCreate}
          className="bg-secondary hover:bg-secondary-dark text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors text-sm sm:text-base w-full sm:w-auto"
        >
          Add New University
        </button>
      </div>

      <UniversitiesTable 
        universities={universities} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        loading={loading}
      />

      <UniversityForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
        university={currentUniversity}
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message={`Are you sure you want to delete ${currentUniversity?.name || 'this university'}?`}
      />
    </div>
  );
};

export default Universities;