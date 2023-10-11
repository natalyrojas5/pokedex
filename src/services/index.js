const { apiService } = require("@/api")

const getDetails = async ({ name }) => {
  const endpoint = `/${name}`;
  const res = await apiService({ endpoint });
  const JSON = { isOk: res.ok, name };

  if (res.ok) {
    const { sprites, order, id } = await res.json();
    JSON.photo = sprites.other.home.front_default;
    JSON.order = order;
    JSON.id = id;
  }
  return JSON
}

const getPagination = async ({ offset }) => {
  const endpoint = `?limit=1&offset=${offset}`;
  const res = await apiService({ endpoint })
  const JSON = { isOk: res.ok };
  if (res.ok) {
    const { next, previous, results } = await res.json();
    JSON.next = next;
    JSON.previous = previous;

    if (Array.isArray(results) && results.length > 0) {
      JSON.name = results[0].name
    }
  }
  return JSON;
};

export const ServicesPokemon = {
  getDetails,
  getPagination
}