function CharacterCard({ character }) {
  const { name, image, species, status, gender } = character

  const statusColor = {
    Alive: 'success',
    Dead: 'danger',
    unknown: 'secondary',
  }

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          alt={name}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text mb-1">
            <span className="fw-semibold">Especie:</span> {species}
          </p>
          <p className="card-text mb-1">
            <span className="fw-semibold">Género:</span> {gender}
          </p>
          <p className="card-text mb-0">
            <span className="fw-semibold">Estado: </span>
            <span className={`badge bg-${statusColor[status] || 'secondary'}`}>
              {status}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard