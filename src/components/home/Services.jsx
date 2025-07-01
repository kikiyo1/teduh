import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Camera, Video, Edit, Star, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const services = [
  { title: "Fotografi Pernikahan", description: "Abadikan setiap momen indah di hari pernikahan Anda dengan hasil yang menakjubkan.", icon: <Camera className="w-8 h-8" />, features: ["Candid & Posed Shots", "Album Eksklusif", "Tim Profesional"] },
  { title: "Video Sinematik", description: "Ceritakan kisah Anda melalui video sinematik yang emosional dan artistik.", icon: <Video className="w-8 h-8" />, features: ["Kualitas 4K", "Drone Shots", "Editing Profesional"] },
  { title: "Foto Produk", description: "Tingkatkan penjualan dengan foto produk berkualitas tinggi yang menarik perhatian.", icon: <Star className="w-8 h-8" />, features: ["Studio & Outdoor", "Konsep Kreatif", "Retouching Detail"] },
  { title: "Sesi Foto Keluarga", description: "Ciptakan kenangan tak terlupakan bersama keluarga tercinta.", icon: <Edit className="w-8 h-8" />, features: ["Sesi Santai & Fun", "Berbagai Pilihan Tema", "Cetak Berkualitas"] }
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const { toast } = useToast();

  const handleServiceClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Layanan Kami</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Kami menyediakan layanan fotografi dan videografi profesional dengan teknologi terdepan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`glass-effect rounded-2xl p-6 hover-scale cursor-pointer transition-all duration-300 ${activeService === index ? 'neon-glow' : ''}`}
              onClick={() => setActiveService(index)}
            >
              <div className="text-purple-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-center">
                    <Star className="w-3 h-3 mr-2 text-yellow-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          key={activeService}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-16 glass-effect rounded-3xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold mb-4 gradient-text">
            {services[activeService].title} Profesional
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Dengan pengalaman bertahun-tahun, kami menyediakan layanan {services[activeService].title.toLowerCase()} yang profesional dengan tim yang berpengalaman.
          </p>
          <Button onClick={handleServiceClick} className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Pelajari Lebih Lanjut
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;