import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <div className="section__header">
        <span className="badge">Proyectos</span>
        <h2 className="section__title">Trabajo seleccionado</h2>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.id} className="card card--hover">
            <h3 className="card__title">{project.titulo}</h3>
            <p className="card__text">{project.descripcion}</p>

            <ul className="pill-list">
              {project.tags.map((tag) => (
                <li key={tag} className="pill mono">{tag}</li>
              ))}
            </ul>

            <div className="card__actions">
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
                Ver demo
              </a>
              <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                Código
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects