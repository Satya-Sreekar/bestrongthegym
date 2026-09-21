import { Reveal, Heading, Photo } from '../ui'

export default function Inside() {
  return (
    <section className="section" id="inside">
      <div className="wrap">
        <Heading eyebrow="Inside" title="Everything under one roof." text="Separate rooms for weights, dumbbells and cardio, so nobody is waiting on anybody." />
        <div className="bento">
          <Reveal className="tile tile--photo tile--2x2">
            <Photo name="strength-floor" alt="The strength floor with benches, racks and plate-loaded machines" />
            <div className="tile__cap"><h3>Strength floor</h3><p>Racks, benches and plate-loaded machines with room between them.</p></div>
          </Reveal>
          <Reveal className="tile tile--yellow" delay={0.05}>
            <strong>6 AM<br />11 PM</strong>
            <p>Open 17 hours a day, Monday to Saturday.</p>
          </Reveal>
          <Reveal className="tile tile--photo" delay={0.1}>
            <Photo name="dumbbells" alt="A separate dumbbell room with a full rack" />
            <div className="tile__cap"><h3>Dumbbell room</h3></div>
          </Reveal>
          <Reveal className="tile tile--photo tile--2x1" delay={0.15}>
            <Photo name="cardio-view" alt="Treadmills and bikes by the windows on the cardio deck" />
            <div className="tile__cap"><h3>Cardio deck, with a view</h3><p>Treadmills, ellipticals and bikes along the windows.</p></div>
          </Reveal>
          <Reveal className="tile tile--ink" delay={0.2}>
            <h3>Women train here, comfortably.</h3>
            <p>Supervised floor, CCTV, and a separate ladies changing room. Mornings are the quiet hours.</p>
          </Reveal>
          <Reveal className="tile tile--photo" delay={0.25}>
            <Photo name="cables" alt="Cable crossover and functional stations" />
            <div className="tile__cap"><h3>Cables and functional</h3></div>
          </Reveal>
          <Reveal className="tile" delay={0.3}>
            <h3>Kept spotless.</h3>
            <p>Cleaned through the day. If a machine breaks, members say it is fixed by the next day.</p>
          </Reveal>
          <Reveal className="tile" delay={0.35}>
            <h3>Park. Change. Lift.</h3>
            <p>Parking at the door, changing rooms, lockers, air conditioning and a music system that is on.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
