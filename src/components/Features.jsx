import { motion } from 'framer-motion';
import { MapPin, Wifi, ShieldCheck, Droplets, Sun } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MapPin size={32} />,
      title: 'Dekat Kampus',
      desc: 'Lokasi strategis, hemat waktu dan biaya transportasi setiap hari.'
    },
    {
      icon: <Wifi size={32} />,
      title: 'WiFi Cepat & Stabil',
      desc: 'Koneksi internet terkelola dengan baik, lancar untuk nugas dan streaming tanpa rebutan bandwidth.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Keamanan 24 Jam',
      desc: 'Dilengkapi CCTV di area publik dan parkiran untuk kenyamanan penghuni.'
    },
    {
      icon: <Droplets size={32} />,
      title: 'Air Lancar',
      desc: 'Fasilitas air bersih yang selalu mengalir stabil setiap saat.'
    },
    {
      icon: <Sun size={32} />,
      title: 'Bebas Banjir',
      desc: 'Berada di dataran aman, tidak perlu khawatir saat musim hujan.'
    }
  ];

  // Konfigurasi animasi
  const transitionConfig = {
    duration: 0.8,
    ease: [0.215, 0.61, 0.355, 1]
  };

  // Animasi container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Animasi card
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionConfig
    }
  };

  return (
    <section
      id="fasilitas"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background blur */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transitionConfig}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-primary mb-4 tracking-tight">
            Kenapa Pilih Kost 50?
          </h2>

          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami mengutamakan kenyamanan, keamanan, dan fasilitas
            penunjang produktivitas kamu.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -10,
                transition: {
                  duration: 0.3,
                  ease: 'easeOut'
                }
              }}
              className="p-8 bg-secondary rounded-[2rem] border border-gray-100 cursor-pointer shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:bg-white transition-all duration-300 group"
            >
              
              {/* Icon */}
              <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 group-hover:-translate-y-1">
                
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.desc}
              </p>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;