import React from 'react';
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
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-tech relative overflow-hidden">
      
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1.5px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1.5px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>

      <motion.div
        animate={{
          x: [0, 150, 0], 
          y: [0, -100, 0], 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-[10%] left-[10%] w-[400px] h-[400px] bg-[#7b1fa2]/25 rounded-full blur-[120px] pointer-events-none z-0"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#9c27b0]/20 rounded-full blur-[120px] pointer-events-none z-0"
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
  )
}

export default App;