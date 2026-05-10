import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1: Brand & Deskripsi */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Kost <span className="text-blue-500">50</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Kost eksklusif yang mengutamakan kenyamanan, keamanan, dan fasilitas penunjang produktivitas untuk masa depan yang lebih baik.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navigasi</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-blue-500 hover:translate-x-1 inline-block transition-all duration-300">Beranda</a></li>
              <li><a href="#kamar" className="text-gray-400 hover:text-blue-500 hover:translate-x-1 inline-block transition-all duration-300">Pilihan Kamar</a></li>
              <li><a href="#fasilitas" className="text-gray-400 hover:text-blue-500 hover:translate-x-1 inline-block transition-all duration-300">Fasilitas</a></li>
              <li><a href="#galeri" className="text-gray-400 hover:text-blue-500 hover:translate-x-1 inline-block transition-all duration-300">Galeri</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-blue-500 hover:translate-x-1 inline-block transition-all duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Kolom 3 & 4: Kontak Info (Dibuat lebih lebar) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 leading-relaxed">
                  Jl. Dr. Mansyur No. 50, Padang Bulan,<br />
                  Kota Medan, Sumatera Utara 20155
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="text-blue-500 mr-3 flex-shrink-0" size={18} />
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                  0812-3456-7890
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="text-blue-500 mr-3 flex-shrink-0" size={18} />
                <a href="mailto:info@kost50.com" className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                  info@kost50.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kost 50. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;