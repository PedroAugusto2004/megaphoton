import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

const browserLanguage = navigator.language.split('-')[0];
const defaultLanguage = browserLanguage === 'en' || browserLanguage === 'pt' ? browserLanguage : 'pt';

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: defaultLanguage,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
