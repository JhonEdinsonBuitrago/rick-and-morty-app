const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function getAllCharacters() {
  let characters = [];
  let url = BASE_URL;

  try {
    while (url) {
      const response = await fetch(url);

      if (!response.ok) break;

      const data = await response.json();
      characters = [...characters, ...data.results];
      url = data.info.next;

      await new Promise((resolve) => setTimeout(resolve, 80));
    }

    if (characters.length === 0) {
      throw new Error('No se pudieron cargar los personajes');
    }

    return characters;

  } catch (error) {
    if (characters.length > 0) return characters;
    throw new Error(error.message);
  }
}