import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 fw-bold">404</h1>
      <h3 className="mb-3">¡Página no encontrada!</h3>
      <p className="text-muted mb-4">
        Parece que te perdiste en el multiverso. Esta página no existe.
      </p>
      <Link to="/" className="btn btn-dark btn-lg">
        🏠 Volver al inicio
      </Link>
    </div>
  )
}

export default ErrorPage