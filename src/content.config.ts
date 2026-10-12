import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One Markdown file per project in src/content/work/. The file name becomes the URL (/work/<file-name>).
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    client: z.string(),
    clientType: z.enum(["Estate agent", "Agency", "Developer"]),
    services: z.array(z.string()).min(1),
    year: z.number(),
    summary: z.string(),
    heroImage: z.string(), // shot brief, shown until heroSrc is set
    heroSrc: z.string().default(""), // e.g. "/images/harbours-edge-aerial.jpg" in public/
    website: z.string().default(""), // live URL of a site we built, if any
    gallery: z.array(z.string()).default([]),
    results: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    quote: z.object({ text: z.string(), name: z.string(), role: z.string() }).optional(),
    // Drafts show a banner until the details are confirmed with the client.
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
