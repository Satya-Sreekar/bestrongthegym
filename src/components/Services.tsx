import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../content'
import { Photo, Reveal, SectionHead, WhatsAppCta } from '../ui'

export default function Services() {
  return (
    <section className="section section--raised" id="training">
      <div className="wrap">
        <SectionHead
          eyebrow="Training"
          title="What you can train here."
          lead="Six ways to use the gym. Mix them however your week allows."
        />

        <ul className="services">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.title} delay={(i % 3) * 0.06} className="service">
              <div className="service__img">
                <Photo name={service.photo} alt={service.alt} width={800} height={600} />
              </div>
              <div className="service__body">
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <WhatsAppCta
                  message={service.wa}
                  event="whatsapp_service_click"
                  detail={service.title}
                  className="link"
                >
                  {service.cta} <ArrowUpRight aria-hidden="true" />
                </WhatsAppCta>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
