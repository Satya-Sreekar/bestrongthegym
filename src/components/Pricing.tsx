import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import { PLANS, TERMS, wa, type TermKey } from '../data'
import { EASE, Reveal, SectionHead } from '../ui'

const inr = (n: number) => '₹' + n.toLocaleString('en-IN')

export default function Pricing() {
  const [term, setTerm] = useState<TermKey>('m')
  const t = TERMS.find((x) => x.key === term)!
  return (
    <section className="section section--alt" id="plans">
      <div className="wrap">
        <SectionHead num="05" kicker="Membership" title={<>Pick your <em>commitment.</em></>}
          lead="Straightforward pricing. Commit for longer and your monthly cost drops sharply." />
        <Reveal>
          <div className="seg" role="group" aria-label="Membership length">
            {TERMS.map((x) => (
              <button key={x.key} aria-pressed={term === x.key} onClick={() => setTerm(x.key)}>
                {term === x.key && <motion.span layoutId="seg-pill" className="seg__pill" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                <span>{x.label}{x.off && <small>{x.off}</small>}</span>
              </button>
            ))}
          </div>
        </Reveal>
        <div className="plans">
          {PLANS.map((p, i) => {
            const price = p.prices ? p.prices[term] : null
            const perMonth = price && t.months > 1 ? Math.round(price / t.months) : null
            const label = p.prices ? `${p.name} plan (${t.label.toLowerCase()})` : 'personal training'
            return (
              <Reveal key={p.name} delay={i * 0.08} className={`plan${p.popular ? ' plan--pop' : ''}`}>
                <p className="plan__tag">{p.tag}</p>
                <h3>{p.name}</h3>
                <p className="plan__desc">{p.desc}</p>
                <div className="plan__price" aria-live="polite">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div key={term} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: EASE }}>
                      {!p.prices ? (
                        <><span className="plan__amt">{p.range}</span><span className="plan__note">Depends on your goal and programme</span></>
                      ) : price == null ? (
                        <><span className="plan__amt plan__amt--sm">Ask for a quote</span><span className="plan__note">Message us for {t.label.toLowerCase()} pricing</span></>
                      ) : (
                        <>
                          <span className="plan__amt">{inr(price)}<small>{t.months === 1 ? '/ month' : `/ ${t.label}`}</small></span>
                          <span className="plan__note">{perMonth ? `≈ ${inr(perMonth)} a month, billed upfront` : 'Billed monthly'}</span>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <ul>{p.features.map((f) => <li key={f}><Check aria-hidden="true" />{f}</li>)}</ul>
                <a className={`btn${p.popular ? '' : ' btn--ghost'}`} href={wa(`I'm interested in the ${label}. Can you share details?`)}>
                  {p.prices ? `Join ${p.name}` : 'Ask on WhatsApp'} <ArrowUpRight aria-hidden="true" />
                </a>
              </Reveal>
            )
          })}
        </div>
        <p className="plans__foot">Prices in INR, confirmed by the gym in September 2026. Visit or message us to join.</p>
      </div>
    </section>
  )
}
