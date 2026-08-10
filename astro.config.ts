import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import process from "node:process";
import { defaultLocale, localeList } from "./src/i18n";

const { SITE_URL, BASE_PATH } = loadEnv(
  process.env.NODE_ENV ?? "production",
  import.meta.dirname,
  "",
);

// https://astro.build/config
export default defineConfig({
  ...(SITE_URL && { site: SITE_URL }),
  ...(BASE_PATH && { base: BASE_PATH }),
  trailingSlash: "always",
  i18n: {
    defaultLocale,
    locales: [...localeList],
    /* Fallback locale is commented out because
    fallback: {
      ja: "en",
    },
    */
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
