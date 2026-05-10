import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Andi Saputra',
      role: 'Mahasiswa',
      text: 'Kosnya bersih banget, bapak kosnya ramah. Yang paling mantap internetnya, Wi-Fi nya stabil parah karena manajemen bandwidthnya bagus, nugas dan main game lancar!',
      rating: 5
    },
    {
      id: 2,
      name: 'Rina Melati',
      role: 'Karyawan Swasta',
      text: 'Keamanannya terjamin karena ada CCTV 24 jam. Parkiran motor juga luas. Cocok banget buat yang cari ketenangan setelah seharian kerja.',
      rating: 5
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Mahasiswa',
      text: 'Airnya selalu lancar dan bersih. Lokasinya juga strategis banget, tinggal jalan kaki ke minimarket dan tempat makan murah.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Apa Kata Mereka?
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pengalaman jujur dari para penghuni yang sudah dan sedang menetap di sini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-blue-100" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;