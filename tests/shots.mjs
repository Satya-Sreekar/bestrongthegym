// Dev helper: slice the page into viewport-sized screenshots for visual review.
// usage: node tests/shots.mjs [mobile|desktop]
import { chromium, devices } from '@playwright/test'
import { mkdirSync } from 'node:fs'

const which = process.argv[2] ?? 'mobile'
const ctx = which === 'mobile'
  ? { ...devices['iPhone 13'], deviceScaleFactor: 1 }
  : { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 }
mkdirSync('.playwright-mcp/shots', { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage(ctx)
await page.goto('http://localhost:4173/')
await page.waitForTimeout(800)
const vh = ctx.viewport.height
const total = await page.evaluate(() => document.documentElement.scrollHeight)
let n = 0
for (let y = 0; y < total; y += vh) {
  await page.evaluate((y) => window.scrollTo(0, y), y)
  await page.waitForTimeout(700)
  await page.screenshot({ path: `.playwright-mcp/shots/${which}-${String(n++).padStart(2, '0')}.png` })
}
console.log(`${which}: ${n} shots, page height ${total}px`)
await browser.close()
