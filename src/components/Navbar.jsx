import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Kamar', href: '#kamar' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Kontak', href: '#lokasi' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Stagger container: children muncul berurutan
  const menuVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1, // tutup dari bawah ke atas
      },
    },
  };

  // Tiap item: slide dari atas + fade
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: 0.2, ease: [0.55, 0, 1, 0.45] },
    },
  };

  // Backdrop dropdown
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      clipPath: 'inset(0% 0% 100% 0%)', // curtain dari atas
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      clipPath: 'inset(0% 0% 100% 0%)',
      transition: {
        duration: 0.25,
        ease: [0.55, 0, 1, 0.45],
      },
    },
  };

  // Animasi ikon hamburger ↔ X
  const iconVariants = {
    initial: { rotate: 0, scale: 0.8, opacity: 0 },
    animate: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.15 },
    },
  };

  return (
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
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button — dengan animasi ikon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none w-8 h-8 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <X size={28} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Menu size={28} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown — curtain reveal + stagger items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100"
          >
            <motion.div
              className="px-4 pt-2 pb-6 space-y-1"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div className="pt-3" variants={itemVariants}>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300"
                >
                  Hubungi Kami
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;