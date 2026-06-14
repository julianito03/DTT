# DTT — Automation & Access (layout demo)

A static website whose **layout and structure** were modeled on a typical industrial
access-automation catalog site. All text, product names, images and branding here are
**original placeholder content** created for DTT — no third-party copyrighted text,
photos, logos or trademarks are included.

## What this is
- Multi-page static site (plain HTML/CSS/JS, no build step).
- Shared header/footer injected via `partials/` + `assets/js/main.js`.
- Pages: home, product overview + 4 category pages, company, academy, news,
  catalog, downloads, support, partner, careers, login, contact, privacy, terms, legal.

## Run locally
A small static server is needed (the partial-include uses `fetch`, which won't work via `file://`):

```bash
cd DTT
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy (GitHub Pages)
Settings → Pages → Build from branch → `main` / root. The `.nojekyll` file is included.

## Replace before going live
- Real DTT branding, copy and product data.
- `pages/privacy.html`, `pages/terms.html`, `pages/legal.html` — placeholder legal text.
- Contact form + map are demo placeholders.
