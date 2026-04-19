import { i18n, LanguageSwitcher } from "../i18n";

export default function Tesx() {
  return (
    <div className="text-red-500 p-4">
      <div>
        {/* استخدام الترجمة */}
        <p>
          {i18n.t("hello")} {i18n.t("world")}
        </p>

        {/* عرض اللغة الحالية */}
        <p className="text-blue-500 mt-2">
          لغة حالية: {i18n.getLanguage() === "en" ? "English" : "العربية"}
        </p>

        {/* استخدام مكون تبديل اللغة */}
        <LanguageSwitcher
          className="mt-4"
          buttonClassName="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        />
      </div>
    </div>
  );
}
