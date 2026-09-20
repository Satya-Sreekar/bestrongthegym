import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, ArrowUpRight } from 'lucide-react'
import { FAQ as ITEMS, wa } from '../data'
import { EASE, SectionHead } from '../ui'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="wrap faq-grid">
        <div>
          <SectionHead num="08" kicker="FAQ" title={<>Good <em>questions.</em></>}
            lead={<>Still unsure about something? Message us on WhatsApp. We usually reply within the day.<br /><a className="link" style={{ marginTop: '1rem' }} href={wa('I have a question about membership.')}>Ask us on WhatsApp <ArrowUpRight aria-hidden="true" /></a></>} />
        </div>
        <div className="faq">
          {ITEMS.map((f, i) => {
            const isOpen = open === i
            return (
              <div className="faq__item" key={f.q}>
                <button className="faq__q" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                  {f.q}<Plus aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`faq-${i}`} className="faq__a" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }}>
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
