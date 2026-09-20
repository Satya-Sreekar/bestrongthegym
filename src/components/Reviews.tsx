import { ArrowRight, ArrowUpRight, Star } from 'lucide-react'
import { GYM, REVIEWS } from '../data'
import { Reveal, SectionHead } from '../ui'

const Stars = () => (
  <span className="rev-stars" role="img" aria-label="Rated 5 out of 5">{Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" />)}</span>
)

export default function Reviews() {
  return (
    <section className="section section--alt" id="reviews">
      <div className="wrap">
        <SectionHead num="07" kicker="Google reviews" title={<>Don&rsquo;t take <em>our word</em> for it.</>} />
        <Reveal className="rev-head">
          <div className="rev-score">
            <strong>{GYM.rating}</strong>
            <div><Stars /><span>out of 5 from {GYM.googleReviews} Google reviews</span></div>
          </div>
          <a className="link" href={GYM.reviewsUrl} target="_blank" rel="noreferrer">Read all reviews on Google <ArrowUpRight aria-hidden="true" /></a>
        </Reveal>
        <ul className="rail">
          {REVIEWS.map((r, i) => (
            <li key={r.name}>
              <Reveal delay={i * 0.05} className="rev">
                <Stars />
                <p>&ldquo;{r.text}&rdquo;</p>
                <footer><b>{r.name}</b><span>Google · {r.year}</span></footer>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="rail-hint"><ArrowRight aria-hidden="true" /> Swipe for more reviews</p>
      </div>
    </section>
  )
}
