import { Braces, Component, GitBranch, Radio, Sparkles } from 'lucide-react'
import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const icons = [Component, Braces, Radio, GitBranch, Sparkles]
const orbitSkills = ['React', 'Angular', 'TS', 'Next', 'RxJS', 'UI']

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="Skills & tools"
          title="A practical toolkit for dependable interfaces."
          description="Frameworks change. My focus stays on readable systems, useful interaction, and frontend work that holds up in production."
          light
        />
        <div className="skills-layout">
          <Reveal className="skills-orbit-wrap">
            <div className="skills-orbit" aria-hidden="true">
              <div className="orbit-ring ring-outer" />
              <div className="orbit-ring ring-inner" />
              <div className="orbit-core"><b>UI</b><span>systems</span></div>
              {orbitSkills.map((skill, index) => (
                <span key={skill} className={`orbit-skill orbit-${index + 1}`}>{skill}</span>
              ))}
            </div>
            <p><span aria-hidden="true">↳</span> Technology in service of the workflow</p>
          </Reveal>
          <div className="skill-groups">
            {skillGroups.map((group, index) => {
              const Icon = icons[index]
              return (
                <Reveal className="skill-group" delay={index * 0.05} key={group.title}>
                  <div className="skill-group-head">
                    <span><Icon size={18} aria-hidden="true" /></span>
                    <div><small>{group.shortTitle}</small><h3>{group.title}</h3></div>
                  </div>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
