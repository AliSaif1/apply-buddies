import React, { useState, useEffect } from 'react';
import AdminTable from '../../components/admin/admins/AdminTable';
import AdminForm from '../../components/admin/admins/AdminForm';
import ConfirmationModal from '../../components/admin/ConfirmationModal';
import { fetchAdmins, createAdmin, updateAdmin, deleteAdmin } from '../../services/adminService';
import { toast } from 'react-toastify';

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = async () => {
    try {
      setLoading(true);
      const data = await fetchAdmins();
      setAdmins(data);
    } catch (error) {
      toast.error('Failed to load admins');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setCurrentAdmin(null);
    setIsFormOpen(true);
  };

  const handleEdit = (admin) => {
    setCurrentAdmin(admin);
    setIsFormOpen(true);
  };

  const handleDelete = (admin) => {
    setCurrentAdmin(admin);
    setIsDeleteModalOpen(true);
  };

  const handleSubmit = async (adminData) => {
    try {
      if (currentAdmin) {
        await updateAdmin(currentAdmin.id, adminData);
        toast.success('Admin updated successfully');
      } else {
        await createAdmin(adminData);
        toast.success('Admin created successfully');
      }
      setIsFormOpen(false);
      loadAdmins();
    } catch (error) {
      toast.error(error.message || 'Operation failed');
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteAdmin(currentAdmin.id);
      toast.success('Admin deleted successfully');
      setIsDeleteModalOpen(false);
      loadAdmins();
    } catch (error) {
      toast.error('Failed to delete admin');
    }
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Manage Admins</h1>
        <button
          onClick={handleCreate}
          className="bg-secondary hover:bg-secondary-dark text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors text-sm sm:text-base w-full sm:w-auto"
        >
          Add New Admin
        </button>
      </div>

      <AdminTable 
        admins={admins} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        loading={loading}
      />

      <AdminForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
        admin={currentAdmin}
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message={`Are you sure you want to delete ${currentAdmin?.name || 'this admin'}?`}
      />
    </div>
  );
};

export default ManageAdmins;