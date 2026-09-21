import { useState } from 'react'
import { MapPin, Navigation, Phone } from 'lucide-react'
import { GYM, wa } from '../data'
import { Heading, Photo, Reveal, openStatus } from '../ui'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function Visit() {
  const [map, setMap] = useState(false)
  const s = openStatus()
  return (
    <section className="section" id="visit">
      <div className="wrap">
        <Heading eyebrow="Visit" title="Come see it before you decide." text="Walk in any time we are open. Or message first and a coach will be waiting." />
        <div className="visit">
          <Reveal className="visit__card">
            <p className={`live${s.open ? ' is-open' : ''}`}><i aria-hidden="true" />{s.text}</p>
            <address>{GYM.address.map((l) => <span key={l}>{l}</span>)}</address>
            <div className="days" aria-label="Open Monday to Saturday, closed Sunday">
              {DAYS.map((d) => <span key={d} className={d === 'Sun' ? 'is-off' : ''}>{d}</span>)}
            </div>
            <p className="visit__hours"><b>6 AM – 11 PM</b> Monday to Saturday · Sunday closed</p>
            <div className="visit__cta">
              <a className="btn btn--ink" href={GYM.directions} target="_blank" rel="noreferrer"><Navigation aria-hidden="true" /> Directions</a>
              <a className="btn btn--ghost" href={GYM.tel}><Phone aria-hidden="true" /> Call</a>
              <a className="btn btn--ghost" href={wa('I would like to visit the gym. When is a good time?')}>WhatsApp</a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="map">
            {map ? (
              <iframe title="Map showing Be Strong The Gym on Hilltop Road" src={GYM.mapEmbed} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <>
                <Photo name="signboard" alt="The Be Strong The Gym signboard on Hilltop Road" />
                <div className="map__cover">
                  <button className="btn btn--yellow" onClick={() => setMap(true)}><MapPin aria-hidden="true" /> Show map</button>
                </div>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
