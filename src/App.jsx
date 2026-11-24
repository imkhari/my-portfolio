import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#080312] text-white font-sans relative overflow-hidden">
        {/* Subtle Tech Grid Background */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.06) 1.5px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1.5px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Dynamic Ambient Glow 1 - Purple/Fuchsia */}
        <motion.div
          animate={{
            x: [0, 100, 0], 
            y: [0, -80, 0], 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="fixed top-[10%] left-[8%] w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-0"
        />

        {/* Dynamic Ambient Glow 2 - Cyan/Indigo */}
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 90, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="fixed bottom-[15%] right-[8%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none z-0"
        />

        <div className="relative z-10 w-full h-full">
          <Navbar />
          <main className="w-full">
            <Hero />
            <AboutMe />
            <Experience />
            <Projects />
            <Tech />
            <Testimonials />
            <Contact />
          </main>
          <Footer />

          <ScrollToTop />
        </div>
      </div>
    </>
  );
}

export default App;
