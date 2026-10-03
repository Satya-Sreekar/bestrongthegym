import { ABOUT } from '../content'
import { Photo, Reveal, SectionHead } from '../ui'

export default function About() {
  return (
    <section className="section about">
      <div className="wrap about__grid">
        <div>
          <SectionHead eyebrow="The gym" title="Train hard. Train smart." />
          <Reveal delay={0.08}>
            {ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="about__p">
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.14} className="about__photos">
          {ABOUT.photos.map((photo) => (
            <figure key={photo.src}>
              <Photo name={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
