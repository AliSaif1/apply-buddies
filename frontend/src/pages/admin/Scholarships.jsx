// src/pages/admin/Scholarships.jsx
import React, { useState, useEffect } from 'react';
import ScholarshipsTable from '../../components/admin/scholarship/ScholarshipsTable';
import ScholarshipForm from '../../components/admin/scholarship/ScholarshipForm';
import ConfirmationModal from '../../components/admin/ConfirmationModal';
import { fetchScholarships, createScholarship, updateScholarship, deleteScholarship } from '../../services/scholarshipService';
import { toast } from 'react-toastify';

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [currentScholarship, setCurrentScholarship] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadScholarships();
  }, []);

  const loadScholarships = async () => {
    try {
      setLoading(true);
      const data = await fetchScholarships();
      setScholarships(data);
    } catch (error) {
      toast.error('Failed to load scholarships');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setCurrentScholarship(null);
    setIsFormOpen(true);
  };

  const handleEdit = (scholarship) => {
    setCurrentScholarship(scholarship);
    setIsFormOpen(true);
  };

  const handleDelete = (scholarship) => {
    setCurrentScholarship(scholarship);
    setIsDeleteModalOpen(true);
  };

  const handleSubmit = async (scholarshipData) => {
    try {
      if (currentScholarship) {
        await updateScholarship(currentScholarship.id, scholarshipData);
        toast.success('Scholarship updated successfully');
      } else {
        await createScholarship(scholarshipData);
        toast.success('Scholarship created successfully');
      }
      setIsFormOpen(false);
      loadScholarships();
    } catch (error) {
      toast.error(error.message || 'Operation failed');
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteScholarship(currentScholarship.id);
      toast.success('Scholarship deleted successfully');
      setIsDeleteModalOpen(false);
      loadScholarships();
    } catch (error) {
      toast.error('Failed to delete scholarship');
    }
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Manage Scholarships</h1>
        <button
          onClick={handleCreate}
          className="bg-secondary hover:bg-secondary-dark text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors text-sm sm:text-base w-full sm:w-auto"
        >
          Add New Scholarship
        </button>
      </div>

      <ScholarshipsTable 
        scholarships={scholarships} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        loading={loading}
      />

      <ScholarshipForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
        scholarship={currentScholarship}
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message={`Are you sure you want to delete "${currentScholarship?.title || 'this scholarship'}"?`}
      />
    </div>
  );
};

export default Scholarships;