import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { BUSINESS, waLink, type WaKey } from './config'
import { track, type TrackEvent } from './track'

export const EASE = [0.22, 0.8, 0.24, 1] as const

/**
 * Assets resolve against the deploy base so the build works at the domain root
 * and at a project subpath. Never hard-code a leading "/" on an asset URL.
 */
export const asset = (path: string) => import.meta.env.BASE_URL + path

export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section'
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  center,
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  center?: boolean
}) {
  return (
    <Reveal className={`head${center ? ' head--center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p className="head__lead">{lead}</p>}
    </Reveal>
  )
}

/** Photo from public/img/photo. Width and height prevent layout shift. */
export function Photo({
  name,
  alt,
  className,
  eager,
  width = 1600,
  height = 1200,
}: {
  name: string
  alt: string
  className?: string
  eager?: boolean
  width?: number
  height?: number
}) {
  return (
    <img
      src={asset(`img/photo/${name}.webp`)}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchPriority: 'high' as const } : {})}
    />
  )
}

/** The primary call to action. Every WhatsApp link on the site goes through this. */
export function WhatsAppCta({
  message,
  event,
  detail,
  children,
  className = 'btn btn--brand',
}: {
  message: WaKey
  event: TrackEvent
  detail?: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      className={className}
      href={waLink(message)}
      target="_blank"
      rel="noreferrer"
      onClick={() => track(event, detail)}
    >
      {children}
    </a>
  )
}

/**
 * Open or closed right now, computed in India Standard Time so the answer is
 * correct regardless of where the visitor is.
 */
export function openStatus() {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const day = now.getDay()
  const hour = now.getHours()
  if (day === 0) return { open: false, text: 'Closed Sunday · opens Monday 6 AM' }
  if (hour >= BUSINESS.hours.open && hour < BUSINESS.hours.close)
    return { open: true, text: `Open now · until ${BUSINESS.hours.closeLabel}` }
  if (hour < BUSINESS.hours.open) return { open: false, text: 'Opens today at 6 AM' }
  return { open: false, text: `Opens ${day === 6 ? 'Monday' : 'tomorrow'} at 6 AM` }
}

export const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="6" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
  </svg>
)
