import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend from Next.js recommended settings
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom rules
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Matikan error unused var
      "@next/next/no-html-link-for-pages": "off", // Boleh pakai <a>
      "react-hooks/exhaustive-deps": "warn",       // Biar jadi warning aja
      "@next/next/no-img-element": "warn", 
      "@typescript-eslint/no-explicit-any": "off",        // Kasih warning, gak error
    },
  },
];

export default eslintConfig;
