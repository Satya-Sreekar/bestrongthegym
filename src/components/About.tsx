import { Check } from 'lucide-react'
import { Reveal, SectionHead } from '../ui'

const POINTS = [
  'Certified trainers on the floor, every session',
  'Diet charts and progress check-ins',
  'Comfortable, well-supervised space for women',
  'CCTV-monitored, parking available',
  'Separate zones for free weights, machines and cardio',
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <div>
          <SectionHead num="01" kicker="Why Be Strong" title={<>Built for the ones who <em>show up.</em></>} />
          <Reveal delay={0.1}>
            <p className="lead" style={{ marginTop: 0 }}>
              Be Strong is a neighbourhood gym run like a flagship. Commercial-grade strength and cardio equipment, a separate dumbbell room, and a floor that&rsquo;s cleaned through the day.
            </p>
            <p className="lead">
              What members talk about most isn&rsquo;t the machines, though. It&rsquo;s the coaching: trainers who explain the why behind every movement, check your form, build your diet chart and follow up on your progress.
            </p>
            <ul className="about__list">
              {POINTS.map((p) => (<li key={p}><Check aria-hidden="true" />{p}</li>))}
            </ul>
          </Reveal>
        </div>
        <Reveal className="about__pics" delay={0.15}>
          <span className="about__stamp">Hilltop Road · Red Hills</span>
          <div className="about__main">
            <img src="/img/about.webp" alt="A member training on a shoulder press machine on the Be Strong floor" loading="lazy" decoding="async" />
          </div>
          <div className="about__small">
            <img src="/img/brand-wall.webp" alt="The Be Strong The Gym logo mounted on a textured grey feature wall" loading="lazy" decoding="async" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
