import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

function SplashScreen({ onFinish }) {
  const { t } = useLanguage();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 1850);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -24,
        filter: 'blur(8px)',
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent text-zinc-100 overflow-hidden select-none"
    >
      {/* Subtle Radial Focus Light behind Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="absolute w-[380px] h-[380px] rounded-full bg-indigo-500/[0.06] blur-[110px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Animated Connected LTK. Monogram */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 relative"
        >
          <svg
            viewBox="0 0 70 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-36 md:w-44 h-auto drop-shadow-[0_0_25px_rgba(99,102,241,0.22)]"
          >
            <defs>
              <linearGradient id="splash-ltk-grad" x1="36" y1="5" x2="66" y2="27" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>

            {/* Connected L + T */}
            <motion.path
              d="M4 5H9.5V21.5H22V10.5H14.5V5H36V10.5H27.5V27H4V5Z"
              fill="#F4F4F5"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Connected K */}
            <motion.path
              d="M36 5H41.5V13.5L50 5H57.5L46 16.5L56.5 27H49L41.5 19.5V27H36V5Z"
              fill="url(#splash-ltk-grad)"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Accent Dot */}
            <motion.rect
              x="60"
              y="21.5"
              width="5.5"
              height="5.5"
              rx="2.75"
              fill="#38BDF8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.45, type: 'spring', stiffness: 260, damping: 16 }}
            />
          </svg>
        </motion.div>

        {/* Masked Editorial Name Reveal */}
        <div className="overflow-hidden mb-1.5">
          <motion.h2
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base font-semibold tracking-[0.28em] text-zinc-100 uppercase pl-[0.28em]"
          >
            {t.name}
          </motion.h2>
        </div>

        <div className="overflow-hidden mb-7">
          <motion.p
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] font-mono tracking-[0.18em] text-indigo-400/90 uppercase pl-[0.18em]"
          >
            Software Engineer
          </motion.p>
        </div>

        {/* Hairline Minimal Loader */}
        <div className="w-36 h-[1.5px] bg-white/[0.08] rounded-full overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.55, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full origin-left bg-gradient-to-r from-indigo-400 to-sky-400"
          />
        </div>
      </div>

      {/* Discreet Skip Action */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={onFinish}
        className="absolute bottom-8 right-8 text-[11px] font-mono text-zinc-500 hover:text-zinc-200 transition-colors tracking-widest uppercase px-3 py-1.5 rounded-full hover:bg-white/[0.04]"
      >
        Skip &rarr;
      </motion.button>
    </motion.div>
  );
}

export default SplashScreen;
