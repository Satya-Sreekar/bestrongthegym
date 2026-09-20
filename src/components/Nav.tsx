import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X, Phone, Clock } from 'lucide-react'
import { GYM, wa } from '../data'
import { EASE, InstagramIcon } from '../ui'

const LINKS: [string, string][] = [
  ['About', '#about'], ['The floor', '#floor'], ['Programs', '#programs'], ['Coaches', '#coaches'],
  ['Plans', '#plans'], ['Reviews', '#reviews'], ['Visit', '#visit'],
]
const TRIAL = wa("I'd like to book a free trial session. When can I come in?")

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (v) => setSolid(v > 40))

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <>
      <header className={`nav${solid || open ? ' is-solid' : ''}`}>
        <div className="wrap nav__in">
          <a href="#top" className="nav__logo" aria-label="Be Strong The Gym, back to top">
            <img src="/logo.png" alt="" width="260" height="176" />
          </a>
          <nav className="nav__links" aria-label="Primary">
            {LINKS.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="btn btn--sm nav__cta" href={TRIAL}>Book a free trial</a>
          <button className="nav__burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div id="menu" className="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
            <nav className="menu__links" aria-label="Mobile">
              {LINKS.map(([label, href], i) => (
                <motion.a key={href} href={href} onClick={() => setOpen(false)}
                  initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.5, ease: EASE }}>
                  <span className="menu__num">0{i + 1}</span>{label}
                </motion.a>
              ))}
            </nav>
            <motion.div className="menu__foot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <div className="menu__row">
                <a href={GYM.tel}><Phone aria-hidden="true" />{GYM.phone}</a>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem' }}>
                  <Clock aria-hidden="true" style={{ width: 16, height: 16, color: 'var(--gold)' }} />Mon–Sat · 6 AM–11 PM
                </span>
                <a href={GYM.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={16} />@bestrongthegym</a>
              </div>
              <a className="btn btn--block" href={TRIAL} onClick={() => setOpen(false)}>Book a free trial</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
