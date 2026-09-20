import { Reveal, SectionHead } from '../ui'

export default function Transformation() {
  return (
    <section className="section" id="results">
      <div className="wrap">
        <SectionHead num="06" kicker="Member transformation" title={<>Results, and the room they&rsquo;re <em>built in.</em></>} />
        <div className="xf">
          <Reveal>
            <div className="xf__nums" aria-label="From 94 kilograms to 83.5 kilograms">
              <span className="xf__n">94<small>KG</small></span>
              <svg className="xf__arrow" viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" aria-hidden="true"><path d="M2 20h70M56 4l18 16-18 16" /></svg>
              <span className="xf__n xf__n--to">83.5<small>KG</small></span>
            </div>
            <div className="xf__facts">
              <div><b>10.5 kg</b><span>Lost</span></div>
              <div><b>2.5 mo</b><span>Duration</span></div>
              <div><b>Sohail</b><span>Coach</span></div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="xf__quote">
            <p>He not only trained me properly in the gym but also guided me with my diet, regularly checked my progress, and stayed connected through updates and progress pictures.</p>
            <cite>Sanjay S. · Google review, 2026</cite>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
