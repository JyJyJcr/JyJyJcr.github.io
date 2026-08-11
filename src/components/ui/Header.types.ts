import type { NavigationLocalization } from "./Navigation.types";
import type { LocaleSelecterLocalization } from "./LocaleSelecter.types";

interface HeaderLocalization {
  navigation: NavigationLocalization;
  localeSelector: LocaleSelecterLocalization;
}

// interface HeaderRouter {
//   routePrefixer: (path: string) => string;
// }

// type HeaderProps = HeaderTranslation & HeaderRouter;

export type { HeaderLocalization };
