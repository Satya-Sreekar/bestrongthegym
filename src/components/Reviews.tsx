import { ArrowUpRight, Star } from 'lucide-react'
import { LINKS, RATING } from '../config'
import { REVIEWS } from '../content'
import { track } from '../track'
import { Reveal, SectionHead } from '../ui'

const Stars = () => (
  <span className="stars" role="img" aria-label="Rated 5 out of 5">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} aria-hidden="true" />
    ))}
  </span>
)

export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="wrap">
        <SectionHead eyebrow="Reviews" title="What our members say." />

        <Reveal className="rating">
          <p className="rating__score">
            <strong>{RATING.score}</strong>
            <span>
              <Stars />
              <small>
                from {RATING.count} {RATING.source} reviews
              </small>
            </span>
          </p>
          <a
            className="btn btn--outline"
            href={LINKS.googleReviews}
            target="_blank"
            rel="noreferrer"
            onClick={() => track('reviews_click', 'reviews_section')}
          >
            See more reviews <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>

        <ul className="reviews">
          {REVIEWS.map((review, i) => (
            <Reveal as="li" key={review.name} delay={(i % 3) * 0.05} className="review">
              <Stars />
              <blockquote>{review.text}</blockquote>
              <figcaption>
                {review.name} <span>· {RATING.source}</span>
              </figcaption>
            </Reveal>
          ))}
        </ul>

        <p className="fineprint">
          Reviews are published on the gym’s {RATING.source} Business Profile. Longer reviews are
          shortened here; the wording is otherwise unchanged.
        </p>
      </div>
    </section>
  )
}
