import { defineConfig } from "astro/config";

export default defineConfig({
  // TODO: set to the live domain before launch (used for canonical URLs, OG tags and structured data).
  site: "https://example.com",
  // Point the bundler at this folder's tsconfig, not the WESTWARD one in the repo root, so this
  // site builds on its own (e.g. with "agency" as the base directory on Netlify or Vercel).
  vite: { tsconfig: "./tsconfig.json" },
});
