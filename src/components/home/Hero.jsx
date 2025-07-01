import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleActionClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
      <div className="absolute inset-0">
        <img  className="w-full h-full object-cover opacity-30" alt="Professional video production setup with cameras and lighting equipment" src="https://images.unsplash.com/photo-1627071627054-c2a25827bfd1" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
            Selamat Datang di 
            <span className="block gradient-text">Teduh Fotografi</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Mengabadikan momen berharga Anda dengan sentuhan profesional dan artistik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleActionClick} size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Lihat Karya
            </Button>
            <Button onClick={handleActionClick} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black transition-colors text-lg px-8 py-4">
              Hubungi Kami
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-20 left-10 floating-animation">
        <div className="w-20 h-20 bg-gradient-secondary rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-20 right-10 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-gradient-tertiary rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;