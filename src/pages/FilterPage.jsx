import { useState, useEffect } from 'react'
import { getAllCharacters } from '../services/api'
import CharacterGrid from '../components/CharacterGrid'
import Pagination from '../components/Pagination'

const SPECIES = ['Human', 'Alien', 'Robot', 'Mythological Creature', 'Animal', 'unknown']
const PAGE_SIZE = 20

function FilterPage() {
  const [characters, setCharacters] = useState([])
  const [filtered, setFiltered] = useState([])
  const [selectedSpecies, setSelectedSpecies] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
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
    setCurrentPage(1)
    if (species === '') {
      setFiltered(characters)
    } else {
      setFiltered(characters.filter((c) => c.species === species))
    }
  }

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const currentCharacters = filtered.slice(startIndex, startIndex + PAGE_SIZE)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

      <p className="text-muted">
        Mostrando: {filtered.length} personajes — Página {currentPage} de {totalPages || 1}
      </p>
      <CharacterGrid characters={currentCharacters} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default FilterPage