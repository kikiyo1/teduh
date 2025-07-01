import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Camera, Menu, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  const navLinks = [
    { href: "#home", label: "Beranda" },
    { href: "#services", label: "Layanan" },
    { href: "#pricing", label: "Harga" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "Tentang" },
    { href: "#contact", label: "Kontak" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Teduh Fotografi</span>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-purple-400 transition-colors">{link.label}</a>
            ))}
            <Button onClick={handleContactClick} className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Konsultasi Gratis
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="hover:text-purple-400 transition-colors">{link.label}</a>
              ))}
              <Button onClick={handleContactClick} className="bg-gradient-primary hover:opacity-90 transition-opacity w-full">
                Konsultasi Gratis
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;