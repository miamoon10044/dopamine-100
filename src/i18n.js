import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';

// Define the i18n instance with language options
const messages = {
  en,
  ja,
  ko,
};

// Function to detect the browser language
const getBrowserLocale = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const shortLang = browserLang.split('-')[0]; // Get language code without region (e.g., 'ja' from 'ja-JP')
  return shortLang;
};

// Set the default locale based on the browser's language if supported
const locale = Object.keys(messages).includes(getBrowserLocale())
  ? getBrowserLocale()
  : 'ja';

const i18n = createI18n({
  locale: locale, // Set the initial language based on the browser's language
  fallbackLocale: 'ja', // Fallback language if the detected language is not available
  messages, // Set locale messages
});

export default i18n;
