export interface Experience {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
}

export const experience: Experience[] = [
  {
    company: 'Xumerz',
    role: 'Senior Software Engineer Lead',
    period: 'March 2024 — Present',
    description:
      'Frontend development for laundry operations, store management, and delivery applications.',
    technologies: ['React', 'Next.js', 'Angular', 'Tailwind CSS'],
  },
  {
    company: '3S Solutions',
    role: 'Angular Developer',
    period: 'January 2023 — February 2024',
    description:
      'Video editing interfaces, real-time teacher messaging, and production hotfixes for Sibme.',
    technologies: ['Angular', 'PrimeNG', 'WebSockets'],
  },
  {
    company: 'SMSAMI',
    role: 'Angular Developer',
    period: 'May 2019 — December 2022',
    description:
      'Restaurant POS, inventory management, and flight scheduling applications.',
    technologies: ['Angular', 'Angular Material'],
  },
]
