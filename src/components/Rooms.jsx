import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
      image: 'https://images.unsplash.com/photo-1522771731470-ea110953c0d4?q=80&w=2070',
      features: ['Kasur Springbed Queen', 'Lemari & Meja Belajar', 'AC', 'Kamar Mandi Dalam', 'Free WiFi'],
      isPopular: true // Highlight card ini
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

  return (
    <section id="kamar" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Pilihan Kamar
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih tipe kamar yang paling sesuai dengan kebutuhan dan budget kamu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl overflow-hidden ${
                room.isPopular ? 'ring-2 ring-blue-500 shadow-xl lg:-mt-4' : 'border border-gray-100 shadow-sm'
              }`}
            >
              {room.isPopular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  Paling Diminati
                </div>
              )}
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{room.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-extrabold text-blue-600">{room.price}</span>
                  <span className="text-gray-500 ml-1">{room.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(room.name)}%20yang%20harganya%20${encodeURIComponent(room.price)}.%20Apakah%20masih%20tersedia?`}
                  target="_blank"
                  rel="noreferrer"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors duration-300 ${
                    room.isPopular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-primary hover:bg-gray-200'
                  }`}
                >
                  Tanya via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;