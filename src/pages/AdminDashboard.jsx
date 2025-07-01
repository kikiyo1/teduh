
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useProducts } from '@/hooks/useProducts';
import Sidebar from '@/components/admin/Sidebar';
import DashboardView from '@/components/admin/DashboardView';
import ProductsView from '@/components/admin/ProductsView';
import UsersView from '@/components/admin/UsersView';
import SettingsView from '@/components/admin/SettingsView';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView products={products} />;
      case 'products':
        return <ProductsView products={products} addProduct={addProduct} updateProduct={updateProduct} deleteProduct={deleteProduct} />;
      case 'users':
        return <UsersView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView products={products} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Teduh Fotografi</title>
        <meta name="description" content="Panel admin untuk mengelola produk dan layanan Teduh Fotografi" />
      </Helmet>
      <div className="min-h-screen bg-black text-white flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto p-8">
          {renderContent()}
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
