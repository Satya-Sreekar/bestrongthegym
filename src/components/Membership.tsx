import { ArrowUpRight, Check } from 'lucide-react'
import type { WaKey } from '../config'
import type { TrackEvent } from '../track'
import { Reveal, SectionHead, WhatsAppCta, WhatsAppIcon } from '../ui'

/**
 * Prices are intentionally not published. The gym's rates change and a stale
 * number on the website costs trust at the front desk, so every plan routes to
 * WhatsApp, which is also the fastest way the gym answers.
 */
const PLANS: {
  name: string
  body: string
  includes: string[]
  wa: WaKey
  event: TrackEvent
  featured?: boolean
}[] = [
  {
    name: 'Individual membership',
    body: 'For one person, on your own schedule.',
    includes: [
      'Full use of the strength floor and dumbbell room',
      'Weight training and cardio packages available',
      'Trainers on the floor through the day',
      'Changing rooms, parking and air conditioning',
    ],
    wa: 'membership',
    event: 'whatsapp_membership_click',
    featured: true,
  },
  {
    name: 'Couple membership',
    body: 'Two people, one membership, offers that run through the year.',
    includes: [
      'Everything in an individual membership, for two',
      'Offers on both weight training and cardio packages',
      'Train together or on separate schedules',
      'Current offer shared on WhatsApp',
    ],
    wa: 'coupleOffer',
    event: 'whatsapp_couple_offer_click',
  },
  {
    name: 'Personal training',
    body: 'One-to-one coaching with a trainer who plans your week.',
    includes: [
      'A dedicated trainer for every session',
      'A programme written around your goal',
      'Guidance on technique and progress tracking',
      'Nutritional guidance alongside the training',
    ],
    wa: 'personalTraining',
    event: 'whatsapp_personal_training_click',
  },
]

export default function Membership() {
  return (
    <section className="section" id="membership">
      <div className="wrap">
        <SectionHead
          eyebrow="Membership"
          title="Find the right membership for you."
          lead="Tell us what you want to train for and we will send the current plans and pricing on WhatsApp, usually the same day."
        />

        <ul className="plans">
          {PLANS.map((plan, i) => (
            <Reveal as="li" key={plan.name} delay={i * 0.07} className={`plan${plan.featured ? ' plan--featured' : ''}`}>
              <h3>{plan.name}</h3>
              <p className="plan__body">{plan.body}</p>
              <ul className="plan__list">
                {plan.includes.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <WhatsAppCta
                message={plan.wa}
                event={plan.event}
                detail={plan.name}
                className={`btn ${plan.featured ? 'btn--brand' : 'btn--outline'} btn--block`}
              >
                Get pricing <ArrowUpRight aria-hidden="true" />
              </WhatsAppCta>
            </Reveal>
          ))}
        </ul>

        <Reveal className="plans__cta">
          <p>Not sure which one fits? Send us a message and we will talk it through.</p>
          <WhatsAppCta message="membership" event="whatsapp_membership_click" detail="membership_footer" className="btn btn--brand btn--lg">
            <WhatsAppIcon /> Get membership pricing on WhatsApp
          </WhatsAppCta>
        </Reveal>
      </div>
    </section>
  )
}
