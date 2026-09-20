import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Phone, MessageCircle, Navigation } from 'lucide-react'
import { GYM, wa } from '../data'

export default function MobileBar() {
  const [show, setShow] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 420))
  return (
    <AnimatePresence>
      {show && (
        <motion.nav className="mbar" aria-label="Quick actions" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}>
          <a href={GYM.tel}><Phone aria-hidden="true" />Call</a>
          <a className="is-primary" href={wa("I'd like to book a free trial session. When can I come in?")}><MessageCircle aria-hidden="true" />WhatsApp</a>
          <a href={GYM.directions} target="_blank" rel="noreferrer"><Navigation aria-hidden="true" />Directions</a>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
