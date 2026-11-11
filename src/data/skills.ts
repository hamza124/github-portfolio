export interface SkillGroup {
  title: string
  shortTitle: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    shortTitle: 'Core',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Styling & UI',
    shortTitle: 'UI',
    items: ['HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'Angular Material', 'PrimeNG'],
  },
  {
    title: 'State & integration',
    shortTitle: 'Data',
    items: ['NGXS', 'RxJS', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Development practices',
    shortTitle: 'Craft',
    items: ['Git', 'Reusable components', 'Responsive design', 'Debugging', 'Production hotfixes'],
  },
  {
    title: 'AI-assisted development',
    shortTitle: 'AI',
    items: ['Prompt engineering', 'Rapid prototyping', 'Reviewing generated code', 'Refining generated code'],
  },
]
