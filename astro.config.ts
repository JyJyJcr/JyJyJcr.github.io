import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import process from "node:process";

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
});
