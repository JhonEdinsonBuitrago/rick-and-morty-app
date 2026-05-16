import { useState, useEffect } from 'react'
import { getAllCharacters } from '../services/api'
import CharacterGrid from '../components/CharacterGrid'

function HomePage() {
  const [characters, setCharacters] = useState([])
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
      <p className="text-muted">Total: {characters.length} personajes</p>
      <CharacterGrid characters={characters} />
    </div>
  )
}

export default HomePage