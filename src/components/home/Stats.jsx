import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: "500+", label: "Project Selesai" },
  { number: "150+", label: "Client Puas" },
  { number: "7+", label: "Tahun Pengalaman" },
  { number: "24/7", label: "Dukungan" }
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;