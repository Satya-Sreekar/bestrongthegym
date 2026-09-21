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

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

The Vite `base` is `./`, so the build works both at a domain root and at a project subpath. Today the site is live at <http://satyasreekar.in/bestrongthegym/> because `satyasreekar.in` is the custom domain on the `Satya-Sreekar.github.io` user site. Keep asset URLs relative: run them through `asset()` in `src/ui.tsx` rather than writing `/img/...`, or they 404 at the subpath and the page renders blank. A Playwright test guards this.

### Attaching bestrongthegym.com

The custom domain is **not** currently set on this repo. GitHub removed it because its DNS check failed while the Cloudflare records were proxied, and with no domain registered GitHub Pages answers 404 for that hostname.

To attach it:

1. Fix the Cloudflare records (below) so the apex resolves to GitHub's IPs with the proxy **off**.
2. Repo → Settings → Pages → Custom domain: `bestrongthegym.com`. Wait for the green DNS check.
3. Tick **Enforce HTTPS** once GitHub has issued the certificate (can take up to an hour).

### Cloudflare DNS (bestrongthegym.com)

Set these records in the Cloudflare dashboard for the zone `bestrongthegym.com`, replacing anything already on `@` and `www`:

| Type  | Name | Content                    | Proxy      |
| ----- | ---- | -------------------------- | ---------- |
| A     | @    | 185.199.108.153            | DNS only   |
| A     | @    | 185.199.109.153            | DNS only   |
| A     | @    | 185.199.110.153            | DNS only   |
| A     | @    | 185.199.111.153            | DNS only   |
| CNAME | www  | satya-sreekar.github.io    | DNS only   |

The **DNS only (grey cloud)** setting matters. With the proxy on, the apex resolves to Cloudflare's own IPs, GitHub cannot verify the domain, and it drops it again. Leave the proxy off until the certificate is issued and "Enforce HTTPS" is ticked. After that you may switch to **Proxied (orange cloud)**; if you do, set SSL/TLS mode to **Full** (not Flexible) or the site will redirect-loop.

To check the records from a terminal: `nslookup bestrongthegym.com 8.8.8.8` should list the four `185.199.*` addresses. Cloudflare addresses such as `104.21.*` or `172.67.*` mean the proxy is still on.

Recommended Cloudflare extras once proxied: Always Use HTTPS on, Auto Minify off (Vite already minifies), Brotli on.

## Sources

Photos are the gym's own, taken from its Google Business listing and Instagram (@bestrongthegym), in colour. Ratings and reviews as published on Google in September 2026.
