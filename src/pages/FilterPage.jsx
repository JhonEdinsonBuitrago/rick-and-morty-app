import { useState, useEffect } from 'react'
import { getAllCharacters } from '../services/api'
import CharacterGrid from '../components/CharacterGrid'

const SPECIES = ['Human', 'Alien', 'Robot', 'Mythological Creature', 'Animal', 'unknown']

function FilterPage() {
  const [characters, setCharacters] = useState([])
  const [filtered, setFiltered] = useState([])
  const [selectedSpecies, setSelectedSpecies] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllCharacters()
      .then((data) => {
        setCharacters(data)
        setFiltered(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const handleFilter = (species) => {
    setSelectedSpecies(species)
    if (species === '') {
      setFiltered(characters)
    } else {
      setFiltered(characters.filter((c) => c.species === species))
    }
  }

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status"></div>
        <p className="mt-2">Cargando personajes...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <h4 className="text-danger">❌ {error}</h4>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-3">Filtrar por especie</h2>

      <div className="d-flex flex-wrap gap-2 mb-4">
        <button
          className={`btn ${selectedSpecies === '' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => handleFilter('')}
        >
          Todos
        </button>
        {SPECIES.map((species) => (
          <button
            key={species}
            className={`btn ${selectedSpecies === species ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => handleFilter(species)}
          >
            {species}
          </button>
        ))}
      </div>

      <p className="text-muted">Mostrando: {filtered.length} personajes</p>
      <CharacterGrid characters={filtered} />
    </div>
  )
}

export default FilterPage