import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Palette, Sparkles, Cpu, Fingerprint } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback.tsx';

export const LanyardCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex justify-center mb-16 relative">
      <div className="relative group">
        {/* Lanyard String - Animated Physics Swing */}
        {/* Fix: Moved static height and top from style to className to resolve MotionStyle type error */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 -translate-x-1/2 w-[3px] h-[100px] -top-[100px] bg-gradient-to-b from-slate-800 via-slate-600 to-slate-400 rounded-full origin-top"
        >
          {/* Subtle string texture/sheen */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)]" />
        </motion.div>

        {/* Lanyard Clip - Metallic Look */}
        {/* Fix: Moved static top from style to className to resolve MotionStyle type error */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
          className="absolute left-1/2 -translate-x-1/2 w-10 h-8 -top-[15px] bg-gradient-to-b from-slate-400 to-slate-600 rounded-t-xl border border-slate-300 shadow-lg z-20 flex items-center justify-center"
        >
          <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-500 shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Interactive 3D ID Card Container */}
        {/* Fix: Moved static transformStyle and perspective to arbitrary Tailwind classes and used casting for dynamic values if needed */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ y: -300, opacity: 0, rotateZ: -10 }}
          animate={{ y: 0, opacity: 1, rotateZ: 0 }}
          transition={{
            y: { duration: 1.8, ease: [0.34, 1.56, 0.64, 1] }, // Springy drop
            opacity: { duration: 1 },
            rotateZ: { delay: 1, duration: 2.5, ease: "easeOut", repeat: Infinity, repeatType: "reverse" } // Gentle swing
          }}
          style={{
            rotateX,
            rotateY,
          }}
          className="relative w-80 cursor-grab active:cursor-grabbing [transform-style:preserve-3d] [perspective:1200px]"
        >
          {/* Card Body */}
          <div 
            className="relative bg-slate-900/90 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{ transform: "translateZ(50px)" }}
          >
            {/* Holographic Strip overlay */}
            <motion.div 
              className="absolute -inset-[100%] opacity-10 pointer-events-none"
              animate={{
                background: [
                  "linear-gradient(45deg, transparent 0%, blue 20%, purple 40%, pink 60%, transparent 80%)",
                  "linear-gradient(45deg, transparent 20%, pink 40%, blue 60%, purple 80%, transparent 100%)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />

            {/* Scanning Laser Line */}
            <motion.div 
              className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-10"
              animate={{ top: ["-5%", "105%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #475569 1px, transparent 0)`,
              backgroundSize: '16px 16px'
            }} />

            {/* Card Header Section */}
            <div className="relative h-28 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent border-b border-slate-700/50 flex items-start justify-between p-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-blue-400/50" />
            </div>

            {/* Profile Photo Area */}
            <div className="relative -mt-14 flex justify-center px-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="relative w-32 h-32"
              >
                {/* Glowing Outer Ring */}
                <motion.div
                  className="absolute -inset-1.5 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] blur-md opacity-70"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden border-4 border-slate-900 bg-slate-800 shadow-2xl z-10">
                  <ImageWithFallback
                    src="https://res.cloudinary.com/ddmlcj32g/image/upload/v1765599931/rkcyixyikseoavyeedun.jpg"
                    alt="Daniel Paulus, S.Kom"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </div>

            {/* Information Body */}
            <div className="pt-6 pb-8 px-6 text-center space-y-4">
              <div>
                <motion.h2
                  className="text-2xl font-black bg-gradient-to-r from-white via-blue-100 to-slate-300 bg-clip-text text-transparent mb-1"
                >
                  Daniel Paulus, S.Kom
                </motion.h2>
                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <span className="text-xs font-semibold tracking-wider uppercase bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    Informatics Engineering
                  </span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Skills</p>
                  <p className="text-xs text-blue-300 font-semibold flex items-center gap-1 mt-1">
                    <Code className="w-3 h-3" /> Full Stack  
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Design</p>
                  <p className="text-xs text-purple-300 font-semibold flex items-center gap-1 mt-1">
                    <Palette className="w-3 h-3" /> UI/UX 
                  </p>
                </div>
              </div>

              {/* Bottom Interactive Area */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-700/30">
              </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="h-2 w-full flex">
              <div className="flex-1 bg-blue-600" />
              <div className="flex-1 bg-purple-600" />
              <div className="flex-1 bg-pink-600" />
            </div>
          </div>

          {/* Background Card Shadow / Depth Effect */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full scale-75 translate-y-8" />
        </motion.div>
      </div>
    </div>
  );
};