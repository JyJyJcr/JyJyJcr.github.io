import type { Language } from "./i18n/types";

const basePath = import.meta.env.BASE_URL.replace(/\/$/u, ""),
  basePathWithSlash = `${basePath}/`,
  removeBase = (path: string): string => {
    if (!path.startsWith("/")) {
      throw new Error(`Path "${path}" is not an absolute path.`);
    }
    if (!path.startsWith(basePathWithSlash)) {
      throw new Error(
        `Path "${path}" does not start with base path "${basePath}".`,
      );
    }
    return path.slice(basePath.length);
  },
  addBase = (path: string): string => {
    if (!path.startsWith("/")) {
      throw new Error(`Path "${path}" is not an absolute path.`);
    }
    return `${basePath}${path}`;
  },
  splitLang = (path: string): [Language, string] => {
    if (!path.startsWith("/")) {
      throw new Error(`Path "${path}" is not an absolute path.`);
    }

    const [, lang, ...rest] = path.split("/");
    if (!lang) {
      throw new Error(`Path "${path}" does not contain a language segment.`);
    }
    return [lang as Language, `/${rest.join("/")}`];
  },
  addLang = (lang: Language, path: string): string => {
    if (!path.startsWith("/")) {
      throw new Error(`Path "${path}" is not an absolute path.`);
    }
    return `/${lang}${path}`;
  },
  commonRoute = (path: string): string => addBase(path),
  langRoute = (lang: Language, path: string): string =>
    addBase(addLang(lang, path)),
  switchLang = (lang: Language, path: string): string => {
    const [_currentLang, rest] = splitLang(removeBase(path));
    return langRoute(lang, rest);
  };

export {
  removeBase,
  addBase,
  splitLang,
  addLang,
  commonRoute,
  langRoute,
  switchLang,
};
