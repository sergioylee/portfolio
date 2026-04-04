import js from "@eslint/js";
import pluginAstro from "eslint-plugin-astro";

export default [
  { ignores: ["dist/", ".astro/"] },
  js.configs.recommended,
  ...pluginAstro.configs["flat/recommended"],
];
