import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Code2 className="w-16 h-16 mx-auto mb-8 text-blue-400" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Transform Your Business with Expert IT Solutions
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions to help your business thrive in the digital age
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};