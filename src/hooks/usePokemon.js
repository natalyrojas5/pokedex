import { useContext } from "react";
import { PokemonContext } from "@/context";
import { actionType } from "@/context/utils";

import { ServicesPokemon } from "@/services";

const usePokemon = () => {
  const { dispatch, state: { search } } = useContext(PokemonContext);

  const getProfile = async ({ offset }) => {
    const response = await ServicesPokemon.getPagination({ offset });
    const { isOk, name, ...res } = response;
    if (isOk && name) {
      const { isOk, ...resPoke } = await ServicesPokemon.getDetails({ name })
      if (!isOk) return
      dispatch({
        type: actionType.UPDATE_PAGINATION,
        payload: { ...res, offset: parseInt(offset) }
      });
      dispatch({
        type: actionType.ADD_POKEMON,
        payload: { ...resPoke }

      })
    }
  }

  const setMessage = (text) => {
    dispatch({
      type: actionType.ADD_MESSAGE,
      payload: text
    });
    setTimeout(() => {
      dispatch({
        type: actionType.RESET_MESSAGE,
      });
      dispatch({
        type: actionType.UPDATE_TEXT_SEARCH,
        payload: '',
      })
    }, 3000);
  }

  const getSearchProfile = async () => {
    const name = search.name;
    const { isOk, ...resPoke } = await ServicesPokemon.getDetails({ name })
    if (isOk) {
      const offset = resPoke.id - 1;
      const response = await ServicesPokemon.getPagination({ offset });
      const { isOk, name, ...res } = response;
      if (!isOk) return
      dispatch({
        type: actionType.UPDATE_PAGINATION,
        payload: { ...res, offset }
      });
      dispatch({
        type: actionType.ADD_POKEMON,
        payload: { ...resPoke }

      })
      return
    }

    setMessage('No se encontró pokémon: ' + name);

  }

  const setTextSearch = ({ target }) => {
    const { value = '' } = target;
    dispatch({
      type: actionType.UPDATE_TEXT_SEARCH,
      payload: value,
    })
  }

  return {
    getProfile,
    setTextSearch,
    getSearchProfile
  }
}

export default usePokemon