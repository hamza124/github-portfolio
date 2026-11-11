import { ArrowUpRight, Check, Copy, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

const email = 'hamzaakbar166@gmail.com'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-layout">
        <div className="contact-kicker"><span>05</span><p>Contact</p></div>
        <div className="contact-main">
          <p>Have a frontend problem that needs a steady hand?</p>
          <h2>Let’s make it<br /><em>work beautifully.</em></h2>
          <div className="contact-actions">
            <a href={`mailto:${email}`}><Mail size={19} aria-hidden="true" /> Email me <ArrowUpRight size={17} aria-hidden="true" /></a>
            <button type="button" onClick={copyEmail} aria-live="polite">
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
        </div>
        <div className="contact-details">
          <p>Open to thoughtful product conversations, frontend leadership opportunities, and useful collaborations.</p>
          <a href={`mailto:${email}`}>{email}</a>
          <a href="https://www.linkedin.com/in/hamza-akbar-5794661b2/" target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
