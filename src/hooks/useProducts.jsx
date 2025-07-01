
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const savedProducts = localStorage.getItem('teduh_products');
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      } else {
        const defaultProducts = [
          {
            id: 1,
            title: "Foto Produk Katalog",
            category: "Produk",
            description: "Sesi foto produk profesional untuk katalog dan e-commerce Anda.",
            price: "1500000",
            features: "Studio Lighting, High-Res Images, Background Editing",
            imagePreview: "Professional product photography setup with studio lighting"
          },
          {
            id: 2,
            title: "Foto Pernikahan Eksklusif",
            category: "Wedding",
            description: "Abadikan momen pernikahan Anda dengan paket foto dan video eksklusif.",
            price: "7500000",
            features: "2 Fotografer, Video Cinematic, Album Cetak",
            imagePreview: "Wedding photography capturing a couple's special moment"
          },
          {
            id: 3,
            title: "Foto Keluarga Studio",
            category: "Keluarga",
            description: "Sesi foto keluarga di studio dengan berbagai konsep menarik.",
            price: "2000000",
            features: "1 Jam Sesi, 10 Foto Edit, Cetak + Frame",
            imagePreview: "A happy family posing for a studio photograph"
          }
        ];
        setProducts(defaultProducts);
        localStorage.setItem('teduh_products', JSON.stringify(defaultProducts));
      }
    } catch (error) {
      console.error("Failed to load products from localStorage", error);
      toast({
        title: "Error",
        description: "Gagal memuat data produk.",
        variant: "destructive"
      });
    }
  }, [toast]);

  useEffect(() => {
    try {
      if (products.length > 0) {
        localStorage.setItem('teduh_products', JSON.stringify(products));
      }
    } catch (error) {
      console.error("Failed to save products to localStorage", error);
      toast({
        title: "Error",
        description: "Gagal menyimpan data produk.",
        variant: "destructive"
      });
    }
  }, [products, toast]);

  const addProduct = (productData) => {
    setProducts(prev => [...prev, { ...productData, id: Date.now() }]);
    toast({
      title: "Berhasil!",
      description: "Produk baru berhasil ditambahkan"
    });
  };

  const updateProduct = (productData) => {
    setProducts(prev => prev.map(p => p.id === productData.id ? productData : p));
    toast({
      title: "Berhasil!",
      description: "Produk berhasil diperbarui"
    });
  };

  const deleteProduct = (productId) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
    toast({
      title: "Berhasil!",
      description: "Produk berhasil dihapus"
    });
  };

  const value = { products, addProduct, updateProduct, deleteProduct };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
