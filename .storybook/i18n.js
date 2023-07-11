import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  locales: ['en', 'ja'],
  defaultLocale: 'ja',
  fallbackLng: 'ja',
  debug: true,
});

export default i18n;
