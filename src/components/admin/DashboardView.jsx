import React from 'react';
import { motion } from 'framer-motion';
import { Package, Users, DollarSign, TrendingUp } from 'lucide-react';

const DashboardView = ({ products }) => {
  const stats = [
    { title: 'Total Produk', value: products.length, icon: <Package className="w-8 h-8" />, color: 'bg-blue-500' },
    { title: 'Total Pengguna', value: '156', icon: <Users className="w-8 h-8" />, color: 'bg-green-500' },
    { title: 'Pendapatan Bulan Ini', value: 'Rp 45.2M', icon: <DollarSign className="w-8 h-8" />, color: 'bg-purple-500' },
    { title: 'Project Aktif', value: '23', icon: <TrendingUp className="w-8 h-8" />, color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold gradient-text mb-2">Dashboard Overview</h2>
        <p className="text-gray-400">Selamat datang di panel admin Teduh Fotografi</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Aktivitas Terbaru</h3>
        <div className="space-y-4">
          {[
            { action: 'Produk baru ditambahkan', item: 'Paket Wedding Eksklusif', time: '2 jam yang lalu' },
            { action: 'Pesanan baru diterima', item: 'Sesi Foto Keluarga', time: '4 jam yang lalu' },
            { action: 'Review baru', item: 'Foto Produk Katalog', time: '6 jam yang lalu' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
              <div>
                <p className="text-white">{activity.action}</p>
                <p className="text-gray-400 text-sm">{activity.item}</p>
              </div>
              <span className="text-gray-400 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;