import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
      alt: 'Kamar Tidur Utama',
      className: 'md:col-span-2 md:row-span-2' // Gambar besar utama
    },
    {
      src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070',
      alt: 'Dapur Umum Bersih',
      className: 'col-span-1'
    },
    {
      src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069',
      alt: 'Kamar Mandi',
      className: 'col-span-1'
    },
    {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      alt: 'Area Santai & Belajar',
      className: 'col-span-1'
    },
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      alt: 'Parkiran Luas & Aman',
      className: 'col-span-1'
    }
  ];

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Intip Suasana Kost
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fasilitas lengkap dan lingkungan yang bersih untuk mendukung produktivitasmu.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay teks saat di-hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;