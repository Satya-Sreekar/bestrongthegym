import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('loads with hero, no horizontal overflow, no page errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/habit/i)
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  expect(overflow).toBeLessThanOrEqual(0)
  expect(errors).toEqual([])
})

test('primary CTAs point at WhatsApp and phone', async ({ page }) => {
  await expect(page.locator('.hero__cta a').first()).toHaveAttribute('href', /wa\.me\/919390987869/)
  await expect(page.locator('.fab')).toHaveAttribute('href', /wa\.me/)
  await expect(page.locator('.visit__cta a[href^="tel:"]')).toHaveAttribute('href', 'tel:+919390987869')
})

test('membership term chips swap prices', async ({ page }) => {
  await page.locator('#membership').scrollIntoViewIfNeeded()
  await expect(page.locator('.plan--pop .plan__price strong')).toContainText('2,300')
  await page.getByRole('button', { name: '12 months' }).click()
  await expect(page.locator('.plan--pop .plan__price strong')).toContainText('12,000')
  await expect(page.locator('.plan').first().locator('.plan__price strong')).toContainText(/ask/i)
  await page.getByRole('button', { name: '3 months' }).click()
  await expect(page.locator('.plan--pop .plan__price strong')).toContainText('5,000')
})

test('track tabs and FAQ accordion work', async ({ page }) => {
  const tab = page.getByRole('tab', { name: 'Lose fat' })
  await tab.scrollIntoViewIfNeeded()
  await tab.click()
  await expect(tab).toHaveAttribute('aria-selected', 'true')
  await expect(page.locator('#track-panel h3')).toContainText(/weight/i)

  const q = page.locator('.faq__q').nth(2)
  await q.scrollIntoViewIfNeeded()
  await q.click()
  await expect(q).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('#faq-2')).toContainText(/shoes/i)
})

test('map loads only on demand', async ({ page }) => {
  await expect(page.locator('.map iframe')).toHaveCount(0)
  const btn = page.getByRole('button', { name: /show map/i })
  await btn.scrollIntoViewIfNeeded()
  await btn.click()
  await expect(page.locator('.map iframe')).toHaveCount(1)
})

test('all local images resolve', async ({ page }) => {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)) }
  })
  await page.waitForTimeout(1200)
  const broken = await page.evaluate(() =>
    [...document.images].filter((i) => i.complete && i.naturalWidth === 0 && i.src.startsWith(location.origin)).map((i) => i.src),
  )
  expect(broken).toEqual([])
})

// Guards the subpath deploy: absolute "/..." asset URLs 404 when the site is
// served from a project path like /bestrongthegym/ instead of a domain root.
test('asset URLs are relative, not root-absolute', async ({ page }) => {
  const absolute = await page.evaluate(() =>
    [...document.querySelectorAll('img[src], script[src], link[href]')]
      .map((el) => el.getAttribute('src') || el.getAttribute('href') || '')
      .filter((u) => u.startsWith('/')),
  )
  expect(absolute).toEqual([])
})

test('mobile: bottom-sheet menu opens and navigates', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile only')
  await page.getByRole('button', { name: /open menu/i }).click()
  const link = page.locator('#sheet a[href="#membership"]')
  await expect(link).toBeVisible()
  await link.click()
  await expect(page.locator('#sheet')).toHaveCount(0)
  await expect(page.locator('.fab')).toBeVisible()
})

test('desktop: nav links visible', async ({ page, isMobile }) => {
  test.skip(!!isMobile, 'desktop only')
  await expect(page.locator('.nav__links a')).toHaveCount(7)
  await expect(page.locator('.nav__burger')).toBeHidden()
})
