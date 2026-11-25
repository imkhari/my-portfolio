import React from 'react';
import BrandLogo from './BrandLogo';
import { useLanguage } from '../context/useLanguage';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full relative z-20 border-t border-white/[0.06] py-10 mt-16 font-sans">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4">
        
        <div className="flex justify-center md:justify-start">
          <a href="#home" className="flex items-center">
            <BrandLogo size="sm" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-zinc-400 font-medium">
            <a href="#about" className="hover:text-zinc-100 transition-colors">{t.nav.about}</a>
            <a href="#experience" className="hover:text-zinc-100 transition-colors">{t.nav.experience}</a>
            <a href="#projects" className="hover:text-zinc-100 transition-colors">{t.nav.projects}</a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">{t.nav.skills}</a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">{t.nav.contact}</a>
          </div>
          
          <p className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase text-center">
            {t.footer.tagline}
          </p>
        </div>

        <div className="text-xs text-zinc-500 flex items-center justify-center md:justify-end">
          <span className="whitespace-nowrap">&copy; {new Date().getFullYear()} {t.name}</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
