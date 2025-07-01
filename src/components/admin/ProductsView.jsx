
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import ProductModal from './ProductModal';
import { formatPrice } from '@/lib/utils';

const ProductsView = ({ products, addProduct, updateProduct, deleteProduct }) => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    title: '', category: '', description: '', price: '', features: '', image: null, imagePreview: ''
  });
  const { toast } = useToast();

  const resetForm = () => {
    setProductForm({ title: '', category: '', description: '', price: '', features: '', image: null, imagePreview: '' });
    setEditingProduct(null);
  };

  const handleOpenModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setProductForm({ ...product, image: null });
    } else {
      resetForm();
    }
    setIsProductModalOpen(true);
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (!productForm.title || !productForm.category || !productForm.description || !productForm.price) {
      toast({ title: "Error", description: "Mohon lengkapi semua field yang wajib diisi", variant: "destructive" });
      return;
    }
    const productData = { ...productForm, imagePreview: productForm.imagePreview || "Professional photography service placeholder image" };
    
    if (editingProduct) {
      updateProduct(productData);
    } else {
      addProduct(productData);
    }
    resetForm();
    setIsProductModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold gradient-text mb-2">Kelola Produk</h2>
          <p className="text-gray-400">Tambah, edit, atau hapus produk layanan</p>
        </div>
        <Button onClick={() => handleOpenModal()} className="bg-gradient-primary hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Produk
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect rounded-xl overflow-hidden hover-scale"
          >
            <div className="relative h-48">
              {product.imagePreview && product.imagePreview.startsWith('data:image')
                ? <img src={product.imagePreview} alt={product.title} className="w-full h-full object-cover" />
                : <img  className="w-full h-full object-cover" alt={product.title} src="https://images.unsplash.com/photo-1671376354106-d8d21e55dddd" />
              }
              <div className="absolute top-2 right-2 flex space-x-2">
                <Button size="sm" variant="secondary" onClick={() => handleOpenModal(product)} className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="destructive" onClick={() => deleteProduct(product.id)} className="bg-red-500 hover:bg-red-600 text-white">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-purple-400 font-medium">{product.category}</span>
                <span className="text-lg font-bold text-green-400">{formatPrice(product.price)}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
              {product.features && <div className="text-xs text-gray-500"><strong>Fitur:</strong> {product.features}</div>}
            </div>
          </motion.div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400 mb-2">Belum ada produk</h3>
          <p className="text-gray-500 mb-4">Mulai dengan menambahkan produk pertama Anda</p>
          <Button onClick={() => handleOpenModal()} className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Produk Pertama
          </Button>
        </div>
      )}

      <ProductModal
        isOpen={isProductModalOpen}
        setIsOpen={setIsProductModalOpen}
        form={productForm}
        setForm={setProductForm}
        handleSubmit={handleProductSubmit}
        editingProduct={editingProduct}
      />
    </div>
  );
};

export default ProductsView;
