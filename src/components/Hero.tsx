import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { GYM, TRIAL } from '../data'
import { EASE, Photo, openStatus } from '../ui'

export default function Hero() {
  const reduce = useReducedMotion()
  const s = openStatus()
  const up = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: EASE },
  })
  const card = (delay: number, rot: number) => ({
    initial: reduce ? false : { opacity: 0, y: 40, rotate: 0 },
    animate: { opacity: 1, y: 0, rotate: rot },
    transition: { delay, duration: 0.9, ease: EASE },
    whileHover: reduce ? undefined : { y: -6, rotate: 0, transition: { duration: 0.3 } },
  })

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <motion.p className={`live${s.open ? ' is-open' : ''}`} {...up(0.05)}><i aria-hidden="true" />{s.text}</motion.p>
          <motion.h1 {...up(0.15)}>
            Strong is a <span className="mark"><motion.i aria-hidden="true" initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 0.6, ease: EASE }} />habit.</span><br />
            We help you build it.
          </motion.h1>
          <motion.p className="hero__text" {...up(0.3)}>
            A serious, friendly, spotless gym in Red Hills. Coaches on the floor every shift, a proper strength room, and a diet chart that fits your kitchen.
          </motion.p>
          <motion.div className="hero__cta" {...up(0.4)}>
            <a className="btn btn--yellow" href={TRIAL}>Book a free trial <ArrowRight aria-hidden="true" /></a>
            <a className="btn btn--ghost" href="#membership">See membership</a>
          </motion.div>
          <motion.ul className="hero__facts" {...up(0.5)}>
            <li><a href={GYM.reviewsUrl} target="_blank" rel="noreferrer"><Star aria-hidden="true" /> {GYM.rating} from {GYM.reviews} Google reviews</a></li>
            <li>Mon–Sat · 6 AM–11 PM</li>
            <li>Hilltop Road, Lakdikapul</li>
          </motion.ul>
        </div>
        <div className="hero__stack" aria-hidden="true">
          <motion.div className="hero__card hero__card--a" {...card(0.35, -3)}>
            <Photo name="members-wall" eager />
            <span className="sticker sticker--yellow">176 five-star stories</span>
          </motion.div>
          <motion.div className="hero__card hero__card--b" {...card(0.5, 4)}>
            <Photo name="cardio-view" />
            <span className="sticker">Cardio deck</span>
          </motion.div>
          <motion.div className="hero__card hero__card--c" {...card(0.65, -6)}>
            <Photo name="bench-plates" />
            <span className="sticker">Strength floor</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
