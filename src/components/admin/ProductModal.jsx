import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProductForm from './ProductForm';

const ProductModal = ({ isOpen, setIsOpen, form, setForm, handleSubmit, editingProduct }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="gradient-text">
            {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
          </DialogTitle>
        </DialogHeader>
        <ProductForm 
          form={form} 
          setForm={setForm} 
          handleSubmit={handleSubmit} 
          closeModal={() => setIsOpen(false)}
          editingProduct={editingProduct}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;