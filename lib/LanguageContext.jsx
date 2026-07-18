'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    const stored = window.localStorage.getItem('lang');
    if (stored === 'en' || stored === 'zh') setLangState(stored);
  }, []);

  function setLang(next) {
    setLangState(next);
    window.localStorage.setItem('lang', next);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
