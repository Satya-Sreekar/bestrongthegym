import { ArrowUpRight } from 'lucide-react'
import { COACHES, wa } from '../data'
import { Heading, Photo, Reveal } from '../ui'

export default function Coaches() {
  return (
    <section className="section section--ink" id="coaches">
      <div className="wrap coaches">
        <div>
          <Heading light eyebrow="Coaches" title="Coached, not just supervised." text="Forty-six of the last 176 reviews talk about the trainers. That is the whole difference between this and a room full of machines." />
          <div className="coach-list">
            {COACHES.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1} className="coach">
                <div>
                  <p className="coach__role">{c.role}</p>
                  <h3>{c.name}</h3>
                  <p>{c.blurb}</p>
                  <div className="chips">{c.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
                </div>
                <a className="btn btn--ghost-light btn--sm" href={wa(`I would like to train with ${c.name.split(' ').pop()}. When is a good time?`)}>Train with {c.name.split(' ').pop()} <ArrowUpRight aria-hidden="true" /></a>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.15} className="coaches__img">
          <Photo name="women-coaching" alt="A coach guiding a member through a movement on the floor" />
          <blockquote>
            <p>“Every exercise has a purpose, every movement is explained in depth.”</p>
            <cite>Sana F., Google review</cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
