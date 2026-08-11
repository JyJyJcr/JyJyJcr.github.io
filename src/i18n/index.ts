const localeList = ["en", "ja"] as const;
type Locale = (typeof localeList)[number];
const defaultLocale = "en";
type LocaleCode = string;

interface LocaleInfo {
  nativeName: string;
}

const localeInfos: Record<Locale, LocaleInfo> = {
  en: {
    nativeName: "English",
  },
  ja: {
    nativeName: "日本語",
  },
} as const;

export type { Locale, LocaleInfo, LocaleCode };
export { defaultLocale, localeList, localeInfos };
