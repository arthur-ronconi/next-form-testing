import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "@typescript-eslint/ban-ts-comment": [
        "error", // or 'warn'
        {
          "ts-ignore": false,
          "ts-expect-error": "allow-with-description", // Recommended alternative
          "ts-nocheck": true, // Disallows @ts-nocheck
          "ts-check": false, // Allows @ts-check
        },
      ],
    },
  },
];

export default eslintConfig;
