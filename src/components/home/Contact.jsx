import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Hubungi Kami</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Siap membantu mewujudkan project fotografi impian Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { icon: <Phone className="w-8 h-8" />, title: "Telepon", info: "+62 812-3456-7890", description: "Hubungi kami langsung" },
            { icon: <Mail className="w-8 h-8" />, title: "Email", info: "info@teduhfotografi.com", description: "Kirim email untuk konsultasi" },
            { icon: <MapPin className="w-8 h-8" />, title: "Lokasi", info: "Jakarta, Indonesia", description: "Kunjungi studio kami" }
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center hover-scale cursor-pointer"
              onClick={handleContactClick}
            >
              <div className="text-purple-400 mb-4 flex justify-center">{contact.icon}</div>
              <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
              <p className="text-lg text-white mb-2">{contact.info}</p>
              <p className="text-gray-400 text-sm">{contact.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-3xl p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Konsultasi WhatsApp</h3>
            <p className="text-gray-300 mb-6">Chat langsung dengan tim kami untuk konsultasi gratis</p>
            <Button onClick={handleContactClick} className="bg-green-500 hover:bg-green-600 transition-colors w-full" size="lg">
              Chat WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;