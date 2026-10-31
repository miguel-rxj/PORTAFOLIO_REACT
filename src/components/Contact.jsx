const enlaces = [
  { etiqueta: 'Email', valor: 'miguelmcsft@gmail.com', href: 'mailto:miguelmcsft@gmail.com' },
  { etiqueta: 'LinkedIn', valor: '/in/miguel-21-rxj/', href: 'https://www.linkedin.com/in/miguel-21-rxj/' },
  { etiqueta: 'GitHub', valor: 'miguel-rxj', href: 'https://github.com/miguel-rxj' },
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
            target="_blank"
            rel="noreferrer"
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