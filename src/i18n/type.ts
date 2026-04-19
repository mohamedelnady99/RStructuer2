export type LanguageType = "en" | "ar";

export interface TranslationKeys {
  hello: string;
  world: string;
}

export type Translations = Record<LanguageType, TranslationKeys>;
