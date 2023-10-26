export const initialState = {
  pokemon: {
    isLoading: true,
  },
  pokemons: {
    isLoading: true,
    data: [],
    limit: 10,
  },
  search: {
    name: '',
    isLoading: false
  },
  message: {
    text: ''
  }
}