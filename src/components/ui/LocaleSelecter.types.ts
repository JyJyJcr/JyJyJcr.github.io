import type { LocaleCode } from "../../i18n";

interface LocaleSelecterLocalization {
  code: LocaleCode;
  explanation: string;
}

interface LocaleEntryLocalization {
  code: LocaleCode;
  nativeName: string;
}

export type { LocaleSelecterLocalization, LocaleEntryLocalization };
