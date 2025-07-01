import React from 'react';
import { LayoutDashboard, Package, Users, Settings, Camera } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'products', label: 'Kelola Produk', icon: <Package className="w-5 h-5" /> },
    { id: 'users', label: 'Pengguna', icon: <Users className="w-5 h-5" /> },
    { id: 'settings', label: 'Pengaturan', icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 p-6 flex flex-col">
      <div className="flex items-center space-x-2 mb-10">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
          <Camera className="w-6 h-6 text-white" />
        </div>
        <div>
          <span className="text-lg font-bold gradient-text">Teduh</span>
          <p className="text-xs text-gray-400">Admin Panel</p>
        </div>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === item.id 
                ? 'bg-gradient-primary text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;