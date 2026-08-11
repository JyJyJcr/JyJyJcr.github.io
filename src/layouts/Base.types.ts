import type { FooterLocalization } from "../components/ui/Footer.types";
import type { HeaderLocalization } from "../components/ui/Header.types";
import type { LocaleCode } from "../i18n";
import type { LocaleEntryLocalization } from "../components/ui/LocaleSelecter.types";

interface BaseLocalization {
  code: LocaleCode;
  wrapTitle: (title: string) => string;
  skipToContent: string;
  header: HeaderLocalization;
  footer: FooterLocalization;
  entry: LocaleEntryLocalization;
}

export type { BaseLocalization };
