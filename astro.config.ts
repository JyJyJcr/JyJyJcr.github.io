/** biome-ignore-all lint/correctness/noNodejsModules: this is config file. */
/** biome-ignore-all lint/style/noDefaultExport: this is config file. */
/** biome-ignore-all lint/style/noProcessEnv: this is config file. */
import process from "node:process";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { ASTRO_SITE, ASTRO_BASE } = loadEnv(
  process.env.NODE_ENV ?? "production",
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  ...(ASTRO_SITE && { site: ASTRO_SITE }),
  ...(ASTRO_BASE && { base: ASTRO_BASE }),
  trailingSlash: "always",
});
