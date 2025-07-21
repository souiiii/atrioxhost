// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  // 1. ESLint recommended base
  js.configs.recommended,

  // 2. React rules
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/jsx-uses-react": "warn",
      "react/react-in-jsx-scope": "off",
      "no-console": "warn",
    },
  },
];
