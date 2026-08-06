/* !
import { ui, defaultLang } from "./ui.ts";

function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

function useTranslations(lang: keyof typeof ui) {
  const localizedUI: Record<string, string> = ui[lang];
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return key in localizedUI ? localizedUI[key] : ui[defaultLang][key];
  };
}
export { getLangFromUrl, useTranslations };
*/
