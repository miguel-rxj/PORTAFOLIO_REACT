import { useRef } from 'react'

import reactIcon from '../assets/tech/react.svg'
import nodeIcon from '../assets/tech/nodedotjs.svg'
import githubIcon from '../assets/tech/github.svg'
import n8nIcon from '../assets/tech/n8n.svg'
import wordpressIcon from '../assets/tech/wordpress.svg'
import elementorIcon from '../assets/tech/elementor.svg'
import hostingerIcon from '../assets/tech/hostinger.svg'

// Foto en /public. Renombra "foto.jpg" a "foto.jpg" (sin espacios)
const PHOTO_SRC = '/Remi.webp'

const technologies = [
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'n8n', icon: n8nIcon },
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'Elementor', icon: elementorIcon },
  { name: 'Hostinger', icon: hostingerIcon },
]

function Hero() {
  const mediaRef = useRef(null)

  const handleMouseMove = (event) => {
    const media = mediaRef.current
    if (!media) return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2

    media.style.setProperty('--gx', (x * 70).toFixed(1))
    media.style.setProperty('--gy', (y * 70).toFixed(1))
  }

  const handleMouseLeave = () => {
    const media = mediaRef.current
    if (!media) return
    media.style.setProperty('--gx', 0)
    media.style.setProperty('--gy', 0)
  }

  return (
    <section
      id="inicio"
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero__inner">
        <div className="hero__grid">
          {/* Izquierda */}
          <div className="hero__left">
            <h1 className="hero__title">
              Hola, soy Miguel.
              <span className="hero__role">Desarrollador Frontend.</span>
            </h1>
          </div>

          {/* Centro */}
          <div className="hero__media" ref={mediaRef}>
            <div className="hero__glow" aria-hidden="true" />
            <div className="hero__glow-core" aria-hidden="true" />

            <div className="hero__photo">
              {PHOTO_SRC ? (
                <img src={PHOTO_SRC} alt="Foto de Miguel" />
              ) : (
                <span className="mono">Tu foto</span>
              )}
            </div>
          </div>

          {/* Derecha */}
          <div className="hero__right">
            <p className="hero__subtitle">
              Construyo interfaces web rápidas, limpias y bien pensadas
              con React y tecnologías modernas.
            </p>

            <div className="hero__actions">
              <a href="#proyectos" className="btn btn--primary">Ver proyectos</a>
              <a href="#contacto" className="btn btn--ghost">Contáctame</a>
            </div>
          </div>
        </div>

        {/* Fila inferior: 7 iconos */}
        <div className="hero__stack">
          <p className="hero__stack-label mono">Tecnologías que uso</p>

          <ul className="hero__stack-list">
            {technologies.map((tech) => (
              <li key={tech.name} className="tech" title={tech.name}>
                {tech.icon ? (
                  <img src={tech.icon} alt={tech.name} />
                ) : (
                  <span className="tech__placeholder mono">
                    {tech.name.slice(0, 2)}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero