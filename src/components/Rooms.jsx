import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import fotoPremium from '../assets/kost.webp'; // Pastikan path ini benar di laptopmu

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Standard Room',
      price: 'Rp 800.000',
      period: '/ bulan',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069',
      features: ['Kasur Springbed', 'Lemari Pakaian', 'Kipas Angin', 'Kamar Mandi Luar', 'Free WiFi'],
      isPopular: false
    },
    {
      id: 2,
      name: 'Premium Room',
      price: 'Rp 1.200.000',
      period: '/ bulan',
      image: fotoPremium, 
      features: ['Kasur Springbed Queen', 'Lemari & Meja Belajar', 'AC', 'Kamar Mandi Dalam', 'Free WiFi'],
      isPopular: true
    },
    {
      id: 3,
      name: 'Exclusive Room',
      price: 'Rp 1.500.000',
      period: '/ bulan',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070',
      features: ['Kasur King Size', 'Full Furnished', 'AC & Water Heater', 'Kamar Mandi Dalam', 'Free Laundry 10kg', 'Free WiFi'],
      isPopular: false
    }
  ];

  // 1. Konfigurasi Transisi Premium
  const transitionConfig = { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] };

  // 2. Variants untuk Container (Stagger Effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } // Delay antar card
    }
  };

  // 3. Variants untuk masing-masing Card
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: transitionConfig }
  };

  return (
    <section id="kamar" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section dengan Animasi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transitionConfig}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-primary mb-4 tracking-tight">
            Pilihan Kamar
          </h2>
          {/* Aksen garis biru agar konsisten dengan section Lokasi */}
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pilih tipe kamar yang paling sesuai dengan kebutuhan dan budget kamu.
          </p>
        </motion.div>

        {/* Grid Container menggunakan staggerChildren */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} // Trigger animasi sedikit lebih awal
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              // Efek angkat (lift-up) saat di-hover
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.4, ease: "easeOut" } 
              }}
              className={`relative bg-white rounded-[2rem] overflow-hidden group ${
                room.isPopular 
                  ? 'ring-2 ring-blue-500 shadow-[0_20px_50px_rgba(59,130,246,0.15)] lg:-mt-4' 
                  : 'border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50'
              } transition-shadow duration-500`}
            >
              {/* Badge Paling Diminati */}
              {room.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-10 shadow-md">
                  Paling Diminati
                </div>
              )}
              
              {/* Image Container dengan animasi zoom saat hover */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-0"></div>
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {room.name}
                </h3>
                
                <div className="flex items-baseline mb-8 pb-6 border-b border-gray-100">
                  <span className="text-3xl font-extrabold text-blue-600">{room.price}</span>
                  <span className="text-gray-500 ml-1 font-medium">{room.period}</span>
                </div>

                <ul className="space-y-4 mb-10 min-h-[200px]"> {/* min-h agar tinggi card sejajar */}
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <div className="bg-green-50 p-1 rounded-full mr-3 mt-0.5 group-hover:bg-green-100 transition-colors duration-300">
                        <Check size={16} className="text-green-600 flex-shrink-0" />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(room.name)}%20yang%20harganya%20${encodeURIComponent(room.price)}.%20Apakah%20masih%20tersedia?`}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center w-full py-4 rounded-xl font-bold transform hover:-translate-y-1 transition-all duration-300 ${
                    room.isPopular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30' 
                      : 'bg-gray-50 text-primary hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  Tanya via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;