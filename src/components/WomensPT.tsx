import { Check } from 'lucide-react'
import { WOMENS_PT } from '../content'
import { Reveal, WhatsAppCta, WhatsAppIcon, asset } from '../ui'

export default function WomensPT() {
  return (
    <section className="section wpt" id="personal-training">
      <div className="wrap wpt__grid">
        <Reveal className="wpt__copy">
          <p className="eyebrow">Personal training</p>
          <h2>
            Your goals. Your plan.
            <br />
            <span className="accent">Your stronger self.</span>
          </h2>
          <p className="wpt__lead">
            Personal training gives you dedicated attention, a structured programme and
            accountability built around your goals. Plenty of women train at Be Strong, and
            one-to-one coaching is the fastest way to get confident on the floor.
          </p>

          <ul className="wpt__points">
            {WOMENS_PT.points.map((point) => (
              <li key={point}>
                <Check aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <WhatsAppCta
            message="womensPersonalTraining"
            event="whatsapp_womens_personal_training_click"
            className="btn btn--brand btn--lg"
          >
            <WhatsAppIcon /> Enquire about personal training
          </WhatsAppCta>
        </Reveal>

        <Reveal delay={0.12} className="wpt__photos">
          {WOMENS_PT.photos.map((photo, i) => (
            <figure key={photo.src} className={`wpt__photo wpt__photo--${i + 1}`}>
              <img
                src={asset(`img/${photo.src}.jpg`)}
                alt={photo.alt}
                width={360}
                height={640}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
