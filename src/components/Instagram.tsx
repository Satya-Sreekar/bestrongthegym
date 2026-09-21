import { GYM, IG } from '../data'
import { InstagramIcon, Reveal } from '../ui'

export default function Instagram() {
  return (
    <section className="ig" aria-labelledby="ig-h">
      <div className="wrap">
        <Reveal className="ig__head">
          <h2 id="ig-h">Real sessions, posted weekly.</h2>
          <a className="btn btn--ghost btn--sm" href={GYM.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={16} /> Follow @bestrongthegym</a>
        </Reveal>
      </div>
      <div className="ig__rail">
        {IG.map((n) => (
          <a key={n} className="ig__item" href={GYM.instagram} target="_blank" rel="noreferrer" aria-label="Open Be Strong on Instagram">
            <img src={`/img/${n}.jpg`} alt="" width="360" height="640" loading="lazy" decoding="async" />
          </a>
        ))}
      </div>
    </section>
  )
}
