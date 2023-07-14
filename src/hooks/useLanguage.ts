import { useEffect } from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import { i18n as i18nConfig } from '../../next-i18next.config';
import { i18n } from 'next-i18next';

const useLanguage = () => {
  const router = useRouter();
  const defaultLocale = i18nConfig.defaultLocale;

  // Change language if userLang is set
  useEffect(() => {
    const selectedLang =
      localStorage.getItem('userLang') || window.navigator.language;

    const normalizedLang = selectedLang.split('-')[0];

    if (i18next.language !== normalizedLang) {
      i18n?.changeLanguage(normalizedLang);
    }

    if (defaultLocale === normalizedLang && router.locale !== normalizedLang)
      router.push(router.asPath, undefined, { locale: normalizedLang });
  }, [router, defaultLocale]);

  return { defaultLocale, selectedLang: i18next.language };
};

export default useLanguage;
