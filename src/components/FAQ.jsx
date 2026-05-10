import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Apakah bisa bayar bulanan?',
      a: 'Tentu bisa. Kami menyediakan opsi pembayaran bulanan, per 6 bulan, hingga tahunan (dengan harga spesial).'
    },
    {
      q: 'Apakah ada jam malam?',
      a: 'Tidak ada jam malam kaku. Setiap penghuni memegang kunci gerbang sendiri, jadi aman dan fleksibel untuk yang sering nugas atau kerja kelompok sampai malam. Namun, tamu dibatasi hingga pukul 22.00 WIB demi kenyamanan bersama.'
    },
    {
      q: 'Apakah koneksi internetnya berebut atau lemot?',
      a: 'Tidak. Kami menggunakan sistem manajemen bandwidth khusus sehingga setiap penghuni mendapatkan alokasi kecepatan yang stabil dan adil. Nugas, streaming, atau gaming dijamin lancar.'
    },
    {
      q: 'Apakah bisa survei dan booking kamar dulu?',
      a: 'Sangat bisa! Silakan hubungi kami via WhatsApp untuk janjian survei. Untuk booking kamar agar tidak keduluan orang lain, bisa dilakukan dengan DP minimal 30%.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-4"
          >
            Pertanyaan yang Sering Diajukan
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-secondary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-primary">{faq.q}</span>
                <ChevronDown 
                  className={`text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;