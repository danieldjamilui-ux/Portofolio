
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, Rocket, ChevronRight } from 'lucide-react';
import { LanyardCard } from './LanyardCard';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Lanyard Component with new entry animation */}
        <LanyardCard />

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white mb-6"
          >
            Welcome <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
              to My Creative Portfolio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Hi, Saya Daniel Kristiadi Paulus, mahasiswa Universitas Khairun Ternate, Maluku Utara.
            Saya memiliki pengalaman dalam pembuatan web, aplikasi, dan desain UI/UX, dengan fokus sebagai Full Stack Developer atau menggabungkan frontend dan backend untuk membangun produk digital yang optimal.
            Di luar dunia coding, saya adalah penggemar bakso 🍜.
          </motion.p>
          {/* Brand/Tech Stack Marquee-style Preview */}
        </div>
      </div>
    </section>
  );
};
