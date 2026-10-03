import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { waLink } from '../config'
import { track } from '../track'
import { EASE, WhatsAppIcon } from '../ui'

/** Appears once the hero is scrolled past, so it never covers the first screen. */
export default function WhatsAppFab() {
  const [show, setShow] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 500))

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          className="fab"
          href={waLink('general')}
          target="_blank"
          rel="noreferrer"
          aria-label="Message Be Strong The Gym on WhatsApp"
          onClick={() => track('whatsapp_general_click', 'floating_button')}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.28, ease: EASE }}
        >
          <WhatsAppIcon size={22} />
          <span>WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
