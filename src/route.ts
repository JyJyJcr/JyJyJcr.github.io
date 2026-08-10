import type { Locale } from "./i18n";

const basePath = import.meta.env.BASE_URL.replace(/\/$/u, "");
const basePathWithSlash = `${basePath}/`;
const removeBase = (path: string): string => {
  if (!path.startsWith("/")) {
    throw new Error(`Path "${path}" is not an absolute path.`);
  }
  if (!path.startsWith(basePathWithSlash)) {
    throw new Error(
      `Path "${path}" does not start with base path "${basePath}".`,
    );
  }
  return path.slice(basePath.length);
};
const addBase = (path: string): string => {
  if (!path.startsWith("/")) {
    throw new Error(`Path "${path}" is not an absolute path.`);
  }
  return `${basePath}${path}`;
};
const splitLocale = (path: string): [Locale, string] => {
  if (!path.startsWith("/")) {
    throw new Error(`Path "${path}" is not an absolute path.`);
  }

  const [, locale, ...rest] = path.split("/");
  if (!locale) {
    throw new Error(`Path "${path}" does not contain a language segment.`);
  }
  return [locale as Locale, `/${rest.join("/")}`];
};
const addLocale = (lang: Locale, path: string): string => {
  if (!path.startsWith("/")) {
    throw new Error(`Path "${path}" is not an absolute path.`);
  }
  return `/${lang}${path}`;
};
const prefixCommonRoot = (path: string): string => addBase(path);
const prefixLocaleRoot = (locale: Locale, path: string): string =>
  addBase(addLocale(locale, path));
const switchLocale = (locale: Locale, path: string): string => {
  const [, rest] = splitLocale(removeBase(path));
  return prefixLocaleRoot(locale, rest);
};

export {
  removeBase,
  addBase,
  splitLocale,
  addLocale,
  prefixCommonRoot,
  prefixLocaleRoot,
  switchLocale,
};
