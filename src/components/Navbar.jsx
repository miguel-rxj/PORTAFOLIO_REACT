function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__logo">Miguel Dev</a>

        <nav className="navbar__links" aria-label="Principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#skills">Skills</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto" className="btn btn--primary btn--sm">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar