import React, { useState, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from '../data/translations';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      return saved === 'vi' || saved === 'en' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch {
      // ignore storage quota / privacy errors
    }
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
