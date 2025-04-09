import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(HttpApi) // Load translations from JSON files
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Bind with React
  .init({
    supportedLngs: ["en", "uz", "ar"], // Add your languages
    fallbackLng: "en", // Default language
    debug: true,
    detection: {
      order: ["localStorage", "cookie", "navigator"], // Detect from these sources
      caches: ["localStorage", "cookie"], // Cache the language
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Translation files
    },
  });

export default i18n;
