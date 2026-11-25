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
import InteractiveBackground from './components/InteractiveBackground';
import { LanguageProvider } from './context/LanguageProvider';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#09090F] text-zinc-100 font-sans relative overflow-hidden">
        {/* Global Architectural Grid + Interactive Particle Constellation (Shared seamlessly across Splash & Main) */}
        <InteractiveBackground />

        <AnimatePresence mode="wait">
          {loading ? (
            <SplashScreen key="splash" onFinish={() => setLoading(false)} />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative z-10 w-full h-full"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}

export default App;
