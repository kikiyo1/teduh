
import React from 'react';
import { Upload, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ProductForm = ({ form, setForm, handleSubmit, closeModal, editingProduct }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setForm(prev => ({
          ...prev,
          image: file,
          imagePreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title" className="text-white">Nama Produk *</Label>
          <Input id="title" value={form.title} onChange={handleInputChange} className="bg-gray-800 border-gray-600 text-white" placeholder="Masukkan nama produk" required />
        </div>
        <div>
          <Label htmlFor="category" className="text-white">Kategori *</Label>
          <Input id="category" value={form.category} onChange={handleInputChange} className="bg-gray-800 border-gray-600 text-white" placeholder="Contoh: Wedding, Corporate" required />
        </div>
      </div>
      <div>
        <Label htmlFor="description" className="text-white">Deskripsi *</Label>
        <Textarea id="description" value={form.description} onChange={handleInputChange} className="bg-gray-800 border-gray-600 text-white" placeholder="Deskripsi lengkap produk" rows={3} required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="price" className="text-white">Harga (IDR) *</Label>
          <Input id="price" type="number" value={form.price} onChange={handleInputChange} className="bg-gray-800 border-gray-600 text-white" placeholder="2500000" required />
        </div>
        <div>
          <Label htmlFor="features" className="text-white">Fitur</Label>
          <Input id="features" value={form.features} onChange={handleInputChange} className="bg-gray-800 border-gray-600 text-white" placeholder="Fitur 1, Fitur 2, Fitur 3" />
        </div>
      </div>
      <div>
        <Label htmlFor="image" className="text-white">Upload Gambar</Label>
        <div className="mt-2">
          <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          <Button type="button" variant="outline" onClick={() => document.getElementById('image-upload').click()} className="border-gray-600 text-white hover:bg-gray-800">
            <Upload className="w-4 h-4 mr-2" />
            Pilih Gambar
          </Button>
        </div>
        {form.imagePreview && (
          <div className="mt-4">
            <img src={form.imagePreview} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
          </div>
        )}
      </div>
      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={closeModal} className="border-gray-600 text-white hover:bg-gray-800">
          <X className="w-4 h-4 mr-2" />
          Batal
        </Button>
        <Button type="submit" className="bg-gradient-primary hover:opacity-90 transition-opacity">
          <Save className="w-4 h-4 mr-2" />
          {editingProduct ? 'Update' : 'Simpan'}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
