// Custom hook for language management
import { useEffect, useState } from 'react';
import { type Locale, type Translation, en, es } from '../i18n';

const translations: Record<Locale, Translation> = {
  es,
  en
};

export const useLanguage = () => {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('locale') as Locale;
    return saved || 'es';
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const t = translations[locale];

  const toggleLanguage = () => {
    setLocale(prev => prev === 'es' ? 'en' : 'es');
  };

  return { locale, t, setLocale, toggleLanguage };
};
