import { ArrowUpRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { projects, type Project } from '../data/projects'
import { ProjectDialog } from './ProjectDialog'
import { ProjectVisual } from './ProjectVisual'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const filters = ['All Projects', 'React & Next.js', 'Angular'] as const
type Filter = (typeof filters)[number]

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All Projects')
  const [selected, setSelected] = useState<Project | null>(null)
  const filtered = useMemo(
    () => filter === 'All Projects' ? projects : projects.filter((project) => project.category === filter),
    [filter],
  )

  return (
    <section id="work" className="work-section">
      <div className="container">
        <SectionHeading
          number="01"
          eyebrow="Selected work"
          title="Interfaces built around the work people actually do."
          description="A selection of connected systems, operational tools, and scheduling products. Previews are illustrative; the project details reflect my actual contribution."
        />
        <div className="project-toolbar">
          <div className="project-filters" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                className={filter === item ? 'active' : ''}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}<span>{item === 'All Projects' ? projects.length : projects.filter((project) => project.category === item).length}</span>
              </button>
            ))}
          </div>
          <p aria-live="polite">Showing {filtered.length} project{filtered.length === 1 ? '' : 's'}</p>
        </div>
        <div className="project-list">
          {filtered.map((project, index) => (
            <Reveal className="project-card" delay={index * 0.04} key={project.id}>
              <div className="project-visual-wrap"><ProjectVisual type={project.visual} /></div>
              <div className="project-copy">
                <p className="project-meta"><span>{project.number}</span>{project.company}</p>
                <h3>{project.name}</h3>
                <p>{project.purpose}</p>
                <ul aria-label="Technologies">
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <button type="button" onClick={() => setSelected(project)}>
                  Read project story <ArrowUpRight size={18} aria-hidden="true" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
