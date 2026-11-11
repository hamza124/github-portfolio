import { ArrowUp } from 'lucide-react'
import { MotionToggle } from './MotionControl'

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <p><b>Hamza Akbar</b><span>Frontend Developer · Peshawar</span></p>
        <MotionToggle />
        <p className="footer-note">Designed around real work. Built with React & TypeScript.</p>
        <a href="#top" aria-label="Back to top">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
