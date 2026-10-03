import { BUSINESS, LINKS } from '../config'
import { NAV } from '../content'
import { track } from '../track'
import { InstagramIcon, WhatsAppCta, WhatsAppIcon, asset } from '../ui'

export default function Footer() {
  const { address, hours } = BUSINESS

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cta">
          <h2>
            Stronger every day.
            <br />
            <span className="accent">Start this week.</span>
          </h2>
          <WhatsAppCta message="membership" event="whatsapp_membership_click" detail="footer" className="btn btn--brand btn--lg">
            <WhatsAppIcon /> Get membership pricing
          </WhatsAppCta>
        </div>

        <div className="footer__grid">
          <div>
            <img src={asset('logo.png')} alt={BUSINESS.name} width="260" height="176" className="footer__logo" />
            <p>{BUSINESS.tagline}</p>
            <p className="footer__muted">A full gym in Red Hills, Lakdikapul, Hyderabad.</p>
          </div>

          <div>
            <h3>Visit</h3>
            <address>
              <span>{address.line1}</span>
              <span>{address.line2}</span>
              <span>
                {address.city} – {address.postcode}
              </span>
            </address>
            <p className="footer__muted">
              {hours.daysLabel}
              <br />
              {hours.openLabel} – {hours.closeLabel}
              <br />
              {hours.closedNote}
            </p>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={BUSINESS.phoneHref} onClick={() => track('phone_click', 'footer')}>
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <WhatsAppCta message="general" event="whatsapp_general_click" detail="footer" className="footer__link">
                  WhatsApp
                </WhatsAppCta>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              </li>
              <li>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => track('instagram_click', 'footer')}
                >
                  <InstagramIcon size={14} /> @bestrongthegym
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Sections</h3>
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="#membership">Membership</a>
              </li>
              <li>
                <a href="#faq">Questions</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {BUSINESS.name}
          </span>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
