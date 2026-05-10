import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen bg-secondary flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070" 
          alt="Kamar Kos" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Kost 50 Nyaman & Strategis Dekat Kampus
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          WiFi Cepat • AC • Aman • Bersih • Bebas Jam Malam
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#kamar" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Lihat Kamar
          </a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300 flex items-center justify-center gap-2">
            WhatsApp Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;