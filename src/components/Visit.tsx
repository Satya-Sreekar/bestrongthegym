import { useState } from 'react'
import { MapPin, Navigation, Phone, MessageCircle } from 'lucide-react'
import { GYM, wa } from '../data'
import { Reveal, SectionHead } from '../ui'

// ponytail: open/closed computed once on render from IST; no live ticking
function status() {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const day = now.getDay()
  const h = now.getHours()
  if (day === 0) return { open: false, text: 'Closed today · opens Monday 6 AM' }
  if (h >= GYM.hours.open && h < GYM.hours.close) return { open: true, text: `Open now · closes ${GYM.hours.close - 12} PM` }
  if (h < GYM.hours.open) return { open: false, text: 'Closed · opens 6 AM today' }
  return { open: false, text: `Closed · opens 6 AM ${day === 6 ? 'Monday' : 'tomorrow'}` }
}

export default function Visit() {
  const [map, setMap] = useState(false)
  const s = status()
  return (
    <section className="section section--alt" id="visit">
      <div className="wrap">
        <SectionHead num="09" kicker="Visit" title={<>Find us on <em>Hilltop Road.</em></>} />
        <div className="visit">
          <Reveal>
            <div className="visit__block">
              <p className="visit__label">Address</p>
              <address>{GYM.address.map((l) => <span key={l} style={{ display: 'block' }}>{l}</span>)}</address>
            </div>
            <div className="visit__block">
              <p className="visit__label">Hours</p>
              <div className="hours">
                <div><span>Monday – Saturday</span><b>6 AM – 11 PM</b></div>
                <div><span>Sunday</span><b>Closed</b></div>
              </div>
              <p className={`open${s.open ? '' : ' is-closed'}`}><i aria-hidden="true" />{s.text}</p>
            </div>
            <div className="visit__cta">
              <a className="btn" href={GYM.directions} target="_blank" rel="noreferrer"><Navigation aria-hidden="true" /> Get directions</a>
              <a className="btn btn--ghost" href={GYM.tel}><Phone aria-hidden="true" /> Call</a>
              <a className="btn btn--ghost" href={wa("I'd like to book a trial session. When can I come in?")}><MessageCircle aria-hidden="true" /> WhatsApp</a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="map">
            {map ? (
              <iframe title="Map showing Be Strong The Gym on Hilltop Road, Red Hills" src={GYM.mapEmbed} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <div className="map__cover">
                <div>
                  <button className="btn btn--gold" onClick={() => setMap(true)}><MapPin aria-hidden="true" /> Show interactive map</button>
                  <small style={{ marginTop: '.75rem' }}>The map loads from Google when you open it.</small>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
