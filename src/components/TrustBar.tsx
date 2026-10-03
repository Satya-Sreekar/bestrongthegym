import { TRUST } from '../content'

export default function TrustBar() {
  return (
    <section className="trust" aria-label="At a glance">
      <div className="wrap">
        <ul>
          {TRUST.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
