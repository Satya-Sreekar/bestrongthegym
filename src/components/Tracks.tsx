import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { TRACKS, wa } from '../data'
import { EASE, Heading, Photo, Reveal } from '../ui'

export default function Tracks() {
  const [key, setKey] = useState(TRACKS[0].key)
  const t = TRACKS.find((x) => x.key === key)!
  return (
    <section className="section" id="tracks">
      <div className="wrap">
        <Heading eyebrow="Tracks" title="Pick a goal. We build the rest." text="Every track is coached on the floor and comes with a diet chart. Switch whenever your goal changes." />
        <Reveal>
          <div className="tabs" role="tablist" aria-label="Training tracks">
            {TRACKS.map((x) => (
              <button key={x.key} role="tab" id={`tab-${x.key}`} aria-selected={key === x.key} aria-controls="track-panel" onClick={() => setKey(x.key)}>
                {key === x.key && <motion.span layoutId="tab-pill" className="tabs__pill" transition={{ type: 'spring', stiffness: 420, damping: 36 }} />}
                <span>{x.tab}</span>
              </button>
            ))}
          </div>
        </Reveal>
        <div className="track" id="track-panel" role="tabpanel" aria-labelledby={`tab-${t.key}`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={t.key} className="track__in" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: EASE }}>
              <div className="track__copy">
                <h3>{t.title}</h3>
                <ul>{t.points.map((p) => <li key={p}><Check aria-hidden="true" />{p}</li>)}</ul>
                <a className="btn btn--ink" href={wa(`I am interested in the "${t.tab}" track. Can you tell me more?`)}>Ask about this track <ArrowUpRight aria-hidden="true" /></a>
              </div>
              <div className="track__img"><Photo name={t.img} /></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
