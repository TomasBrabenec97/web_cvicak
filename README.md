# ZKO Nupaky – web

Web základní kynologické organizace Nupaky (ZKO č. 653). Postaveno na
[Astro](https://astro.build) (statický web, žádná databáze), hostováno zdarma na
**GitHub Pages**, obsah se edituje přes **[Pages CMS](https://pagescms.org)** –
jednoduché webové rozhraní, ve kterém členové klubu upravují aktuality, kurzy,
kontakty i fotky bez znalosti programování.

## Struktura obsahu

| Co | Kde | Jak se edituje |
|---|---|---|
| Aktuality | `src/content/aktuality/*.md` | Pages CMS → „Aktuality“ |
| Instruktoři | `src/content/instruktori/*.md` | Pages CMS → „Instruktoři“ |
| Kurzy a ceny | `src/data/kurzy.json` | Pages CMS → „Kurzy a ceny“ |
| Kontakty + mapa | `src/data/kontakty.json` | Pages CMS → „Kontakty“ |
| Fotogalerie | `src/assets/galerie/` | Pages CMS → „Media“ → Fotogalerie (stačí nahrát fotku, web ji zobrazí sám) |

## Lokální vývoj

```bash
npm install
npm run dev      # http://localhost:4321/web_cvicak
npm run build    # produkční build do dist/
```

## Checklist pro spuštění

1. **Uprav `astro.config.mjs`** – nahraď `TVUJ-GITHUB-UCET` svým GitHub účtem.
   Pokud se repozitář bude jmenovat jinak než `web_cvicak`, změň i `base`.
2. **Vytvoř repozitář na GitHubu a pushni:**
   ```bash
   git add -A
   git commit -m "První verze webu"
   git remote add origin https://github.com/<ucet>/web_cvicak.git
   git push -u origin main
   ```
3. **Zapni GitHub Pages:** v repozitáři *Settings → Pages → Source: GitHub Actions*.
   Každý push do `main` pak web automaticky nasadí (workflow
   `.github/workflows/deploy.yml`). Web poběží na
   `https://<ucet>.github.io/web_cvicak/`.
4. **Připoj Pages CMS:**
   1. Jdi na [app.pagescms.org](https://app.pagescms.org) a přihlas se přes GitHub.
   2. Povol Pages CMS přístup k tomuto repozitáři (instalace GitHub App).
   3. Otevři repozitář v Pages CMS – konfigurace se načte z `.pages.yml`.
5. **Přidej editory:** každý člen klubu, který má obsah upravovat, potřebuje
   (bezplatný) GitHub účet a pozvánku jako *collaborator* do repozitáře
   (*Settings → Collaborators*). Pak se přihlásí na app.pagescms.org a edituje.

## Poznámky

- Po uložení změny v Pages CMS se web automaticky znovu sestaví a nasadí
  (trvá to ~1–2 minuty).
- Obrázek k aktualitě vkládejte přes pole **„Obrázek“** (ne do textu příspěvku).
- Vlastní doména později: v `astro.config.mjs` nastav `site` na doménu, smaž
  `base`, a v GitHub Pages nastav *Custom domain*.
- Složka `_archive/` obsahuje zálohu starého webu z eStránky.cz a `_downloads/`
  stažené originály fotek – obě jsou v `.gitignore`, na GitHub se nenahrají.
