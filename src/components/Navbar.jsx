import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';
import { useLanguage } from '../context/useLanguage';

function LanguageSwitcher({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const options = [
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'vi', label: 'VI', full: 'Tiếng Việt' },
  ];

  return (
    <div ref={dropdownRef} className="relative select-none">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-indigo-400/50 hover:bg-white/[0.07] text-[11px] font-mono font-semibold text-zinc-200 transition-all"
      >
        <span className="uppercase">{lang}</span>
        <svg
          className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            role="listbox"
            className="absolute right-0 mt-2 w-32 rounded-xl bg-[#11121A]/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.65)] p-1 z-50"
          >
            {options.map((opt) => {
              const active = lang === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLang(opt.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                    active
                      ? 'bg-indigo-500/20 text-indigo-300 font-semibold'
                      : 'text-zinc-300 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  <span>{opt.full}</span>
                  <span className="text-[10px] font-mono opacity-75">{opt.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090F]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.45)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="relative w-full max-w-[1440px] mx-auto flex items-center">
        {/* Inner max-w-6xl aligns the top Logo vertically 1:1 with the Footer Logo */}
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#home"
            className="hover:opacity-90 transition-opacity flex items-center shrink-0"
          >
            <BrandLogo size="sm" />
          </a>

          {/* Mobile / Tablet Controls (< lg) */}
          <div className="flex lg:hidden items-center gap-2.5 shrink-0">
            <LanguageSwitcher lang={lang} setLang={setLang} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
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
        </div>

        {/* Center: Strictly Centered Nav Links */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 xl:gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs xl:text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors relative group font-sans tracking-wide whitespace-nowrap"
            >
              {item.name}
              <span className="absolute left-1/2 -bottom-1 w-0 h-[1.5px] bg-indigo-400 transition-all duration-300 group-hover:w-full -translate-x-1/2 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right: CV / Resume, Let's Talk + Top-Right VI | EN */}
        <div className="hidden lg:flex absolute right-6 xl:right-10 items-center gap-2 xl:gap-3 shrink-0">
          <a
            href="#contact"
            className="px-3 xl:px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white border border-white/10 rounded-full hover:border-indigo-400/50 hover:bg-white/[0.04] transition-all whitespace-nowrap"
          >
            {t.nav.cv}
          </a>
          <a
            href="#contact"
            className="px-3.5 xl:px-5 py-2 text-xs font-semibold text-white bg-indigo-500 hover:bg-indigo-400 border border-indigo-400/40 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] transition-all font-sans whitespace-nowrap"
          >
            {t.nav.letsTalk}
          </a>
          <div className="ml-0.5 xl:ml-1">
            <LanguageSwitcher lang={lang} setLang={setLang} />
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0D0E16]/95 border-b border-white/10 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-base font-medium text-zinc-300 hover:text-indigo-300 py-1 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="text-center py-2.5 text-sm font-medium text-zinc-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10"
                >
                  {t.nav.viewCv}
                </a>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="text-center py-2.5 text-sm font-semibold text-white bg-indigo-500 rounded-xl shadow-[0_0_16px_rgba(99,102,241,0.3)]"
                >
                  {t.nav.letsTalk}
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
