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
const addCommonRoot = (path: string): string => addBase(path);
const removeCommonRoot = (path: string): string => removeBase(path);

const addLocaleRoot = (locale: Locale, path: string): string =>
  addBase(addLocale(locale, path));
const removeLocaleRoot = (_locale: Locale, path: string): string => {
  const pathWithoutBase = removeBase(path);
  const [, rest] = splitLocale(pathWithoutBase);
  return rest;
};

interface Router {
  route: (path: string) => string;
}

interface ReverseRouter {
  xRoute: (path: string) => string;
}

const buildNormalLocaleRouter = (locale: Locale): Router & ReverseRouter => ({
  route: (path: string): string => addLocaleRoot(locale, path),
  xRoute: (path: string): string => removeLocaleRoot(locale, path),
});

const buildCommonRouter = (): Router & ReverseRouter => ({
  route: (path: string): string => addCommonRoot(path),
  xRoute: (path: string): string => removeCommonRoot(path),
});

export {
  type Router,
  type ReverseRouter,
  // removeBase,
  // addBase,
  // splitLocale,
  // addLocale,
  // prefixCommonRoot,
  // addLocaleRoot,
  // removeLocaleRoot,
  buildNormalLocaleRouter,
  buildCommonRouter,
};
