import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { GYM, NAV, TRIAL } from '../data'
import { EASE, InstagramIcon, asset } from '../ui'

export default function Nav() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <>
      <header className="nav">
        <div className="nav__pill">
          <a href="#top" className="nav__logo" aria-label="Be Strong The Gym, back to top"><img src={asset('logo.png')} alt="" width="260" height="176" /></a>
          <nav className="nav__links" aria-label="Primary">{NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</nav>
          <a className="btn btn--yellow btn--sm nav__cta" href={TRIAL}>Free trial</a>
          <button className="nav__burger" aria-expanded={open} aria-controls="sheet" onClick={() => setOpen((o) => !o)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <>
            <motion.button className="sheet__scrim" aria-label="Close menu" onClick={() => setOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.div id="sheet" className="sheet" role="dialog" aria-label="Menu" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: 0.4, ease: EASE }}>
              <span className="sheet__handle" aria-hidden="true" />
              <nav className="sheet__links" aria-label="Mobile">
                {NAV.map(([l, h], i) => (
                  <motion.a key={h} href={h} onClick={() => setOpen(false)} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + i * 0.04, duration: 0.4, ease: EASE }}>{l}</motion.a>
                ))}
              </nav>
              <div className="sheet__foot">
                <a className="btn btn--yellow btn--block" href={TRIAL} onClick={() => setOpen(false)}>Book a free trial</a>
                <div className="sheet__row">
                  <a href={GYM.tel}><Phone aria-hidden="true" />{GYM.phone}</a>
                  <a href={GYM.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={16} />@bestrongthegym</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
