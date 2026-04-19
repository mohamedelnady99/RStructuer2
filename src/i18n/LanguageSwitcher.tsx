import { useState, useEffect } from "react";
import { i18n } from "./index";

interface LanguageSwitcherProps {
  className?: string;
  buttonClassName?: string;
}

export function LanguageSwitcher({
  className = "",
  buttonClassName = "",
}: LanguageSwitcherProps) {
  const [, setLanguageChanged] = useState(0);

  // الاستماع لتغيير اللغة
  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguageChanged((prev) => prev + 1);
    };
    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const handleToggleLanguage = () => {
    i18n.toggleLanguage();
  };

  const currentLang = i18n.getLanguage();
  const isEnglish = currentLang === "en";

  return (
    <div className={className}>
      <button
        onClick={handleToggleLanguage}
        className={
          buttonClassName ||
          "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        }
        aria-label="Toggle language"
      >
        {isEnglish ? "عربي" : "English"}
      </button>
    </div>
  );
}

export default LanguageSwitcher;
