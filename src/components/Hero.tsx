import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPin, Star } from 'lucide-react'
import { BUSINESS, LINKS, RATING } from '../config'
import { track } from '../track'
import { EASE, Photo, WhatsAppCta, WhatsAppIcon, openStatus } from '../ui'

export default function Hero() {
  const reduce = useReducedMotion()
  const status = openStatus()

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.75, ease: EASE },
  })

  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <Photo
          name="floor-e"
          alt=""
          eager
          className="hero__img"
        />
        <div className="hero__veil" />
      </div>

      <div className="wrap hero__in">
        <motion.p className="hero__kicker" {...rise(0.05)}>
          {BUSINESS.tagline}
        </motion.p>

        <motion.h1 {...rise(0.14)}>
          Get stronger.
          <br />
          <span className="accent">Live stronger.</span>
        </motion.h1>

        <motion.p className="hero__lead" {...rise(0.26)}>
          {BUSINESS.name} in Red Hills, Lakdikapul. Weight training, cardio, bodybuilding and
          one-to-one personal training, with trainers on the floor through the day.
        </motion.p>

        <motion.div className="hero__cta" {...rise(0.36)}>
          <WhatsAppCta message="membership" event="whatsapp_membership_click" detail="hero" className="btn btn--brand btn--lg">
            Get membership pricing <ArrowRight aria-hidden="true" />
          </WhatsAppCta>
          <WhatsAppCta message="general" event="whatsapp_general_click" detail="hero" className="btn btn--outline btn--lg">
            <WhatsAppIcon /> WhatsApp us
          </WhatsAppCta>
        </motion.div>

        <motion.ul className="hero__meta" {...rise(0.46)}>
          <li>
            <span className={`dot${status.open ? ' is-open' : ''}`} aria-hidden="true" />
            {status.text}
          </li>
          <li>
            {BUSINESS.hours.openLabel} – {BUSINESS.hours.closeLabel} · {BUSINESS.hours.daysLabel}
          </li>
          <li>
            <MapPin aria-hidden="true" /> Hilltop Road, Red Hills
          </li>
          <li>
            <a href={LINKS.googleReviews} target="_blank" rel="noreferrer" onClick={() => track('reviews_click', 'hero')}>
              <Star aria-hidden="true" /> {RATING.score} from {RATING.count} {RATING.source} reviews
            </a>
          </li>
        </motion.ul>
      </div>
    </section>
  )
}
