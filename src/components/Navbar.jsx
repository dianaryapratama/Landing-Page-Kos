import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Kamar', href: '#kamar' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Lokasi', href: '#lokasi' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // Efek Glassmorphism: bg-white/80 dan backdrop-blur-md
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="#home" className="text-2xl font-bold text-primary tracking-tight">
              Kost <span className="text-blue-600">50</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890" // Ganti dengan nomor WhatsApp asli
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown dengan Animasi Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;