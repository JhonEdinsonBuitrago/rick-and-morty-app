import CharacterCard from './CharacterCard'

function CharacterGrid({ characters }) {
  if (characters.length === 0) {
    return (
      <div className="text-center mt-5">
        <h4>No se encontraron personajes.</h4>
      </div>
    )
  }

  return (
    <div className="row mt-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export default CharacterGrid