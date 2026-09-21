import { ArrowRight } from 'lucide-react'
import { GYM, NAV, TRIAL, wa } from '../data'
import { InstagramIcon, asset } from '../ui'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__cta">
          <h2>Your first session is free.<br />The rest is up to you.</h2>
          <a className="btn btn--yellow" href={TRIAL}>Book it on WhatsApp <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="foot__grid">
          <div>
            <img src={asset('logo.png')} alt="Be Strong The Gym" width="260" height="176" className="foot__logo" />
            <p>Muscle, cardio and nutrition under one roof in Red Hills, Hyderabad.</p>
          </div>
          <div>
            <h4>Find us</h4>
            <p>{GYM.address.map((l) => <span key={l} style={{ display: 'block' }}>{l}</span>)}</p>
            <p>Mon–Sat 6 AM–11 PM<br />Sunday closed</p>
          </div>
          <div>
            <h4>Talk to us</h4>
            <ul>
              <li><a href={GYM.tel}>{GYM.phone}</a></li>
              <li><a href={wa('I have a question.')}>WhatsApp</a></li>
              <li><a href={`mailto:${GYM.email}`}>{GYM.email}</a></li>
              <li><a href={GYM.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={14} /> @bestrongthegym</a></li>
            </ul>
          </div>
          <div>
            <h4>Sections</h4>
            <ul>{NAV.map(([l, h]) => <li key={h}><a href={h}>{l}</a></li>)}<li><a href="#faq">Questions</a></li></ul>
          </div>
        </div>
        <p className="foot__wordmark" aria-hidden="true">Be Strong</p>
        <div className="foot__bottom">
          <span>© {new Date().getFullYear()} Be Strong The Gym</span>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
