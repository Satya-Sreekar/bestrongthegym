import { ArrowUpRight } from 'lucide-react'
import { TRAINERS, wa } from '../data'
import { Reveal, SectionHead } from '../ui'

export default function Trainers() {
  return (
    <section className="section" id="coaches">
      <div className="wrap">
        <SectionHead num="04" kicker="Coaches" title={<>The people in <em>your corner.</em></>}
          lead="A small coaching team means real attention: your coach builds your programme, corrects your form and follows up on your diet." />
        <div className="coach-grid">
          {TRAINERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="coach">
              <span className="coach__initial" aria-hidden="true">{t.initial}</span>
              <p className="coach__role">{t.role}</p>
              <h3>{t.name}</h3>
              <p>{t.bio}</p>
              <div className="coach__tags">{t.tags.map((x) => <span className="tag" key={x}>{x}</span>)}</div>
              <a className="btn btn--ghost btn--sm" href={wa(`I'd like to train with ${t.short}. When are they available?`)}>Train with {t.short} <ArrowUpRight aria-hidden="true" /></a>
            </Reveal>
          ))}
        </div>
        <Reveal className="pull">
          <p>&ldquo;If you get the chance to train under Sohail bhai, you&rsquo;re in the best hands.&rdquo;</p>
          <cite>Syed P. · Google review</cite>
        </Reveal>
      </div>
    </section>
  )
}
