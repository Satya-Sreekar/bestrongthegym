import { test, expect, type Page } from '@playwright/test'

const WA = /wa\.me\/919390987869/
const TEL = 'tel:+919390987869'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

async function scrollThrough(page: Page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 40))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(900)
}

test('loads, no page errors, no horizontal overflow', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/stronger/i)
  await scrollThrough(page)
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  )
  expect(overflow).toBeLessThanOrEqual(0)
  expect(errors).toEqual([])
})

// `overflow-x: clip` on body hides runaway content from scrollWidth, so measure
// the elements themselves. This is what catches text clipped at the edge.
test('no element spills outside the viewport', async ({ page }) => {
  await scrollThrough(page)
  const spills = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth
    const out: { tag: string; cls: string; left: number; right: number }[] = []
    document.querySelectorAll('body *').forEach((el) => {
      const style = getComputedStyle(el)
      if (style.position === 'fixed' || style.visibility === 'hidden') return
      const r = el.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) return
      if (r.right > vw + 1 || r.left < -1) {
        out.push({
          tag: el.tagName.toLowerCase(),
          cls: String((el as HTMLElement).className).slice(0, 40),
          left: Math.round(r.left),
          right: Math.round(r.right),
        })
      }
    })
    return out.slice(0, 10)
  })
  expect(spills).toEqual([])
})

test('every WhatsApp link uses the gym number and carries a message', async ({ page }) => {
  await scrollThrough(page)
  const links = await page.evaluate(() =>
    [...document.querySelectorAll('a[href*="wa.me"]')].map((a) => a.getAttribute('href') ?? ''),
  )
  expect(links.length).toBeGreaterThan(8)
  for (const href of links) {
    expect(href).toMatch(WA)
    expect(href).toContain('text=')
  }
})

test('phone and directions calls to action are correct', async ({ page }) => {
  await scrollThrough(page)
  const tels = await page.evaluate(() =>
    [...document.querySelectorAll('a[href^="tel:"]')].map((a) => a.getAttribute('href')),
  )
  expect(tels.length).toBeGreaterThan(0)
  for (const href of tels) expect(href).toBe(TEL)

  const directions = page.locator('a[href*="google.com/maps/dir"]').first()
  await expect(directions).toHaveAttribute('href', /Hilltop/i)
})

test('membership shows no prices and routes to WhatsApp', async ({ page }) => {
  const section = page.locator('#membership')
  await section.scrollIntoViewIfNeeded()
  await expect(section).toContainText(/membership/i)
  // The brief requires no published pricing until the gym confirms it.
  await expect(section).not.toContainText(/₹|Rs\.?\s?\d/)
  const ctas = section.locator('a[href*="wa.me"]')
  expect(await ctas.count()).toBeGreaterThanOrEqual(4)
})

test("women's personal training section is present with its own CTA", async ({ page }) => {
  const section = page.locator('#personal-training')
  await section.scrollIntoViewIfNeeded()
  await expect(section.getByRole('heading', { level: 2 })).toContainText(/stronger self/i)
  const cta = section.locator('a[href*="wa.me"]').first()
  await expect(cta).toHaveAttribute('href', WA)
  await expect(section.locator('img')).toHaveCount(2)
})

test('gallery filters and the lightbox opens, navigates and closes', async ({ page }) => {
  const gallery = page.locator('#gallery')
  await gallery.scrollIntoViewIfNeeded()

  const all = await gallery.locator('.grid__item').count()
  await gallery.getByRole('button', { name: 'Cardio', exact: true }).click()
  const cardio = await gallery.locator('.grid__item').count()
  expect(cardio).toBeGreaterThan(0)
  expect(cardio).toBeLessThan(all)

  await gallery.getByRole('button', { name: 'All', exact: true }).click()
  await gallery.locator('.grid__item').first().click()
  const lightbox = page.locator('.lightbox')
  await expect(lightbox).toBeVisible()
  await expect(lightbox.locator('figcaption')).toContainText('1 of')

  await page.keyboard.press('ArrowRight')
  await expect(lightbox.locator('figcaption')).toContainText('2 of')

  await page.keyboard.press('Escape')
  await expect(lightbox).toHaveCount(0)
})

