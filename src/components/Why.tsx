import { WHY } from '../content'
import { Photo, Reveal, SectionHead } from '../ui'

export default function Why() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead
          eyebrow="Why Be Strong"
          title={
            <>
              No guesswork.
              <br />
              <span className="accent">Just consistent work.</span>
            </>
          }
          lead="A proper gym floor, equipment that is looked after, and trainers who are actually on it."
        />

        <ul className="why">
          {WHY.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.06} className="why__card">
              <div className="why__img">
                <Photo name={item.photo} alt={item.alt} />
              </div>
              <div className="why__body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
