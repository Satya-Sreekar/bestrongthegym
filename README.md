# Be Strong The Gym — bestrongthegym.com

Single-page site for Be Strong The Gym, Red Hills, Hyderabad. React + Vite + Framer Motion, tested with Playwright, hosted on GitHub Pages behind Cloudflare DNS. Light, warm design: paper background, yellow accent, Unbounded + Instrument Sans, colour photography.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm test           # Playwright: mobile (iPhone 13 viewport) + desktop (1440px)
node tests/shots.mjs mobile   # viewport-sized screenshots into .playwright-mcp/shots (needs `npx vite preview` running)
```

All copy, prices, hours and links live in `src/data.ts`. Gym photos live in `public/img/photo/` (WebP), Instagram reel covers in `public/img/`.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. `public/CNAME` pins the custom domain.

### One-time GitHub setup

1. Repo → Settings → Pages → Source: **GitHub Actions** (the workflow handles the rest).
2. Settings → Pages → Custom domain: `bestrongthegym.com`, then tick **Enforce HTTPS** once the DNS check passes.

### Cloudflare DNS (bestrongthegym.com)

Add these records in the Cloudflare dashboard for the zone `bestrongthegym.com`:

| Type  | Name | Content                    | Proxy      |
| ----- | ---- | -------------------------- | ---------- |
| A     | @    | 185.199.108.153            | DNS only   |
| A     | @    | 185.199.109.153            | DNS only   |
| A     | @    | 185.199.110.153            | DNS only   |
| A     | @    | 185.199.111.153            | DNS only   |
| CNAME | www  | satya-sreekar.github.io    | DNS only   |

Leave the records **DNS only (grey cloud)** until GitHub has issued its certificate and "Enforce HTTPS" is on. After that you can switch both to **Proxied (orange cloud)**; if you do, set SSL/TLS mode to **Full** (not Flexible) or the site will redirect-loop.

Recommended Cloudflare extras once proxied: Always Use HTTPS on, Auto Minify off (Vite already minifies), Brotli on.

## Sources

Photos are the gym's own, taken from its Google Business listing and Instagram (@bestrongthegym), in colour. Ratings and reviews as published on Google in September 2026.
