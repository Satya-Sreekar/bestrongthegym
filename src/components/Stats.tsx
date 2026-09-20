import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { Reveal } from '../ui'

function Count({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const reduce = useReducedMotion()
  useEffect(() => {
    const el = ref.current
    if (!inView || !el) return
    if (reduce) { el.textContent = to.toFixed(decimals); return }
    const c = animate(0, to, { duration: 1.6, ease: [0.2, 0.7, 0.2, 1], onUpdate: (v) => { el.textContent = v.toFixed(decimals) } })
    return () => c.stop()
  }, [inView, to, decimals, reduce])
  return <span ref={ref}>{(0).toFixed(decimals)}</span>
}

export default function Stats() {
  return (
    <section className="section section--tight" aria-label="At a glance">
      <Reveal className="wrap">
        <div className="stats">
          <div><strong><Count to={4.9} decimals={1} /><small>★</small></strong><span>Google rating, 176 reviews</span></div>
          <div><strong><Count to={456} /><small>+</small></strong><span>Public ratings across Google, Justdial &amp; FITPASS</span></div>
          <div><strong><Count to={17} /><small>HRS</small></strong><span>Open every day, Monday to Saturday</span></div>
          <div><strong>1:1</strong><span>Personal training &amp; diet coaching</span></div>
        </div>
      </Reveal>
    </section>
  )
}
