const { actionType } = require("../utils");

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_POKEMON:
      return {
        ...state, pokemon:
        {
          ...state.pokemon,
          ...action.payload
        }
      }
    case actionType.UPDATE_PAGINATION:
      return {
        ...state, pagination:
          { ...state.pagination, ...action.payload }
      }

    case actionType.UPDATE_TEXT_SEARCH:
      return {
        ...state,
        search: {
          ...state.search,
          name: action.payload
        }
      }
    case actionType.ADD_MESSAGE:

      return {
        ...state,
        message: {
          text: action.payload
        }
      }
    case actionType.RESET_MESSAGE:
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