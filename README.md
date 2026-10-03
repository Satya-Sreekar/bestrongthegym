# Be Strong The Gym — bestrongthegym.com

Single-page site for Be Strong The Gym, Red Hills, Lakdikapul, Hyderabad.
React, Vite and Framer Motion, tested with Playwright, deployed to GitHub Pages
behind Cloudflare DNS.

The site is built to do two jobs: look like an established Hyderabad gym, and
turn visitors into WhatsApp enquiries. Every call to action opens WhatsApp with
a message already written.

## Editing the site

**Business facts live in [`src/config.ts`](src/config.ts).** Phone number,
address, opening hours, the couple offer wording, every external link and all
the pre-filled WhatsApp messages are in that one file. Change them there and
they update everywhere, including the structured data Google reads.

Marketing copy, photo captions, reviews and FAQs are in
[`src/content.ts`](src/content.ts).

### Things the gym still needs to supply

These sit in `src/config.ts` as `null`. Each section falls back to a WhatsApp
enquiry rather than linking somewhere wrong, so nothing is broken while they are
missing. Paste the real URL to switch each one on.

| Setting      | What it is                                               |
| ------------ | -------------------------------------------------------- |
| `fitpass`    | The FITPASS listing page for the gym                      |
| `appStore`   | The official Be Strong member app on the Apple App Store  |
| `googlePlay` | The official Be Strong member app on Google Play          |

### Membership pricing

Prices are deliberately not published. Rates change, and a stale number on the
website costs trust at the front desk, so every plan routes to WhatsApp. If the
gym decides to publish prices later, add them to the plans in
[`src/components/Membership.tsx`](src/components/Membership.tsx).

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type check, then production build into dist/
npm test           # Playwright on an iPhone 13 viewport and 1440px desktop
```

To review the design visually, run `npx vite preview --port 4173` in one shell,
then `node tests/shots.mjs mobile` (or `desktop`) in another. It writes
viewport-sized screenshots to `.playwright-mcp/shots`.

### Rules worth knowing before you edit

- **Asset URLs must stay relative.** Use the `asset()` helper in `src/ui.tsx`
  rather than writing `/img/...`. A leading slash 404s when GitHub Pages serves
  the site from a project path instead of the domain root, which leaves a blank
  page. A test guards this.
- **Structured data is generated at build time** by the `seo` plugin in
  `vite.config.ts`, from `src/config.ts` and `src/content.ts`. It cannot drift
  from what the page says, and crawlers see it without running JavaScript. The
  sitemap is emitted the same way.
- **Lead tracking** goes through `track()` in `src/track.ts`. It pushes clean
  event names into `window.dataLayer` when one exists and does nothing when it
  does not, so Google Tag Manager or GA4 can be added later with no code change.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.

### Cloudflare DNS (bestrongthegym.com)

The domain is live. For reference, the records are:

| Type  | Name | Content                 | Proxy    |
| ----- | ---- | ----------------------- | -------- |
| A     | @    | 185.199.108.153         | DNS only |
| A     | @    | 185.199.109.153         | DNS only |
| A     | @    | 185.199.110.153         | DNS only |
| A     | @    | 185.199.111.153         | DNS only |
| CNAME | www  | satya-sreekar.github.io | DNS only |

Keep the proxy **off** while GitHub verifies the domain and issues its
certificate. With the proxy on, the apex resolves to Cloudflare's own addresses,
GitHub cannot verify it, and the custom domain gets dropped. Check with
`nslookup bestrongthegym.com 8.8.8.8`: four `185.199.*` addresses mean it is
right.

## Sources

Photographs are the gym's own, taken from its Google Business Profile and
Instagram (@bestrongthegym), used in colour. Reviews are quoted from the gym's
public Google Business Profile; longer ones are shortened, the wording is
otherwise unchanged. The rating and review count are as published there.
