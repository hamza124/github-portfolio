export type ProjectCategory = 'React & Next.js' | 'Angular'

export type ProjectVisual =
  | 'laundry'
  | 'reports'
  | 'map'
  | 'video'
  | 'pos'
  | 'flight'

export interface Project {
  id: string
  name: string
  company: string
  category: ProjectCategory
  purpose: string
  contribution: string
  technologies: string[]
  visual: ProjectVisual
  number: string
}

export const projects: Project[] = [
  {
    id: 'zips-webapp',
    name: 'ZIPS WebApp',
    company: 'Xumerz',
    category: 'React & Next.js',
    purpose:
      'A connected laundry management system for US operations, following garments from customer drop-off and tagging through washing, rack assignment, detailing, bagging, and final delivery or collection.',
    contribution:
      'I develop frontend experiences across these connected workflows, including the Assigning application for rack placement and the Mulberry application for garment detailing.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    visual: 'laundry',
    number: '01',
  },
  {
    id: 'web-manager',
    name: 'Web Manager',
    company: 'Xumerz',
    category: 'Angular',
    purpose:
      'A control centre for configuring ZIPS store settings and reviewing operational reports, including employee and category sales summaries and alterations reports.',
    contribution:
      'I develop the settings and reporting interfaces, turning dense operational information into practical tools for store teams.',
    technologies: ['Angular 18+', 'TypeScript'],
    visual: 'reports',
    number: '02',
  },
  {
    id: 'lotboard',
    name: 'Lotboard',
    company: 'Xumerz',
    category: 'Angular',
    purpose:
      'A map-focused application that helps operations teams track and understand delivery locations.',
    contribution:
      'I develop Angular interfaces that make location information easier for operations teams to scan, interpret, and act on.',
    technologies: ['Angular 18+', 'TypeScript', 'Maps'],
    visual: 'map',
    number: '03',
  },
  {
    id: 'sibme',
    name: 'Sibme',
    company: '3S Solutions',
    category: 'Angular',
    purpose:
      'An education platform where teachers work with classroom video and audio recordings, AI-generated transcripts, and collaborative feedback.',
    contribution:
      'My work focused on video editing interfaces and real-time teacher messaging with WebSockets. I also investigated and resolved production issues with the hotfix team.',
    technologies: ['Angular', 'PrimeNG', 'WebSockets'],
    visual: 'video',
    number: '04',
  },
  {
    id: 'e-retail-pos',
    name: 'E-retail POS',
    company: 'SMSAMI',
    category: 'Angular',
    purpose:
      'A restaurant management system supporting point-of-sale and inventory management workflows.',
    contribution:
      'I contributed frontend interfaces for day-to-day restaurant operations and inventory management.',
    technologies: ['Angular', 'Angular Material'],
    visual: 'pos',
    number: '05',
  },
  {
    id: 'flyaway-hub',
    name: 'Flyaway Hub',
    company: 'SMSAMI',
    category: 'Angular',
    purpose:
      'A flight scheduling application for students in Canada to book dates and times for small-aircraft flying sessions.',
    contribution:
      'I built frontend scheduling interfaces that help students understand availability and plan flying sessions.',
    technologies: ['Angular', 'Angular Material'],
    visual: 'flight',
    number: '06',
  },
]
