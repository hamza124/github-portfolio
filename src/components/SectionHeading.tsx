interface SectionHeadingProps {
  number: string
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${light ? 'is-light' : ''}`}>
      <div className="section-kicker">
        <span>{number}</span>
        <p>{eyebrow}</p>
      </div>
      <div>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  )
}
