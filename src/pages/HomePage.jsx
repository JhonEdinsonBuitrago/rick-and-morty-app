import { useState, useEffect } from 'react'
import { getAllCharacters } from '../services/api'
import CharacterGrid from '../components/CharacterGrid'
import Pagination from '../components/Pagination'

const PAGE_SIZE = 20

function HomePage() {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllCharacters()
      .then((data) => {
        setCharacters(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const totalPages = Math.ceil(characters.length / PAGE_SIZE)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const currentCharacters = characters.slice(startIndex, startIndex + PAGE_SIZE)

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
      <h2 className="fw-bold mb-3">Todos los personajes</h2>
      <p className="text-muted">
        Total: {characters.length} personajes — Página {currentPage} de {totalPages}
      </p>
      <CharacterGrid characters={currentCharacters} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default HomePage