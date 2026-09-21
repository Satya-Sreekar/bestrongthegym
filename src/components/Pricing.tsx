import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { PLANS, TERMS, wa, type Term } from '../data'
import { EASE, Heading, Reveal } from '../ui'

const inr = (n: number) => '₹' + n.toLocaleString('en-IN')

export default function Pricing() {
  const [term, setTerm] = useState<Term>('m')
  const t = TERMS.find((x) => x.key === term)!
  return (
    <section className="section" id="membership">
      <div className="wrap">
        <Heading eyebrow="Membership" title="Pay for the gym, not the brand." text="Straight prices. Pay upfront for longer and the monthly cost falls fast." />
        <Reveal>
          <div className="chips chips--select" role="group" aria-label="Membership length">
            {TERMS.map((x) => <button key={x.key} className="chip chip--btn" aria-pressed={term === x.key} onClick={() => setTerm(x.key)}>{x.label}</button>)}
          </div>
        </Reveal>
        <div className="plans">
          {PLANS.map((p, i) => {
            const price = p.prices ? p.prices[term] : null
            const perDay = price ? Math.round(price / (t.months * 30)) : null
            return (
              <Reveal key={p.name} delay={i * 0.08} className={`plan${p.popular ? ' plan--pop' : ''}`}>
                {p.popular && <span className="sticker sticker--yellow plan__badge">Most members pick this</span>}
                <p className="plan__note">{p.note}</p>
                <h3>{p.name}</h3>
                <div className="plan__price" aria-live="polite">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div key={term} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22, ease: EASE }}>
                      {!p.prices ? (
                        <><strong>{p.range}</strong><span>per month, depending on the programme</span></>
                      ) : price == null ? (
                        <><strong className="plan__ask">Ask us</strong><span>{t.label} pricing on request</span></>
                      ) : (
                        <><strong>{inr(price)}</strong><span>for {t.label} · about {inr(perDay!)} a day</span></>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <ul>{p.includes.map((f) => <li key={f}><Check aria-hidden="true" />{f}</li>)}</ul>
                <a className={`btn ${p.popular ? 'btn--ink' : 'btn--ghost'}`} href={wa(p.prices ? `I want to join the ${p.name} plan for ${t.label}. What is the next step?` : 'I want to know more about personal training.')}>
                  {p.prices ? 'Join on WhatsApp' : 'Ask about coaching'} <ArrowUpRight aria-hidden="true" />
                </a>
              </Reveal>
            )
          })}
        </div>
        <p className="fineprint">Prices in INR as of September 2026. Pay at the front desk when you join.</p>
      </div>
    </section>
  )
}
