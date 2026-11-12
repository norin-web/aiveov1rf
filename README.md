# AI Veo — promo site

Promo site for the AI Veo iPhone app (AI video generator, App Store ID 6816889253).
React 18 + TypeScript + Vite 6 + Tailwind 4 (layout in `src/styles/index.css`) + React Router 7.

## Run

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build into dist/
pnpm preview    # serve dist/ locally
```

## Deploy

Every push to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`).
The workflow copies `dist/index.html` to `dist/404.html` so deep links load the app.
In the repo, Settings → Pages → Source must be **GitHub Actions**.

### `base` and the custom domain — read before touching Pages settings

- Now: no domain, the site lives at `https://norin-web.github.io/aiveov1rf/`, so `vite.config.ts` has `base: "/aiveov1rf/"`.
- When a domain is attached in Pages settings, in **one commit**: set `base: "/"` and add `public/CNAME` with the bare domain.
  Otherwise every asset 404s and the page is blank.

## Where things live

- `src/app/content/site.ts` — every fact: brand, email, App Store ID, nav, features, FAQ. Pages read only from here.
  `PLACEHOLDER` values (operator, minIOS, category) are hidden on the site until filled.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use, **verbatim** from the owner (only `## ` headings and `- ` lists added).
  While `body` is `null` the pages show a short notice with the email.
- `public/images/` — WebP app screens in an iPhone frame (sources in `../File/materials/`), icon, OG image.
- All image paths go through `img()` (`src/app/utils/img.ts`) so they work under any `base`.

## Reveal animations

Reveals are CSS transitions driven by `useReveal` (`src/app/utils/useReveal.ts`). Hidden states apply only under `html.js`,
and both fallbacks are gated on the element's real position, so content never stays invisible in a background tab
and the page never plays every animation at once.
