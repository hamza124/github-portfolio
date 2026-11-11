import { ArrowUpRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'
import { ProjectVisual } from './ProjectVisual'

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      onClose={onClose}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
      aria-labelledby={project ? `${project.id}-dialog-title` : undefined}
    >
      {project && (
        <div className="dialog-shell">
          <button className="dialog-close" type="button" onClick={onClose} aria-label="Close project details">
            <X aria-hidden="true" />
          </button>
          <ProjectVisual type={project.visual} />
          <div className="dialog-content">
            <p className="project-meta"><span>{project.number}</span>{project.company}</p>
            <h2 id={`${project.id}-dialog-title`}>{project.name}</h2>
            <div className="dialog-copy-grid">
              <div><h3>Product context</h3><p>{project.purpose}</p></div>
              <div><h3>My contribution</h3><p>{project.contribution}</p></div>
            </div>
            <div className="dialog-footer">
              <ul aria-label="Technologies">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <a href="#contact" onClick={onClose}>Discuss similar work <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
