const ITEMS = ['Muscle', 'Cardio', 'Nutrition', 'Strength floor', 'Dumbbell room', 'Cardio deck', 'Personal training', 'Diet coaching', 'Red Hills · Hyderabad']

export default function Ticker() {
  const row = (hidden = false) => (
    <span aria-hidden={hidden || undefined}>
      {ITEMS.map((t) => (<span key={t}>{t}<i /></span>))}
    </span>
  )
  return (
    <div className="ticker" aria-label="What we do">
      <div className="ticker__track">{row()}{row(true)}</div>
    </div>
  )
}
