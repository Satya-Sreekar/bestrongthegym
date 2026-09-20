import { motion } from 'framer-motion'
import { GYM, IG } from '../data'
import { InstagramIcon, Reveal } from '../ui'

export default function Instagram() {
  return (
    <section className="ig section--alt" aria-labelledby="ig-h">
      <div className="wrap">
        <Reveal className="ig__head">
          <div>
            <p className="kicker">On Instagram</p>
            <h2 id="ig-h" style={{ marginTop: '.75rem' }}>Real members. Real sessions.</h2>
          </div>
          <a className="link" href={GYM.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={16} /> @bestrongthegym</a>
        </Reveal>
        <div className="ig__rail">
          {IG.map((name, i) => (
            <motion.a key={name} className="ig__item" href={GYM.instagram} target="_blank" rel="noreferrer" aria-label="Open Be Strong on Instagram"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(i, 5) * 0.06, duration: 0.6 }}>
              <img src={`/img/${name}.jpg`} alt="" width="360" height="640" loading="lazy" decoding="async" />
              <InstagramIcon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
