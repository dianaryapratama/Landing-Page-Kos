import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="lokasi" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-4"
          >
            Lokasi & Kontak
          </motion.h2>
          <p className="text-gray-600">Sangat strategis, tinggal jalan kaki ke kampus.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Kontak */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-primary mb-6">Hubungi Kami</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-primary">Alamat Lengkap</h4>
                    <p className="text-gray-600 mt-1">Jl. Dr. Mansyur No. 50, Padang Bulan<br/>Kota Medan, Sumatera Utara</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-primary">WhatsApp</h4>
                    <p className="text-gray-600 mt-1">0812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-primary">Email</h4>
                    <p className="text-gray-600 mt-1">info@kost50.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-primary text-white text-center py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  Chat Pemilik Kos
                </a>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-sm border border-gray-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928.32488820658!2d98.644149!3d3.559981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031301292025807%3A0xcda6b0d91d9600d1!2sUniversitas%20Sumatera%20Utara!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kos"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;