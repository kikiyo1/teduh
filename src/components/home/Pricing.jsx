import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const pricingPlans = [
  {
    name: 'Portrait',
    price: '750K',
    description: 'Sempurna untuk foto profil profesional atau personal.',
    features: ['1 Jam Sesi Foto', '10 Foto Edit High-Res', '1 Lokasi Outdoor', 'Konsultasi Konsep'],
  },
  {
    name: 'Group/Family',
    price: '1.5M',
    description: 'Abadikan momen kebersamaan dengan orang terkasih.',
    features: ['2 Jam Sesi Foto', '20 Foto Edit High-Res', 'Pilihan Studio/Outdoor', 'Cetak 10R + Frame'],
    isPopular: true,
  },
  {
    name: 'Pre-Wedding',
    price: '3M',
    description: 'Ceritakan kisah cinta Anda melalui foto yang menawan.',
    features: ['4 Jam Sesi Foto', '30 Foto Edit High-Res', '2 Lokasi Pilihan', 'Video Teaser 1 Menit'],
  },
  {
    name: 'Wedding Day',
    price: '7.5M',
    description: 'Dokumentasi lengkap untuk hari paling spesial Anda.',
    features: ['8 Jam Liputan', '2 Fotografer', '150+ Foto Edit', 'Album Eksklusif'],
  },
];

const Pricing = () => {
  const { toast } = useToast();

  const handleOrderClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Paket Harga Fotografi</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pilih paket yang paling sesuai untuk mengabadikan momen berharga Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`glass-effect rounded-2xl p-6 flex flex-col hover-scale ${plan.isPopular ? 'neon-glow border-purple-500' : 'border-gray-700'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Paling Populer</span>
                </div>
              )}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                <p className="text-center text-gray-400 mb-6">{plan.description}</p>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold gradient-text">Rp{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button 
                onClick={handleOrderClick}
                className={`${plan.isPopular ? 'bg-gradient-primary' : 'bg-gray-700'} w-full hover:opacity-90 transition-opacity`}
              >
                Pesan Sekarang
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;