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

  // Easing kustom — terasa natural, tidak bouncy
  const ease = [0.25, 0.46, 0.45, 0.94];
  const easeOut = [0.16, 1, 0.3, 1];

  // Container stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Card: fade up + slight scale
  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  // Bintang: stagger kecil per bintang
  const starContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0.4, rotate: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.35, ease: easeOut },
    },
  };

  // Quote icon: fade + scale dari pojok
  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeOut, delay: 0.2 },
    },
  };

  // Avatar: slide dari kiri
  const avatarVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease },
    },
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Apa Kata Mereka?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Pengalaman jujur dari para penghuni yang sudah dan sedang menetap di sini.
          </motion.p>
        </div>

        {/* Cards — stagger container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 48px rgba(0,0,0,0.09)',
                transition: { duration: 0.3, ease },
              }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative cursor-default"
            >
              {/* Quote icon */}
              <motion.div
                variants={quoteVariants}
                className="absolute top-6 right-6"
              >
                <Quote className="text-blue-100" size={48} />
              </motion.div>

              {/* Bintang — stagger per bintang */}
              <motion.div
                className="flex gap-1 mb-6"
                variants={starContainerVariants}
              >
                {[...Array(review.rating)].map((_, i) => (
                  <motion.span key={i} variants={starVariants}>
                    <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  </motion.span>
                ))}
              </motion.div>

              {/* Teks review */}
              <p className="text-gray-600 mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>

              {/* Avatar + nama */}
              <motion.div
                className="flex items-center gap-4"
                variants={avatarVariants}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;