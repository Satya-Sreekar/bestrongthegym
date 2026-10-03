import { useState } from 'react'
import { MapPin, Navigation, Phone } from 'lucide-react'
import { BUSINESS, LINKS } from '../config'
import { track } from '../track'
import { Photo, Reveal, SectionHead, WhatsAppCta, WhatsAppIcon, openStatus } from '../ui'

export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const status = openStatus()
  const { address, hours } = BUSINESS

  return (
    <section className="section section--raised" id="contact">
      <div className="wrap">
        <SectionHead
          eyebrow="Visit"
          title="Ready to get stronger?"
          lead="Walk in during opening hours, or message first and we will tell you a good time to come."
        />

        <div className="contact">
          <Reveal className="contact__card">
            <p className={`status${status.open ? ' is-open' : ''}`}>
              <span className="dot" aria-hidden="true" />
              {status.text}
            </p>

            <address>
              <strong>{BUSINESS.name}</strong>
              <span>{address.line1}</span>
              <span>{address.line2}</span>
              <span>
                {address.city} – {address.postcode}
              </span>
            </address>

            <dl className="hours">
              <div>
                <dt>{hours.daysLabel}</dt>
                <dd>
                  {hours.openLabel} – {hours.closeLabel}
                </dd>
              </div>
              <div>
                <dt>{hours.closedDayLabel}</dt>
                <dd>Holiday</dd>
              </div>
            </dl>

            <p className="contact__phone">
              <a href={BUSINESS.phoneHref} onClick={() => track('phone_click', 'contact')}>
                {BUSINESS.phoneDisplay}
              </a>
            </p>

            <div className="contact__cta">
              <WhatsAppCta message="visit" event="whatsapp_visit_click" className="btn btn--brand">
                <WhatsAppIcon /> WhatsApp us
              </WhatsAppCta>
              <a className="btn btn--outline" href={BUSINESS.phoneHref} onClick={() => track('phone_click', 'contact_button')}>
                <Phone aria-hidden="true" /> Call now
              </a>
              <a
                className="btn btn--outline"
                href={LINKS.googleDirections}
                target="_blank"
                rel="noreferrer"
                onClick={() => track('directions_click', 'contact')}
              >
                <Navigation aria-hidden="true" /> Get directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="contact__map">
            {mapLoaded ? (
              <iframe
                title={`Map showing ${BUSINESS.name} on Hilltop Road, Red Hills`}
                src={LINKS.googleMapsEmbed}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <>
                <Photo name="signboard" alt="The Be Strong The Gym signboard on Hilltop Road" width={1600} height={1067} />
                <div className="contact__map-cover">
                  <button className="btn btn--brand" onClick={() => setMapLoaded(true)}>
                    <MapPin aria-hidden="true" /> Show map
                  </button>
                  <p>The map loads from Google when you open it.</p>
                </div>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
