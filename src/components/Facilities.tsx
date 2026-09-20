import { ArrowRight } from 'lucide-react'
import { AMENITIES, FACILITIES } from '../data'
import { Reveal, SectionHead } from '../ui'

export default function Facilities() {
  return (
    <section className="section section--alt" id="floor">
      <div className="wrap">
        <SectionHead num="02" kicker="The floor" title={<>Every zone, <em>properly</em> equipped.</>}
          lead="Separate areas for free weights, machines and cardio mean you're never waiting on someone's superset." />
        <ul className="rail">
          {FACILITIES.map((f, i) => (
            <li key={f.img}>
              <Reveal delay={i * 0.06} className="fac">
                <span className="fac__num">0{i + 1}</span>
                <div className="fac__img"><img src={`/img/${f.img}.webp`} alt={f.name} loading="lazy" decoding="async" /></div>
                <div className="fac__body"><h3>{f.name}</h3><p>{f.desc}</p></div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="rail-hint"><ArrowRight aria-hidden="true" /> Swipe to see every zone</p>
        <Reveal className="amen">
          <span className="amen__label">Also on site</span>
          {AMENITIES.map((a) => <span className="tag" key={a}>{a}</span>)}
        </Reveal>
      </div>
    </section>
  )
}
