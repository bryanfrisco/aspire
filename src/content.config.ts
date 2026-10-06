import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// News: one Markdown file per language in src/content/news/{id,en}/.
// Matching articles share the same file name so the language switch can pair them.
const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    category: z.enum(['company', 'operations', 'sustainability', 'community', 'safety']),
    source: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

// Reports library. Add a PDF to public/reports/ and set `file` to publish it.
const reports = defineCollection({
  loader: file('./src/content/reports.json'),
  schema: z.object({
    id: z.string(),
    year: z.number(),
    type: z.enum(['annual', 'sustainability', 'safety', 'governance', 'environment', 'other']),
    title: z.object({ id: z.string(), en: z.string() }),
    file: z.string().nullable(),
    sizeKb: z.number().nullable().default(null),
  }),
});

export const collections = { news, reports };
