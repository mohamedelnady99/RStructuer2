import arTranslation from "./langs/ar.json";
import enTranslation from "./langs/en.json";
import type { LanguageType, Translations, TranslationKeys } from "./type";

// جميع الترجمات
const translations: Translations = {
  en: enTranslation as TranslationKeys,
  ar: arTranslation as TranslationKeys,
};


const DEFAULT_LANGUAGE: LanguageType = "en";

const getStoredLanguage = (): LanguageType => {
  const stored = localStorage.getItem("language");
  if (stored === "ar" || stored === "en") {
    return stored;
  }
  return DEFAULT_LANGUAGE;
};


class I18n {
  private currentLanguage: LanguageType = getStoredLanguage();

  constructor() {
    this.setDirection();
  }

  getLanguage(): LanguageType {
    return this.currentLanguage;
  }

  setLanguage(lang: LanguageType): void {
    if (lang === "ar" || lang === "en") {
      this.currentLanguage = lang;
      localStorage.setItem("language", lang);
      this.setDirection();
      window.dispatchEvent(new Event("languageChange"));
    }
  }

  
  private setDirection(): void {
    const direction = this.currentLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = this.currentLanguage;
    document.documentElement.dir = direction;
  }

  t(key: keyof TranslationKeys): string {
    return translations[this.currentLanguage][key] || key;
  }

  getTranslations(): TranslationKeys {
    return translations[this.currentLanguage];
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage === "en" ? "ar" : "en";
    this.setLanguage(newLang);
  }
}

export const i18n = new I18n();

export { LanguageSwitcher } from "./LanguageSwitcher";
export type { LanguageType, TranslationKeys, Translations };
export default i18n;
