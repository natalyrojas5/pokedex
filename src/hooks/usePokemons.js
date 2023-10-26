import { useContext } from "react";

import { PokemonContext } from "@/context";
import { types } from "@/store";
import { ServicesPokemon } from "@/services";

export const usePokemons = () => {
  const { dispatch } = useContext(PokemonContext);

  const getAllPokemons = async ({ limit }) => {
    const response = await ServicesPokemon.getPokemons({ limit });
    const { isOk, pokemons } = response;

    if (!isOk) return
    dispatch({
      type: types.ADD_POKEMONS,
      payload: {
        data: [...pokemons],
        limit,
      }
    })
  }
  return {
    getAllPokemons
  }
}