test('FAQ accordion expands and matches the structured data', async ({ page }) => {
  const q = page.locator('.faq__q').nth(2)
  await q.scrollIntoViewIfNeeded()
  await q.click()
  await expect(q).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('#faq-panel-2')).toBeVisible()

  const visible = await page.locator('.faq__q').allInnerTexts()
  const schema = await page.evaluate(() => {
    const blocks = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) =>
      JSON.parse(s.textContent || '{}'),
    )
    const faq = blocks.find((b) => b['@type'] === 'FAQPage')
    return (faq?.mainEntity ?? []).map((q: { name: string }) => q.name)
  })
  expect(schema.length).toBe(visible.length)
  for (const question of schema) expect(visible.join(' ')).toContain(question)
})

test('business structured data matches what the page displays', async ({ page }) => {
  const gym = await page.evaluate(() => {
    const blocks = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) =>
      JSON.parse(s.textContent || '{}'),
    )
    return blocks.find((b) => String(b['@type']).includes('ExerciseGym'))
  })
  expect(gym).toBeTruthy()
  expect(gym.telephone).toBe('+919390987869')
  expect(gym.openingHoursSpecification[0].opens).toBe('06:00')
  expect(gym.openingHoursSpecification[0].closes).toBe('23:00')

  const contact = page.locator('#contact')
  await contact.scrollIntoViewIfNeeded()
  await expect(contact).toContainText(gym.address.postalCode)
  await expect(contact).toContainText(/Hilltop Road/i)
  await expect(contact).toContainText(/Holiday/i)
})

test('map loads only when asked', async ({ page }) => {
  await expect(page.locator('.contact__map iframe')).toHaveCount(0)
  const btn = page.getByRole('button', { name: /show map/i })
  await btn.scrollIntoViewIfNeeded()
  await btn.click()
  await expect(page.locator('.contact__map iframe')).toHaveCount(1)
})

test('all local images load and carry alt text', async ({ page }) => {
  await scrollThrough(page)
  const problems = await page.evaluate(() =>
    [...document.images]
      .filter((i) => i.src.startsWith(location.origin))
      .filter((i) => (i.complete && i.naturalWidth === 0) || i.alt === null)
      .map((i) => i.src),
  )
  expect(problems).toEqual([])

  // Decorative images may have alt="", content images must describe themselves.
  const missing = await page.evaluate(() =>
    [...document.querySelectorAll('.grid__item img, .why__img img, .service__img img')].filter(
      (i) => !(i as HTMLImageElement).alt.trim(),
    ).length,
  )
  expect(missing).toBe(0)
})

// Guards the subpath deploy: root-absolute asset URLs 404 when GitHub Pages
// serves the repo from a project path instead of the domain root.
test('asset URLs are relative, not root-absolute', async ({ page }) => {
  const absolute = await page.evaluate(() =>
    [...document.querySelectorAll('img[src], script[src], link[href]')]
      .map((el) => el.getAttribute('src') || el.getAttribute('href') || '')
      .filter((u) => u.startsWith('/')),
  )
  expect(absolute).toEqual([])
})

test('primary tap targets are big enough', async ({ page }) => {
  await scrollThrough(page)
  const small = await page.evaluate(() =>
    [...document.querySelectorAll('.btn, .chip, .faq__q, .nav__burger')]
      .map((el) => {
        const r = el.getBoundingClientRect()
        return { text: (el.textContent || '').trim().slice(0, 30), h: Math.round(r.height) }
      })
      .filter((b) => b.h > 0 && b.h < 44),
  )
  expect(small).toEqual([])
})

test('mobile: menu opens, navigates and the WhatsApp button appears', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile only')
  await page.getByRole('button', { name: /open menu/i }).click()
  const link = page.locator('#mobile-menu a[href="#training"]')
  await expect(link).toBeVisible()
  await link.click()
  await expect(page.locator('#mobile-menu')).toHaveCount(0)
  await page.evaluate(() => window.scrollTo(0, 1400))
  await expect(page.locator('.fab')).toBeVisible()
  await expect(page.locator('.fab')).toHaveAttribute('href', WA)
})

test('desktop: full navigation and pricing CTA are visible', async ({ page, isMobile }) => {
  test.skip(!!isMobile, 'desktop only')
  await expect(page.locator('.nav__links a')).toHaveCount(6)
  await expect(page.locator('.nav__cta')).toBeVisible()
  await expect(page.locator('.nav__burger')).toBeHidden()
})
