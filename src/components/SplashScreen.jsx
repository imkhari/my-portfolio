import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 450);
          return 100;
        }
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onFinish]);

  const statusText =
    progress < 30
      ? 'Loading core modules...'
      : progress < 65
      ? 'Connecting to services...'
      : progress < 95
      ? 'Optimizing graphics & shaders...'
      : 'Ready. Welcome!';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.04,
        filter: 'blur(12px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080312] text-white overflow-hidden select-none"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
        {/* Logo / Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Animated Ring */}
          <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-600/30 via-purple-900/40 to-cyan-500/20 border border-purple-500/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_35px_rgba(168,85,247,0.35)]">
            <span className="text-3xl font-extrabold tracking-wider font-mono text-white">
              LTK<span className="text-purple-400 animate-pulse">.</span>
            </span>
          </div>

          {/* Small decorative corner accents */}
          <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-purple-400" />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-purple-400" />
        </motion.div>

        {/* Terminal Line */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="h-6 flex items-center justify-center gap-2 mb-6"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          <p className="text-xs font-mono text-gray-400 tracking-wide">
            {statusText}
          </p>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full bg-white/5 border border-white/10 rounded-full h-2 p-0.5 overflow-hidden mb-3 shadow-inner">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_12px_rgba(168,85,247,0.7)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Counter Info */}
        <div className="w-full flex justify-between items-center text-[10px] font-mono text-gray-500">
          <span>SYSTEM_BOOT</span>
          <span className="text-purple-300 font-bold">{progress}%</span>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={onFinish}
        className="absolute bottom-8 text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors uppercase tracking-widest px-4 py-1.5 rounded-full hover:bg-white/5"
      >
        [Skip Intro]
      </button>
    </motion.div>
  );
}

export default SplashScreen;
