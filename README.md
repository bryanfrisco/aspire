# ASPIRE Stargate website

The corporate website of PT Anugerah Surya Pacific Resources (ASPIRE Stargate), built with Astro. It is a static, bilingual site (Indonesian at `/id/`, English at `/en/`).

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies. Needs Node 20 or newer. |
| `npm run dev` | Start a local dev server at http://localhost:4321 |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve `dist/` locally to check the build |
| `npm run todo` | List every `[TO UPDATE]` placeholder still waiting for content |

## Editing content

| What | Where |
| --- | --- |
| Company facts, timeline, values | `src/data/company.ts` |
| The six operations (text, tenement facts, grades) | `src/data/projects.ts` |
| News | `src/content/news/id/*.md` and `src/content/news/en/*.md`. Give the two language versions of an article the same file name so the language switch pairs them. |
| Reports and policy downloads | Put the PDF in `public/reports/`, then set `"file": "/reports/name.pdf"` in `src/content/reports.json` |
| Navigation and UI labels | `src/i18n/index.ts` |
| Page text | `src/pages/[lang]/*.astro` (each string appears in both languages) |

Placeholders render visibly as `[TO UPDATE]` so nothing missing goes unnoticed. Run `npm run todo` to list them.

### Contact form

By default the form opens the visitor's email app, addressed to `nickel@stargate.aspire.id`. To post messages directly instead, set a form endpoint at build time, for example Formspree or a Cloudflare Worker:

```
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxx npm run build
```

## Deploying

`npm run build` produces plain HTML, CSS, JS and images in `dist/`. Upload the **contents** of `dist/` to any static host. URLs end with a slash (`/en/about/`), and each page is a folder holding an `index.html`.

- **Cloudflare Pages**: build command `npm run build`, output directory `dist`.
- **cPanel**: upload the contents of `dist/` into `public_html/`. Add an `.htaccess` file containing `ErrorDocument 404 /404.html`.
- **Nginx**:
  ```nginx
  root /var/www/aspire/dist;
  location / { try_files $uri $uri/ $uri/index.html =404; }
  error_page 404 /404.html;
  location /_astro/ { expires 1y; add_header Cache-Control "public, immutable"; }
  ```
- **Vercel** (current preview, connected to the GitHub repo; every push to `main` deploys): builds on Vercel carry `<meta name="robots" content="noindex">` on every page, so the preview stays out of search results while www.aspire.id is still the old site. At launch, add the environment variable `SITE_LIVE=true` in Vercel (Settings → Environment Variables) and redeploy. Builds on other hosts are unaffected.

The root `/` sends visitors to `/id/`, or to `/en/` when their browser language isn't Indonesian.

## Assets still needed from ASPIRE

- **Logo**: vector files (SVG). The current mark is upscaled from a PNG.
- **Smelter imagery**: recent site photography, especially of the RKEF construction.
- **Concession map**: official WIUP boundaries. The site map is an illustrative schematic until then.
