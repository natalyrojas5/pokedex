const { apiService } = require("@/api")

const getPokemon = async ({ name, validatePokemon = false }) => {
  const pokemon = name.toLowerCase();
  const endpoint = `/${pokemon}`;
  const res = await apiService({ endpoint });
  const isOk = res.ok;
  const JSON = { isOk, name: pokemon };
  if (isOk && !validatePokemon) {
    const { sprites, order, id, abilities, species, types } = await res.json();
    JSON.photo = sprites.other.home.front_default;
    JSON.order = order;
    JSON.id = id;
    JSON.abilities = abilities;
    JSON.species = [species];
    JSON.types = types;
  }
  return JSON
}

const getPokemons = async ({ limit }) => {
  const endpoint = `?&limit=${limit}`;
  const res = await apiService({ endpoint })
  const JSON = { isOk: res.ok };
  if (res.ok) {
    const { next, previous, results } = await res.json();
    JSON.next = next;
    JSON.previous = previous;

    if (Array.isArray(results) && results.length > 0) {
      JSON.name = results[0].name;
      JSON.pokemons = results;
    }
  }
  return JSON;
};

export const ServicesPokemon = {
  getPokemon,
  getPokemons
}