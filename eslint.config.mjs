import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Required for resolving paths in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat is used to convert old-style `extends` into flat config
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Pull in recommended Next.js and TypeScript settings
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add additional custom config
  {
    plugins: {
      react: require("eslint-plugin-react"),
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // ✅ Disable rule that requires `import React` in JSX
      "react/react-in-jsx-scope": "off",

      // Optional: Enable some stricter rules
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;