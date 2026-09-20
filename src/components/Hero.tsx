import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Phone, Star } from 'lucide-react'
import { GYM, wa } from '../data'
import { EASE } from '../ui'

const LINES = ['Get', 'Stronger', 'Every day.']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.8, ease: EASE },
  })

  return (
    <section ref={ref} className="hero" id="top" aria-label="Introduction">
      <motion.div className="hero__bg" style={reduce ? undefined : { y }}>
        <motion.img
          src="/img/hero.webp"
          alt="The Be Strong training floor: plate-loaded machines, a row of treadmills and the logo on the far wall"
          initial={reduce ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="wrap hero__in">
        <motion.p className="kicker" {...fade(0.1)}>Red Hills · Lakdikapul · Hyderabad</motion.p>
        <h1 className="hero__h1">
          {LINES.map((line, i) => (
            <span className="hero__line" key={line}>
              <motion.span initial={reduce ? false : { y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.2 + i * 0.12, duration: 0.95, ease: EASE }}>
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p className="hero__sub" {...fade(0.65)}>
          Commercial-grade iron, coaches who fix your form on every rep, and a floor that&rsquo;s cleaned all day. No gimmicks. Just the work, done right.
        </motion.p>
        <motion.div className="hero__cta" {...fade(0.8)}>
          <a className="btn" href={wa("I'd like to book a free trial session. When can I come in?")}>Book a free trial <ArrowUpRight aria-hidden="true" /></a>
          <a className="btn btn--ghost" href={GYM.tel}><Phone aria-hidden="true" /> Call the gym</a>
        </motion.div>
        <motion.div className="hero__meta" {...fade(0.95)}>
          <a className="chip" href={GYM.reviewsUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Star aria-hidden="true" fill="currentColor" /> {GYM.rating} · {GYM.googleReviews} Google reviews
          </a>
          <span>Mon – Sat · 6 AM – 11 PM · Sunday closed</span>
        </motion.div>
      </div>
      <div className="hero__scroll" aria-hidden="true">Scroll<span /></div>
    </section>
  )
}
