import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export const EASE = [0.2, 0.7, 0.2, 1] as const

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHead({ num, kicker, title, lead }: { num: string; kicker: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <Reveal className="shead">
      <p className="kicker">
        <span className="kicker__num">{num}</span>
        {kicker}
      </p>
      <h2 className="title">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  )
}

export const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
