import type { Language } from "../i18n/types";

interface Ui {
  profile: {
    name: string;
  };
}

const languageName: Record<Language, string> = {
    en: "English",
    ja: "日本語",
  },
  ui: Record<Language, Ui> = {
    en: {
      profile: {
        name: "Jy",
      },
    },
    ja: {
      profile: {
        name: "Jy",
      },
    },
  };

export { languageName, ui };
