import { ArrowUpRight, Star } from 'lucide-react'
import { GYM, RESULT, TOPICS, VOICES } from '../data'
import { Heading, Reveal } from '../ui'

export default function Voices() {
  return (
    <section className="section section--white" id="members">
      <div className="wrap">
        <Heading eyebrow="Members" title={<>{GYM.reviews} reviews. {GYM.rating} stars. The same words keep coming up.</>} />
        <Reveal className="topics" aria-label="Most mentioned in reviews">
          {TOPICS.map(([t, n]) => <span className="chip" key={t}>{t} <b>{n}</b></span>)}
          <a className="link" href={GYM.reviewsUrl} target="_blank" rel="noreferrer">Read them on Google <ArrowUpRight aria-hidden="true" /></a>
        </Reveal>
        <div className="voices">
          <Reveal className="voice voice--result">
            <p className="voice__label">A member result</p>
            <p className="voice__nums"><span>{RESULT.from}</span><small>kg</small> → <span>{RESULT.to}</span><small>kg</small></p>
            <p className="voice__sub">in {RESULT.months} months, coached by Sohail</p>
            <p>“{RESULT.quote}”</p>
            <footer>{RESULT.name}</footer>
          </Reveal>
          {VOICES.map((v, i) => (
            <Reveal key={v.name} delay={(i % 3) * 0.06} className="voice">
              <span className="stars" aria-label="Five stars">{[0, 1, 2, 3, 4].map((k) => <Star key={k} aria-hidden="true" />)}</span>
              <p>“{v.text}”</p>
              <footer>{v.name} · Google</footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
