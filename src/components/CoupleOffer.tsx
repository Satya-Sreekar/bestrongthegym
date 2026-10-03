import { COUPLE_OFFER } from '../config'
import { Photo, Reveal, WhatsAppCta, WhatsAppIcon } from '../ui'

export default function CoupleOffer() {
  if (!COUPLE_OFFER.enabled) return null

  return (
    <section className="couple" aria-labelledby="couple-heading">
      <div className="wrap couple__grid">
        <Reveal className="couple__copy">
          <p className="eyebrow eyebrow--dark">Couple membership</p>
          <h2 id="couple-heading">{COUPLE_OFFER.heading}</h2>
          <p>{COUPLE_OFFER.body}</p>
          <WhatsAppCta
            message="coupleOffer"
            event="whatsapp_couple_offer_click"
            className="btn btn--ink btn--lg"
          >
            <WhatsAppIcon /> Ask about couple offers
          </WhatsAppCta>
          <p className="couple__note">{COUPLE_OFFER.note}</p>
        </Reveal>

        <Reveal delay={0.1} className="couple__img">
          <Photo
            name="two-members"
            alt="Two members together in front of the Be Strong logo wall"
            width={1200}
            height={1600}
          />
        </Reveal>
      </div>
    </section>
  )
}
