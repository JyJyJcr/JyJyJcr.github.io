import type { LocaleCode } from "../../i18n";

interface NavigationLocalization {
  code: LocaleCode;
  menu: string;
  explanation: string;
  nav: {
    about: string;
    papers: string;
    projects: string;
    contact: string;
  };
}

export type { NavigationLocalization };
