
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import AdminDashboard from '@/pages/AdminDashboard';
import { ProductProvider } from '@/hooks/useProducts';

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
