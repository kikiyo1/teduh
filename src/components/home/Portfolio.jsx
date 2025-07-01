import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const portfolioItems = [
  { title: "Momen Pernikahan", category: "Wedding", image: "Beautiful wedding ceremony photo" },
  { title: "Foto Keluarga Harmonis", category: "Family", image: "A happy family portrait in a park" },
  { title: "Pre-Wedding Romantis", category: "Pre-Wedding", image: "A romantic pre-wedding couple shot at sunset" },
  { title: "Produk Profesional", category: "Product", image: "Professional product shot with clean background" },
  { title: "Acara Korporat", category: "Corporate", image: "Photography of a corporate event with attendees" },
  { title: "Wisuda & Kelulusan", category: "Graduation", image: "A graduate posing with a diploma" }
];

const Portfolio = () => {
  const { toast } = useToast();

  const handleActionClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Portfolio Kami</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Lihat hasil karya terbaik kami dalam berbagai project fotografi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl hover-scale cursor-pointer"
              onClick={handleActionClick}
            >
              <img  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" alt={item.title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-sm text-purple-400 font-medium">{item.category}</span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={handleActionClick} variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors">
            Lihat Semua Portfolio
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;