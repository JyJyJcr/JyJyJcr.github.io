import type { Locale } from ".";
import type { BaseTranslation } from "../layouts/Base.types";

const baseTranslations: Record<Locale, BaseTranslation> = {
  en: {
    header: {
      navigation: {
        explanation: "navigation",
        nav: {
          about: "About",
          papers: "Papers",
          projects: "Projects",
          contact: "Contact",
        },
      },
      localeSelector: {
        explanation: "locale selector",
      },
    },
    footer: {
      builtWithAstro: "This site was built with Astro.",
    },
  },
  ja: {
    header: {
      navigation: {
        explanation: "ナビゲーション",
        nav: {
          about: "概要",
          papers: "論文",
          projects: "プロジェクト",
          contact: "連絡先",
        },
      },
      localeSelector: {
        explanation: "ロケール選択",
      },
    },
    footer: {
      builtWithAstro: "このサイトはAstroで構築されました。",
    },
  },
};

export { baseTranslations };

// export const languages = {
//     en: "English",
//     ja: "日本語",
//   },
//   ui = {
//     en: {
//       "nav.home": "Home",
//       "nav.about": "About",
//       "nav.twitter": "Twitter",
//     },
//     ja: {
//       "nav.home": "ホーム",
//       "nav.about": "約",
//     },
//   } as const;
