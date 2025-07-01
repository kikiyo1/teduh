import React from 'react';
import { Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Teduh Fotografi</span>
            </div>
            <p className="text-gray-400 text-sm">
              Layanan fotografi profesional untuk semua kebutuhan momen berharga Anda.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Fotografi Pernikahan</li>
              <li>Fotografi Pre-Wedding</li>
              <li>Fotografi Keluarga</li>
              <li>Fotografi Produk</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Tentang Kami</li>
              <li>Portfolio</li>
              <li>Tim</li>
              <li>Karir</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+62 812-3456-7890</li>
              <li>info@teduhfotografi.com</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Teduh Fotografi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;