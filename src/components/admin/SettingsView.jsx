import React from 'react';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SettingsView = () => {
  const { toast } = useToast();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold gradient-text mb-2">Pengaturan</h2>
        <p className="text-gray-400">Konfigurasi sistem dan preferensi</p>
      </div>
      <div className="glass-effect rounded-xl p-6">
        <div className="text-center py-12">
          <Settings className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400 mb-2">Pengaturan Sistem</h3>
          <p className="text-gray-500 mb-4">Panel pengaturan akan segera tersedia</p>
          <Button 
            onClick={() => toast({
              title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
            })}
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;