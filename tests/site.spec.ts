import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('loads with hero, no horizontal overflow, no console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/Stronger/i)
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  expect(overflow).toBeLessThanOrEqual(0)
  expect(errors).toEqual([])
})

test('primary CTAs point at WhatsApp and phone', async ({ page }) => {
  const trial = page.locator('.hero__cta a').first()
  await expect(trial).toHaveAttribute('href', /wa\.me\/919390987869/)
  const call = page.locator('.hero__cta a').nth(1)
  await expect(call).toHaveAttribute('href', 'tel:+919390987869')
})

test('pricing toggle swaps prices', async ({ page }) => {
  await page.locator('#plans').scrollIntoViewIfNeeded()
  await expect(page.locator('.plan--pop .plan__amt')).toContainText('2,300')
  await page.getByRole('button', { name: /12 months/ }).click()
  await expect(page.locator('.plan--pop .plan__amt')).toContainText('12,000')
  await expect(page.locator('.plan').first().locator('.plan__amt')).toContainText(/quote/i)
  await page.getByRole('button', { name: /3 months/ }).click()
  await expect(page.locator('.plan--pop .plan__amt')).toContainText('5,000')
})

test('programs and FAQ accordions expand', async ({ page }) => {
  const second = page.locator('.prog__btn').nth(1)
  await second.scrollIntoViewIfNeeded()
  await second.click()
  await expect(second).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('#prog-1')).toBeVisible()

  const q = page.locator('.faq__q').nth(2)
  await q.scrollIntoViewIfNeeded()
  await q.click()
  await expect(q).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('#faq-2')).toContainText(/beginner|trainer/i)
})

test('map loads only on demand', async ({ page }) => {
  await expect(page.locator('.map iframe')).toHaveCount(0)
  const btn = page.getByRole('button', { name: /show interactive map/i })
  await btn.scrollIntoViewIfNeeded()
  await btn.click()
  await expect(page.locator('.map iframe')).toHaveCount(1)
})

test('all local images resolve', async ({ page }) => {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(800)
  const broken = await page.evaluate(() =>
    [...document.images].filter((i) => i.complete && i.naturalWidth === 0 && i.src.startsWith(location.origin)).map((i) => i.src),
  )
  expect(broken).toEqual([])
})

test('mobile: menu opens, links work, quick-action bar appears', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile only')
  await page.getByRole('button', { name: /open menu/i }).click()
  const link = page.locator('#menu a[href="#plans"]')
  await expect(link).toBeVisible()
  await link.click()
  await expect(page.locator('#menu')).toHaveCount(0)
  await page.waitForTimeout(600)
  await expect(page.locator('.mbar')).toBeVisible()
  await expect(page.locator('.mbar a.is-primary')).toHaveAttribute('href', /wa\.me/)
  await page.screenshot({ path: 'test-results/mobile-full.png', fullPage: true })
})

test('desktop: nav links visible and quick bar hidden', async ({ page, isMobile }) => {
  test.skip(!!isMobile, 'desktop only')
  await expect(page.locator('.nav__links a')).toHaveCount(7)
  await page.evaluate(() => window.scrollTo(0, 1200))
  await page.waitForTimeout(500)
  await expect(page.locator('.mbar')).toBeHidden()
  await page.screenshot({ path: 'test-results/desktop-full.png', fullPage: true })
})
