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
    heroImage: z.string(), // shot brief until real photography is added
    gallery: z.array(z.string()).default([]),
    results: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    quote: z.object({ text: z.string(), name: z.string(), role: z.string() }).optional(),
    // Sample entries show a banner so they can never be mistaken for real work.
    sample: z.boolean().default(false),
  }),
});

export const collections = { work };
