import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQ as ITEMS, wa } from '../data'
import { EASE, Heading } from '../ui'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section section--white" id="faq">
      <div className="wrap faq-grid">
        <Heading eyebrow="Questions" title="Before you ask." text={<>Anything else? <a className="link" href={wa('I have a question.')}>Message us on WhatsApp</a>. We reply the same day.</>} />
        <div className="faq">
          {ITEMS.map((f, i) => {
            const isOpen = open === i
            return (
              <div className="faq__item" key={f.q}>
                <button className="faq__q" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>{f.q}<Plus aria-hidden="true" /></button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`faq-${i}`} className="faq__a" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}>
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
