import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Aktuality – krátké zprávy, každá jako jeden .md soubor. Tři typy:
//   oznameni      – prostá zpráva (nový instruktor, nové vybavení…)
//   akce          – jednorázová událost; po skončení se zašedne a dopředu
//                   se ukazuje na úvodní stránce s odpočtem
//   zmena-provozu – zavřeno, posunutý výcvik…; po dobu platnosti se
//                   ukazuje i na stránce Kurzy, po skončení se zašedne
const aktuality = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/aktuality' }),
  schema: z
    .object({
      title: z.string(),
      date: z.coerce.date(),
      // volitelný obrázek k příspěvku – stačí název souboru nahraného
      // do src/assets/aktuality (cesta z CMS se ořeže na název souboru)
      obrazek: z.string().optional(),
      typ: z.enum(['oznameni', 'akce', 'zmena-provozu']).default('oznameni'),
      // akce a změna provozu: od kdy do kdy platí/probíhá (oba dny včetně)
      od: z.coerce.date().optional(),
      do: z.coerce.date().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.typ === 'oznameni') return;
      if (!data.od || !data.do) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Příspěvek typu „${data.typ}“ musí mít vyplněná data „od“ a „do“.`,
        });
      } else if (data.do < data.od) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Datum „do“ nesmí předcházet datu „od“.',
        });
      }
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
