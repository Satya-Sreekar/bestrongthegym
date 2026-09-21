import { MARQUEE } from '../data'
import { Photo } from '../ui'

export default function PhotoMarquee() {
  const row = (names: string[], reverse = false) => (
    <div className={`pm__row${reverse ? ' pm__row--rev' : ''}`}>
      {[0, 1].map((k) => (
        <div className="pm__track" key={k} aria-hidden={k === 1 || undefined}>
          {names.map((n) => <Photo key={n} name={n} />)}
        </div>
      ))}
    </div>
  )
  return (
    <section className="pm" aria-label="Photos of the gym">
      {row(MARQUEE.slice(0, 6))}
      {row(MARQUEE.slice(6), true)}
    </section>
  )
}
