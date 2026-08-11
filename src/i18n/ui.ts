import type { Locale } from ".";
import type { BaseLocalization } from "../layouts/Base.types";

const baseLocalizations: Record<Locale, BaseLocalization> = {
  en: {
    code: "en",
    wrapTitle: (title: string) => `${title} | Jy`,
    entry: {
      code: "en",
      nativeName: "English",
    },
    skipToContent: "Skip to content",
    header: {
      navigation: {
        code: "en",
        explanation: "Primary navigation",
        menu: "Menu",
        nav: {
          about: "About",
          papers: "Papers",
          projects: "Projects",
          contact: "Contact",
        },
      },
      localeSelector: {
        code: "en",
        explanation: "Language selector",
      },
    },
    footer: {
      code: "en",
      builtWithAstro: "This site was built with Astro.",
    },
  },
  ja: {
    code: "ja",
    wrapTitle: (title: string) => `${title} | Jy`,
    entry: {
      code: "ja",
      nativeName: "日本語",
    },
    skipToContent: "本文へ移動",
    header: {
      navigation: {
        code: "ja",
        explanation: "メインナビゲーション",
        menu: "メニュー",
        nav: {
          about: "概要",
          papers: "論文",
          projects: "プロジェクト",
          contact: "連絡先",
        },
      },
      localeSelector: {
        code: "ja",
        explanation: "言語選択",
      },
    },
    footer: {
      code: "ja",
      builtWithAstro: "このサイトはAstroで構築されました。",
    },
  },
};

export { baseLocalizations };
