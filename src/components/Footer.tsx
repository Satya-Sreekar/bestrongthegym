import { ArrowUpRight } from 'lucide-react'
import { GYM, wa } from '../data'
import { InstagramIcon, Reveal } from '../ui'

const EXPLORE: [string, string][] = [
  ['About', '#about'], ['The floor', '#floor'], ['Programs', '#programs'], ['Coaches', '#coaches'],
  ['Plans', '#plans'], ['Reviews', '#reviews'], ['FAQ', '#faq'], ['Visit', '#visit'],
]

export default function Footer() {
  return (
    <footer>
      <section className="close">
        <Reveal className="wrap">
          <h2>Get stronger <em>every day.</em></h2>
          <a className="btn" href={wa("I'd like to book a visit to the gym.")}>Book a visit <ArrowUpRight aria-hidden="true" /></a>
        </Reveal>
      </section>
      <div className="foot">
        <div className="wrap">
          <div className="foot__grid">
            <div className="foot__brand">
              <img src="/logo.png" alt="Be Strong The Gym" width="260" height="176" />
              <p>Muscle · Cardio · Nutrition. A neighbourhood gym in Red Hills, Hyderabad, run like a flagship.</p>
            </div>
            <div>
              <h4>Visit</h4>
              <ul>{GYM.address.map((l) => <li key={l}>{l}</li>)}<li>Mon – Sat: 6 AM – 11 PM</li><li>Sunday: Closed</li></ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href={GYM.tel}>{GYM.phone}</a></li>
                <li><a href={wa('I have a question about membership.')}>WhatsApp</a></li>
                <li><a href={`mailto:${GYM.email}`}>{GYM.email}</a></li>
                <li><a href={GYM.instagram} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', gap: '.4rem', alignItems: 'center' }}><InstagramIcon size={14} /> @bestrongthegym</a></li>
              </ul>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>{EXPLORE.map(([l, h]) => <li key={h}><a href={h}>{l}</a></li>)}</ul>
            </div>
          </div>
          <div className="foot__bottom">
            <span>© {new Date().getFullYear()} Be Strong The Gym. All rights reserved.</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
