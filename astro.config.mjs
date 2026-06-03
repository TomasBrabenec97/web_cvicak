// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages:
//  - `site` = https://<github-ucet>.github.io
//  - `base` = /<nazev-repozitare>
// Pokud web později poběží na vlastní doméně (např. zkonupaky.cz),
// nastavte `site` na doménu a `base` smažte.
export default defineConfig({
  site: 'https://TomasBrabenec97.github.io',
  base: '/web_cvicak',
});
