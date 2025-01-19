import eslintPluginPrettier from "eslint-plugin-prettier";
import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser, // Enable browser globals like `window` and `document`
      ecmaVersion: "latest", // Use the latest ECMAScript features
      sourceType: "module", // Enable ES modules
    },
    plugins: {
      prettier: eslintPluginPrettier, // Add the Prettier plugin as an object
    }, // Use Prettier as a plugin
    rules: {
      ...pluginJs.configs.recommended.rules, // Include ESLint's recommended rules
      "prettier/prettier": "error", // Treat Prettier issues as errors
    },
    ignores: ["node_modules"], // Ignore node_modules folder
  },
];
