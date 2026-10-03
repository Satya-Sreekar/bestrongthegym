/* ───────────────────────────────────────────────────────────────────────────
   BE STRONG THE GYM — BUSINESS CONFIGURATION

   This is the only file the gym needs to edit for day-to-day changes.
   Phone, address, hours, offers and external links all live here.
   Nothing below is duplicated anywhere else in the codebase.
   ─────────────────────────────────────────────────────────────────────────── */

export const BUSINESS = {
  name: 'Be Strong The Gym',
  tagline: 'Muscle · Cardio · Nutrition',

  phoneDisplay: '+91 93909 87869',
  phoneHref: 'tel:+919390987869',
  /** Digits only, country code first. Used to build every WhatsApp link. */
  whatsappNumber: '919390987869',
  email: 'bestrongthegym@gmail.com',

  address: {
    line1: '11-5-291, Hilltop Road',
    line2: 'Red Hills, Lakdikapul',
    city: 'Hyderabad',
    region: 'Telangana',
    // NOTE: supplied by the gym as 500057. The Google Business Profile for this
    // listing currently shows 500004. Keep this matching the Google profile —
    // a mismatch between the site and the profile weakens local search ranking.
    postcode: '500057',
    country: 'IN',
  },

  /** Monday is 1, Sunday is 0. `null` means closed that day. */
  hours: {
    open: 6, // 6:00 AM
    close: 23, // 11:00 PM
    openLabel: '6:00 AM',
    closeLabel: '11:00 PM',
    daysLabel: 'Monday to Saturday',
    closedDayLabel: 'Sunday',
    closedNote: 'Sunday is a holiday',
  },
} as const

export const LINKS = {
  instagram: 'https://www.instagram.com/bestrongthegym/',
  googleReviews: 'https://maps.google.com/?cid=10019910934855626721',
  googleMapsEmbed:
    'https://www.google.com/maps?q=BeStrongTheGym,+Hilltop+Road,+Red+Hills,+Lakdikapul,+Hyderabad&output=embed',
  googleDirections:
    'https://www.google.com/maps/dir/?api=1&destination=BeStrongTheGym%2C%20Hilltop%20Road%2C%20Red%20Hills%2C%20Lakdikapul%2C%20Hyderabad',

  /* ── TO BE SUPPLIED BY THE GYM ───────────────────────────────────────────
     Leave as null and the matching section stays hidden rather than linking
     somewhere wrong. Paste the real URL to switch each one on.              */

  /** FITPASS listing page for Be Strong The Gym. */
  fitpass: null as string | null,
  /** Official Be Strong member app (FitGym Software) on the Apple App Store. */
  appStore: null as string | null,
  /** Official Be Strong member app (FitGym Software) on Google Play. */
  googlePlay: null as string | null,
} as const

/** Public rating, as published on the gym's Google Business Profile. */
export const RATING = {
  score: '4.9',
  count: 176,
  source: 'Google',
} as const

/* ── COUPLE OFFER ──────────────────────────────────────────────────────────
   The gym runs couple membership offers. The discount changes, so the site
   never states a number. Edit the two lines below to change the wording.   */
export const COUPLE_OFFER = {
  enabled: true,
  heading: 'Train together. Get stronger together.',
  body: 'We run couple membership offers on weight training and cardio packages. Message us for the current deal and what it covers.',
  note: 'Current offer details are shared on WhatsApp.',
} as const

/* ── MEMBERSHIP ────────────────────────────────────────────────────────────
   Prices are deliberately not published. They change, and an out-of-date
   number on the website costs trust at the front desk. Every plan routes to
   WhatsApp instead, which is also the gym's fastest way to answer.          */
export const MEMBERSHIP_SHOWS_PRICES = false

/** Pre-filled WhatsApp messages, one per call to action. */
export const WA_MESSAGES = {
  general: 'Hi Be Strong The Gym, I’d like to know more about the gym and membership plans.',
  membership:
    'Hi Be Strong The Gym, I’m interested in joining. Please share your current membership plans and pricing.',
  personalTraining:
    'Hi Be Strong The Gym, I’m interested in personal training. Please share the available plans and timings.',
  womensPersonalTraining:
    'Hi Be Strong The Gym, I’m interested in personal training and would like to know more about the available options.',
  coupleOffer: 'Hi Be Strong The Gym, I’d like to know about your couple membership offer.',
  visit: 'Hi Be Strong The Gym, I’d like to visit the gym. Please let me know the best time to come.',
  weightTraining: 'Hi Be Strong The Gym, I’d like to know more about weight training at the gym.',
  cardio: 'Hi Be Strong The Gym, I’d like to know more about the cardio options at the gym.',
  bodybuilding: 'Hi Be Strong The Gym, I’d like to know more about bodybuilding training at the gym.',
  fitnessTraining: 'Hi Be Strong The Gym, I’d like to know more about fitness training at the gym.',
  nutrition: 'Hi Be Strong The Gym, I’d like to know more about nutritional guidance at the gym.',
  fitpass: 'Hi Be Strong The Gym, I’d like to know about using FITPASS at the gym.',
  app: 'Hi Be Strong The Gym, I’d like to know about the Be Strong member app.',
} as const

export type WaKey = keyof typeof WA_MESSAGES

/** Builds a wa.me link with the message pre-filled. */
export const waLink = (key: WaKey) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(WA_MESSAGES[key])}`

export const SITE_URL = 'https://bestrongthegym.com'
