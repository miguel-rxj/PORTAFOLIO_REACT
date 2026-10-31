import CodeBlock from './CodeBlock'

const perfil = `const developer = {
  name: "Miguel Reynaga",
  role: "Frontend Developer",
  location: "Lima, Perú",
  stack: ["React", "Wordpress", "UI/UX"],
  openToWork: true,
}`

function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="section__header">
        <span className="badge">Sobre mí</span>
        <h2 className="section__title">Código limpio, diseño con propósito</h2>
      </div>

      <div className="about__grid">
        <div className="about__text">
          <p>
            Desarrollador web enfocado en resultados y desarrollo escalable. Cuento con experiencia en la creación de sitios web en WordPress, aplicaciones web con React y sistemas de gestión con Android Studio.
          </p>
          <p>
            Desarrollo proyectos bajo un flujo de trabajo colaborativo: mantengo un acompañamiento continuo con el cliente y evalúo el comportamiento del sistema a la par, garantizando soluciones de calidad, funcionales y orientadas al usuario final.
          </p>
        </div>

        <CodeBlock title="developer.js" code={perfil} />
      </div>
    </section>
  )
}

export default About