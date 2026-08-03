import { defineConfig } from "eslint/config";
import jseslint from "@eslint/js";
import css from "@eslint/css";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig([
  {
    ignores: ["dist", ".astro", "node_modules"],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.{css,scss,sass,less}"],
    plugins: {
      css,
    },
    language: "css/css",
    extends: ["css/recommended"],
  },
  {
    files: ["**/*.{js,jsx,cjs,mjs}"],
    extends: [jseslint.configs.all],
  },
  {
    files: ["**/*.{ts,tsx,cts,mts}"],
    extends: [
      jseslint.configs.all,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
  },
  {
    files: ["**/*.astro"],
    extends: [
      jseslint.configs.all,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      eslintPluginAstro.configs.all,
    ],
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },
  {
    rules: {
      "sort-imports": "off",
      "sort-keys": "off",
      "sort-vars": "off",
    },
  },
  eslintConfigPrettier,
]);
