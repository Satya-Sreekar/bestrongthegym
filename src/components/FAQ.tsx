import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQ as ITEMS } from '../content'
import { EASE, SectionHead, WhatsAppCta } from '../ui'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="wrap faq__grid">
        <div>
          <SectionHead
            eyebrow="Questions"
            title="Before you come in."
            lead="Anything else, just ask. We usually reply the same day."
          />
          <WhatsAppCta message="general" event="whatsapp_general_click" detail="faq" className="btn btn--outline">
            Ask us on WhatsApp
          </WhatsAppCta>
        </div>

        <ul className="faq">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.q} className="faq__item">
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {item.q}
                  <Plus aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      className="faq__a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
