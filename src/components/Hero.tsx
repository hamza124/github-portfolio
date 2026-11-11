import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="hero-eyebrow"><span>Frontend developer</span><i />Peshawar, Pakistan</div>
          <h1>
            I make complex work<br />
            <em>feel clear.</em>
          </h1>
          <p className="hero-intro">
            I’m <strong>Hamza Akbar</strong>. I build thoughtful interfaces for the busy, interconnected workflows behind real businesses—using React, Next.js, Angular, and TypeScript.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">Explore my work <ArrowDown size={17} aria-hidden="true" /></a>
            <a
              className="button-secondary"
              href={`${import.meta.env.BASE_URL}hamza-akbar-resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              View résumé <FileText size={17} aria-hidden="true" />
            </a>
            <a className="button-secondary" href="#contact">Let’s talk <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="hero-footnote">
            <p><span>Since</span><b>2019</b> building production frontend applications</p>
          </div>
        </div>
        <div className="hero-art">
          <div className="portrait-orbit" aria-hidden="true" />
          <figure className="portrait-frame">
            <img
              src={`${import.meta.env.BASE_URL}hamza-akbar.jpg`}
              alt="Hamza Akbar, frontend developer"
              width="738"
              height="1600"
              fetchPriority="high"
            />
            <figcaption><span aria-hidden="true" /> Peshawar, Pakistan</figcaption>
          </figure>
          <div className="floating-interface interface-status" aria-hidden="true">
            <small>Current focus</small>
            <b>Frontend systems</b>
            <span>React · Angular · TypeScript</span>
          </div>
          <div className="floating-interface interface-code" aria-hidden="true">
            <span>01</span>
            <p><i>const</i> interface =<br />&nbsp;&nbsp;clear(workflow)</p>
          </div>
          <span className="art-caption">Portrait / Hamza Akbar</span>
        </div>
      </div>
      <a href="#work" className="scroll-cue"><span>Scroll to work</span><i /></a>
    </section>
  )
}
