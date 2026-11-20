const enlaces = [
  { etiqueta: 'Email', valor: 'miguelmcsft@gmail.com', href: 'mailto:miguelmcsft@gmail.com' },
  { etiqueta: 'LinkedIn', valor: '/in/miguel-21-rxj/', href: 'https://www.linkedin.com/in/miguel-21-rxj/', external: true },
  { etiqueta: 'GitHub', valor: 'miguel-rxj', href: 'https://github.com/miguel-rxj', external: true },
]

function Contact() {
  return (
    <section id="contacto" className="section contact">
      <div className="section__header">
        <span className="badge">Contacto</span>
        <h2 className="section__title">Trabajemos juntos</h2>
        <p className="section__subtitle">
          Si tienes un proyecto en mente o una oferta, escríbeme.
        </p>
      </div>

      <div className="contact__grid">
        {enlaces.map((enlace) => (
          <a
            key={enlace.etiqueta}
            href={enlace.href}
            target={enlace.external ? '_blank' : undefined}
            rel={enlace.external ? 'noopener noreferrer' : undefined}
            className="card card--hover contact__item"
          >
            <span className="contact__label mono">{enlace.etiqueta}</span>
            <span className="contact__value">{enlace.valor}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
