import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080312]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="text-xl font-bold font-mono text-white tracking-wider hover:opacity-90 transition-opacity flex items-center gap-1"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-purple-500 inline-block"></span>
          LTK<span className="text-purple-400">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group font-sans tracking-wide"
            >
              {item.name}
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full -translate-x-1/2 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white border border-white/15 rounded-full hover:border-purple-400/50 hover:bg-white/5 transition-all"
          >
            CV / Resume
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2 text-xs font-semibold text-white bg-purple-600/80 hover:bg-purple-500 border border-purple-400/50 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition-all font-sans"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0416]/95 border-b border-white/10 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-base font-medium text-gray-200 hover:text-purple-300 py-1 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="text-center py-2.5 text-sm font-semibold text-gray-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10"
                >
                  View CV / Resume
                </a>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="text-center py-2.5 text-sm font-semibold text-white bg-purple-600 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
