import { motion } from 'framer-motion';
import { MapPin, Wifi, ShieldCheck, Droplets, Sun } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MapPin size={32} className="text-blue-600" />,
      title: 'Dekat Kampus',
      desc: 'Lokasi strategis, hemat waktu dan biaya transportasi setiap hari.'
    },
    {
      icon: <Wifi size={32} className="text-blue-600" />,
      title: 'WiFi Cepat & Stabil',
      desc: 'Koneksi internet terkelola dengan baik, lancar untuk nugas dan streaming tanpa rebutan bandwidth.'
    },
    {
      icon: <ShieldCheck size={32} className="text-blue-600" />,
      title: 'Keamanan 24 Jam',
      desc: 'Dilengkapi CCTV di area publik dan parkiran untuk kenyamanan penghuni.'
    },
    {
      icon: <Droplets size={32} className="text-blue-600" />,
      title: 'Air Lancar',
      desc: 'Fasilitas air bersih yang selalu mengalir stabil setiap saat.'
    },
    {
      icon: <Sun size={32} className="text-blue-600" />,
      title: 'Bebas Banjir',
      desc: 'Berada di dataran aman, tidak perlu khawatir saat musim hujan.'
    }
  ];

  return (
    <section id="fasilitas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Kenapa Pilih Kost 50?
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami mengutamakan kenyamanan, keamanan, dan fasilitas penunjang produktivitas kamu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }} // Efek stagger (muncul bergantian)
              className="p-6 bg-secondary rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;