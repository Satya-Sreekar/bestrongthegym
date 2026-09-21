import { ArrowRight } from 'lucide-react'
import { STEPS, TRIAL } from '../data'
import { Heading, Reveal } from '../ui'

export default function FirstMonth() {
  return (
    <section className="section section--yellow" id="first-30">
      <div className="wrap">
        <Heading eyebrow="How it works" title="Your first 30 days." text="You do not need a plan before you walk in. That is the coach's job." />
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.day}>
              <Reveal delay={i * 0.1} className="step">
                <span className="step__day">{s.day}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal delay={0.3}><a className="btn btn--ink" href={TRIAL}>Start with a free trial <ArrowRight aria-hidden="true" /></a></Reveal>
      </div>
    </section>
  )
}
