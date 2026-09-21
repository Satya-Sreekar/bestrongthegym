import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { GYM } from './data'

export const EASE = [0.22, 0.8, 0.24, 1] as const

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Heading({ eyebrow, title, text, light }: { eyebrow: string; title: ReactNode; text?: ReactNode; light?: boolean }) {
  return (
    <Reveal className={`heading${light ? ' heading--light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="heading__text">{text}</p>}
    </Reveal>
  )
}

// ponytail: open/closed computed on render from IST; no live ticking
export function openStatus() {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const day = now.getDay()
  const h = now.getHours()
  if (day === 0) return { open: false, text: 'Closed Sunday · opens Mon 6 AM' }
  if (h >= GYM.hours.open && h < GYM.hours.close) return { open: true, text: 'Open now · till 11 PM' }
  if (h < GYM.hours.open) return { open: false, text: 'Opens today at 6 AM' }
  return { open: false, text: `Opens ${day === 6 ? 'Monday' : 'tomorrow'} at 6 AM` }
}

// Assets resolve against the deploy base, so the site works at the domain root
// and at a project subpath (e.g. /bestrongthegym/) without changing code.
export const asset = (path: string) => import.meta.env.BASE_URL + path

export const Photo = ({ name, alt = '', className, eager }: { name: string; alt?: string; className?: string; eager?: boolean }) => (
  <img src={asset(`img/photo/${name}.webp`)} alt={alt} className={className} loading={eager ? 'eager' : 'lazy'} decoding="async" />
)

export const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="6" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
