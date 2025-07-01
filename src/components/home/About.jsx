import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const About = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Layanan Jasa Foto & Video Profesional
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Kami adalah tim profesional yang berpengalaman dalam bidang fotografi dan videografi. 
              Dengan peralatan canggih dan tim kreatif, kami siap membantu mengabadikan momen berharga Anda.
            </p>
            <div className="space-y-4">
              {[
                "Peralatan & Teknologi Profesional",
                "Tim Kreatif Berpengalaman",
                "Solusi Kustom untuk Setiap Kebutuhan",
                "Dukungan Pelanggan 24/7"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <Button 
              onClick={handleContactClick}
              className="mt-8 bg-gradient-primary hover:opacity-90 transition-opacity"
              size="lg"
            >
              Hubungi Kami Sekarang
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img  className="w-full rounded-2xl shadow-2xl" alt="Professional photography and videography team at work with professional equipment" src="https://images.unsplash.com/photo-1586732711591-12c04655338f" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-secondary rounded-2xl opacity-20 floating-animation"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-tertiary rounded-2xl opacity-20 floating-animation" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;