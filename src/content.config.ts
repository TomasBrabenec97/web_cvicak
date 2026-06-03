import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Aktuality – krátké zprávy, každá jako jeden .md soubor
const aktuality = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/aktuality' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // volitelný obrázek k příspěvku – stačí název souboru nahraného
    // do src/assets/aktuality (cesta z CMS se ořeže na název souboru)
    obrazek: z.string().optional(),
  }),
});

// Instruktoři – medailonek jako .md soubor, fotka v src/assets/instruktori
const instruktori = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/instruktori' }),
  schema: z.object({
    title: z.string(), // jméno
    role: z.string().optional(),
    foto: z.string().optional(),
    poradi: z.number().default(99),
  }),
});

export const collections = { aktuality, instruktori };
