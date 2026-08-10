import type { NavigationTranslation } from "./Navigation.types";
import type { LocaleSelecterTranslation } from "./LocaleSelecter.types";

interface HeaderTranslation {
  navigation: NavigationTranslation;
  localeSelector: LocaleSelecterTranslation;
}

// interface HeaderRouter {
//   routePrefixer: (path: string) => string;
// }

// type HeaderProps = HeaderTranslation & HeaderRouter;

export type { HeaderTranslation };
