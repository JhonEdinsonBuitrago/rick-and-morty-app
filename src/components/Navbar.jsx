import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">
        🧬 Rick & Morty
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mainMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/characters' ? 'active' : ''}`}
              to="/characters"
            >
              Personajes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/filter' ? 'active' : ''}`}
              to="/filter"
            >
              Filtrar por especie
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar