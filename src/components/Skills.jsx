const categorias = [
  {
    titulo: 'Frontend',
    items: ['React', 'Wordpress', 'CSS', 'Elementor', 'Supabase'],
  },
  {
    titulo: 'Herramientas',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'DevTools'],
  },
  {
    titulo: 'En aprendizaje',
    items: ['TypeScript', 'Next.js', 'Node.js', 'FireBase', ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__header">
        <span className="badge">Skills</span>
        <h2 className="section__title">Tecnologías con las que trabajo</h2>
      </div>

      <div className="skills__grid">
        {categorias.map((categoria) => (
          <article key={categoria.titulo} className="card">
            <h3 className="card__title mono">{categoria.titulo}</h3>
            <ul className="pill-list">
              {categoria.items.map((item) => (
                <li key={item} className="pill">{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills