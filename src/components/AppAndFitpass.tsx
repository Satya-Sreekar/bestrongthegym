import { Smartphone, Zap } from 'lucide-react'
import { LINKS } from '../config'
import { track } from '../track'
import { Reveal, WhatsAppCta } from '../ui'

/**
 * The store links and the FITPASS link are null until the gym supplies them
 * (see src/config.ts). Rather than link somewhere wrong, each card falls back
 * to a WhatsApp enquiry.
 */
export default function AppAndFitpass() {
  const hasStores = Boolean(LINKS.appStore || LINKS.googlePlay)

  return (
    <section className="section section--raised" aria-label="Member app and FITPASS">
      <div className="wrap members-band">
        <Reveal className="band band--app">
          <Smartphone className="band__icon" aria-hidden="true" />
          <h2>Your gym, in your pocket.</h2>
          <p>
            Members use the Be Strong app to keep track of their membership. Ask at the front desk
            or message us and we will get you set up.
          </p>

          {hasStores ? (
            <div className="band__links">
              {LINKS.appStore && (
                <a
                  className="btn btn--outline"
                  href={LINKS.appStore}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => track('app_download_click', 'app_store')}
                >
                  App Store
                </a>
              )}
              {LINKS.googlePlay && (
                <a
                  className="btn btn--outline"
                  href={LINKS.googlePlay}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => track('app_download_click', 'google_play')}
                >
                  Google Play
                </a>
              )}
            </div>
          ) : (
            <WhatsAppCta message="app" event="whatsapp_app_click" className="btn btn--outline">
              Ask about the member app
            </WhatsAppCta>
          )}
        </Reveal>

        <Reveal delay={0.08} className="band band--fitpass">
          <Zap className="band__icon" aria-hidden="true" />
          <h2>Already on FITPASS?</h2>
          <p>
            Be Strong The Gym is available through FITPASS, subject to current FITPASS terms. Check
            your plan before you come in.
          </p>

          {LINKS.fitpass ? (
            <a
              className="btn btn--outline"
              href={LINKS.fitpass}
              target="_blank"
              rel="noreferrer"
              onClick={() => track('whatsapp_fitpass_click', 'fitpass_link')}
            >
              Check FITPASS access
            </a>
          ) : (
            <WhatsAppCta message="fitpass" event="whatsapp_fitpass_click" className="btn btn--outline">
              Check FITPASS access
            </WhatsAppCta>
          )}
        </Reveal>
      </div>
    </section>
  )
}
