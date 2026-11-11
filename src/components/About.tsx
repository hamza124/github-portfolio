import { ArrowUpRight, GraduationCap, MapPin } from 'lucide-react'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-layout">
        <div className="about-label"><span>04</span><p>About</p></div>
        <Reveal className="about-copy">
          <p className="about-lead">
            I enjoy the practical frontend problems—the ones where a complicated process needs to become a calm, maintainable interface.
          </p>
          <div className="about-columns">
            <p>I’m most at home untangling workflows, shaping reusable components, and tracking down the small production issues that make a big difference to the person using the product.</p>
            <p>Over the years I’ve worked across React and Angular codebases, collaborating around business rules and turning them into interfaces that teams can understand and evolve.</p>
          </div>
          <a href="#contact">Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></a>
        </Reveal>
        <Reveal className="about-facts" delay={0.08}>
          <div><span><MapPin size={18} aria-hidden="true" /></span><small>Based in</small><b>Peshawar, Pakistan</b></div>
          <div><span><GraduationCap size={18} aria-hidden="true" /></span><small>Education</small><b>Bachelor’s in Computer Science</b><p>University of Agriculture, Peshawar<br />2016 — 2019</p></div>
        </Reveal>
      </div>
    </section>
  )
}
