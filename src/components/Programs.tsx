import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { PROGRAMS, wa } from '../data'
import { EASE, SectionHead } from '../ui'

export default function Programs() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="programs">
      <div className="wrap">
        <SectionHead num="03" kicker="Programs" title={<>Train with <em>a purpose.</em></>}
          lead="Every program is coached on the floor and backed by a diet chart. Pick a starting point; your trainer adjusts it as you progress." />
        <div className="prog">
          {PROGRAMS.map((p, i) => {
            const isOpen = open === i
            const id = `prog-${i}`
            return (
              <div className="prog__row" key={p.name}>
                <button className="prog__btn" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="prog__num">0{i + 1}</span>
                  <span className="prog__name">{p.name}</span>
                  <span className="prog__chev" aria-hidden="true"><ChevronDown /></span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={id} className="prog__panel" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: EASE }}>
                      <div className="prog__in">
                        <p>{p.desc}</p>
                        <div className="prog__tags">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                        <a className="link" href={wa(`I'd like to know more about ${p.name}.`)}>Ask on WhatsApp <ArrowUpRight aria-hidden="true" /></a>
                        <div className="prog__img"><img src={`/img/${p.img}.${p.img === 'gs-7' ? 'png' : 'jpg'}`} alt="" loading="lazy" decoding="async" /></div>
                      </div>
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
