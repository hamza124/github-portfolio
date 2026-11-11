import { experience } from '../data/experience'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="Experience"
          title="Seven years close to the product."
          description="From restaurant operations to education and connected laundry systems, I’ve grown by working through the details of real products with real constraints."
        />
        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal className="timeline-item" delay={index * 0.06} key={item.company}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <p className="timeline-period">{item.period}</p>
              <div className="timeline-main">
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
                <p>{item.description}</p>
              </div>
              <ul aria-label="Technologies">
                {item.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
