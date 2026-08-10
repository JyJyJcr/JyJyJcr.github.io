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
    files: ["**/*.{css}"],
    plugins: {
      css,
    },
    language: "css/css",
    extends: ["css/recommended"],
  },
  {
    files: ["**/*.{js,jsx,cjs,mjs}", "**/*.{ts,tsx,cts,mts}", "**/*.astro"],
    extends: [jseslint.configs.all],
    rules: {
      "sort-imports": "off",
      "sort-keys": "off",
      "sort-vars": "off",
      "capitalized-comments": "off",
      "one-var": ["error", "never"],
    },
  },
  {
    files: ["**/*.{ts,tsx,cts,mts}", "**/*.astro"],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ["**/*.astro"],
    extends: [eslintPluginAstro.configs.all],
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "astro/sort-attributes": "off",
    },
  },
  eslintConfigPrettier,
]);
