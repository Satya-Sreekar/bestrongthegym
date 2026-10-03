import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { BUSINESS } from '../config'
import { NAV } from '../content'
import { track } from '../track'
import { EASE, WhatsAppCta, WhatsAppIcon, asset } from '../ui'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (v) => setSolid(v > 24))

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className={`nav${solid || open ? ' is-solid' : ''}`}>
        <div className="wrap nav__in">
          <a href="#top" className="nav__logo" aria-label={`${BUSINESS.name}, back to top`}>
            <img src={asset('logo.png')} alt="" width="260" height="176" />
          </a>

          <nav className="nav__links" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <WhatsAppCta
            message="membership"
            event="whatsapp_membership_click"
            detail="nav"
            className="btn btn--brand btn--sm nav__cta"
          >
            Get pricing
          </WhatsAppCta>

          <button
            className="nav__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              className="sheet__scrim"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              id="mobile-menu"
              className="sheet"
              role="dialog"
              aria-label="Menu"
              aria-modal="true"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.38, ease: EASE }}
            >
              <span className="sheet__handle" aria-hidden="true" />
              <nav className="sheet__links" aria-label="Mobile">
                {NAV.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.04, duration: 0.35, ease: EASE }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <div className="sheet__foot">
                <WhatsAppCta
                  message="membership"
                  event="whatsapp_membership_click"
                  detail="mobile_menu"
                  className="btn btn--brand btn--block"
                >
                  <WhatsAppIcon /> Get membership pricing
                </WhatsAppCta>
                <a
                  className="btn btn--ghost btn--block"
                  href={BUSINESS.phoneHref}
                  onClick={() => track('phone_click', 'mobile_menu')}
                >
                  <Phone aria-hidden="true" /> {BUSINESS.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
