import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/home/Navigation';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home/Portfolio';
import Stats from '@/components/home/Stats';
import About from '@/components/home/About';
import Pricing from '@/components/home/Pricing';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';


const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Teduh Fotografi - Layanan Fotografi Profesional</title>
        <meta name="description" content="Layanan fotografi profesional untuk pernikahan, pre-wedding, keluarga, dan produk. Abadikan momen berharga Anda bersama Teduh Fotografi." />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <main>
          <Hero />
          <div className="relative -mt-12 z-10 text-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white opacity-60 inline-block"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
          <Services />
          <Pricing />
          <Portfolio />
          <Stats />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;