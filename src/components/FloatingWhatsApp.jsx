import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      {/* Tooltip kecil */}
      <span className="absolute right-16 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm pointer-events-none whitespace-nowrap">
        Tanya Kamar
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;