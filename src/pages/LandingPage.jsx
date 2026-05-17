import { Link } from 'react-router-dom'
import { FaRocket, FaMicroscope, FaGlobe, FaFlask } from 'react-icons/fa'
import { GiAlienStare, GiMolecule } from 'react-icons/gi'

function LandingPage() {
  return (
    <div className="landing-wrapper">

      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-hero g-5">

            {/* TEXTO */}
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <p className="hero-label">
                <FaFlask size={14} className="me-2" />
                Bienvenido al laboratorio
              </p>
              <h1 className="hero-title">Rick & Morty</h1>
              <p className="hero-subtitle">
                Explora el multiverso. Descubre más de{' '}
                <span className="highlight">800 personajes</span> de la serie
                más loca de la ciencia ficción.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap mt-4">
                <Link to="/characters" className="btn btn-hero-primary">
                  <FaRocket className="me-2" />
                  Explorar personajes
                </Link>
                <Link to="/filter" className="btn btn-hero-secondary">
                  <FaMicroscope className="me-2" />
                  Filtrar por especie
                </Link>
              </div>
            </div>

            {/* IMAGEN */}
            <div className="col-12 col-lg-5 d-flex justify-content-center">
              <div className="hero-image-wrapper">
                <img
                  src="/hero.jpg"
                  alt="Rick and Morty"
                  className="hero-image"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="info-section container py-5">
        <div className="row g-4 text-center">
          <div className="col-12 col-md-4">
            <div className="info-card">
              <div className="info-icon">
                <FaGlobe size={40} />
              </div>
              <h4>Multiverso infinito</h4>
              <p>Personajes de todas las dimensiones y realidades alternas del universo de Rick y Morty.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="info-card">
              <div className="info-icon">
                <GiAlienStare size={40} />
              </div>
              <h4>Múltiples especies</h4>
              <p>Humanos, aliens, robots, criaturas mitológicas y muchas especies más esperan ser exploradas.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="info-card">
              <div className="info-icon">
                <GiMolecule size={40} />
              </div>
              <h4>Ciencia loca</h4>
              <p>Basada en la serie animada de Adult Swim creada por Justin Roiland y Dan Harmon.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage