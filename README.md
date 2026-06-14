# Deutsche Tor Technik (DTT)

Marketing website for **Deutsche Tor Technik** — custom-made garage doors and front
doors in genuine wood, Idstein, Germany. *"Doors that suit you, service that understands you."*

- **Layout** modeled on a modern access/automation catalog site (hero slider, category
  grid, feature banners, references, configurator, map, resources).
- **Branding** uses DTT's own assets: logo, brand palette
  (royal blue `#0018a8`, navy `#000e28`, cyan `#00a3e0`, orange `#f58220`),
  fonts (Montserrat / Roboto), and DTT's own product photography.
- Plain HTML/CSS/JS, no build step. Shared header/footer via `partials/` + `assets/js/main.js`.

## Pages
Home · Products overview · 4 category pages (Garage Doors, Front Doors, Wood & Design,
Drives & Accessories) · Company · Service · References · Configurator · Contact ·
Downloads · Support · Partner · Careers · Customer area · Privacy · Terms · Imprint.

## Run locally
The partial-include uses `fetch`, so serve over HTTP (not `file://`):

```bash
cd DTT && python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy (GitHub Pages)
Already enabled: https://julianito03.github.io/DTT/ (branch `main`, root, `.nojekyll` present).

## Before going live
- Real phone number (placeholder in header/footer/contact).
- Official **Impressum**, **Datenschutz** and **AGB** text (`pages/legal.html`,
  `privacy.html`, `terms.html` are placeholders).
- Wire the contact/configurator forms to email (currently demo alerts).
- Optional: swap placeholder copy for DTT's final wording, add more real photos.
