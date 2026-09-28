import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";
import path from "node:path";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: currentDirectory });

const eslintConfig = [
  {
    ignores: [
      ".agents/**",
      ".claude/**",
      ".codex/**",
      ".cursor/**",
      ".impeccable/**",
      ".next/**",
      ".playwright-cli/**",
      ".playwright-mcp/**",
      ".sixth/**",
      ".vercel/**",
      "node_modules/**",
      "out/**",
      "output/**",
      "public/_next/**",
      "next-env.d.ts"
    ]
  },
  ...compat.extends("next/core-web-vitals", "next/typescript")
];

export default eslintConfig;
