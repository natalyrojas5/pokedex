const { types } = require("./types");

export const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_POKEMON:
      return {
        ...state, pokemon:
        {
          ...state.pokemon,
          ...action.payload
        }
      }

    case types.ADD_POKEMONS:
      return {
        ...state, pokemons:
        {
          ...state.pokemons,
          data: [
            ...action.payload.data,
          ],
          limit: action.payload.limit,
        }
      }

    case types.UPDATE_TEXT_SEARCH:
      return {
        ...state,
        search: {
          ...state.search,
          name: action.payload
        }
      }
    case types.ADD_MESSAGE:

      return {
        ...state,
        message: {
          text: action.payload
        }
      }
    case types.RESET_MESSAGE:
      return {
        ...state,
        message: {
          text: ''
        }
      }
    default:
      return state;
  }
}