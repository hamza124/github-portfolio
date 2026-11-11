# Hamza Akbar — Developer Portfolio

A static, responsive portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. The portrait-led hero uses lightweight CSS depth and interaction without a heavy WebGL dependency.

## Local setup

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Updating content

The main portfolio content is kept in small typed data files:

- `src/data/projects.ts` — projects, contributions, technologies, and preview type
- `src/data/skills.ts` — grouped skills
- `src/data/experience.ts` — employment timeline

Profile copy and contact details live in the corresponding components under `src/components`.

## Résumé

The résumé is stored at `public/hamza-akbar-resume.pdf` and linked from the hero. Keep that filename when replacing the document so the link continues to work on both user and repository GitHub Pages sites.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` deploys every push to `main`. In the GitHub repository settings, choose **GitHub Actions** as the Pages source.

The workflow automatically uses `/` for a user site such as `username.github.io`, and `/<repository-name>/` for a repository site. Vite’s asset base path is set at build time, so both deployment types work without changing source code.

## Accessibility and performance

- Semantic regions, headings, skip link, visible focus styles, keyboard-friendly native dialogs
- Reduced-motion support plus a persistent motion pause/play control in the footer
- The portrait hero uses lightweight CSS 3D layers, with motion reduced automatically for visitors who prefer it
- Project information remains usable with JavaScript animation and WebGL unavailable
- No client-side routes, so GitHub Pages refreshes remain safe

All project visuals are explicitly labelled illustrative previews. They do not represent production screenshots or customer data.
