import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationAR from "./locale/ar.json";
import translationEN from "./locale/en.json";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: localStorage.getItem("language") || "en", // اللغة الافتراضية
    interpolation: {
      escapeValue: false, // أمان ضد XSS
    },

    react: {
      useSuspense: true,
    },
  });
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});
export default i18n;
