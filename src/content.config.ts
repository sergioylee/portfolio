import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blogs };
