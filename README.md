# ZKO Nupaky – website

Website of the Nupaky basic dog training organization (ZKO no. 653). Built with
[Astro](https://astro.build) (static site, no database), hosted for free on
**GitHub Pages**, content is edited via **[Pages CMS](https://pagescms.org)** –
a simple web interface where club members update news, courses, contacts and
photos without any programming knowledge.

## Content structure

| What | Where | How to edit |
|---|---|---|
| News | `src/content/aktuality/*.md` | Pages CMS → "Aktuality" |
| Instructors | `src/content/instruktori/*.md` | Pages CMS → "Instruktoři" |
| Courses and prices | `src/data/kurzy.json` | Pages CMS → "Kurzy a ceny" |
| Contacts + map | `src/data/kontakty.json` | Pages CMS → "Kontakty" |
| Photo gallery | `src/assets/galerie/` | Pages CMS → "Media" → Fotogalerie (just upload a photo, the site displays it automatically) |

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/web_cvicak
npm run build    # production build into dist/
```

## Launch checklist

1. **Edit `astro.config.mjs`** – replace `TVUJ-GITHUB-UCET` with your GitHub
   account. If the repository is named anything other than `web_cvicak`,
   change `base` as well.
2. **Create a repository on GitHub and push:**
   ```bash
   git add -A
   git commit -m "First version of the website"
   git remote add origin https://github.com/<account>/web_cvicak.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:** in the repository, *Settings → Pages → Source:
   GitHub Actions*. Every push to `main` then deploys the site automatically
   (workflow `.github/workflows/deploy.yml`). The site will run at
   `https://<account>.github.io/web_cvicak/`.
4. **Connect Pages CMS:**
   1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
   2. Grant Pages CMS access to this repository (GitHub App installation).
   3. Open the repository in Pages CMS – the configuration loads from `.pages.yml`.
5. **Add editors:** every club member who should edit content needs a (free)
   GitHub account and an invitation as a *collaborator* to the repository
   (*Settings → Collaborators*). They then sign in at app.pagescms.org and edit.

## Notes

- After saving a change in Pages CMS, the site is automatically rebuilt and
  deployed (takes ~1–2 minutes).
- Insert the image for a news post via the **"Obrázek"** field (not into the
  post body).
- Custom domain later: in `astro.config.mjs` set `site` to the domain, remove
  `base`, and set *Custom domain* in GitHub Pages.
- The `_archive/` folder contains a backup of the old website from eStránky.cz
  and `_downloads/` the downloaded photo originals – both are in `.gitignore`
  and won't be uploaded to GitHub.
