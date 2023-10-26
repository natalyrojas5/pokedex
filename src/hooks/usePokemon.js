import { useContext } from "react";

import { types } from "@/store";
import { PokemonContext } from "@/context";
import { ServicesPokemon } from "@/services";
import { useSearch } from "./useSearch";

export const usePokemon = () => {
  const { dispatch } = useContext(PokemonContext);
  const { setMessage } = useSearch();

  const getPokemon = async ({ pokemon }) => {
    const { isOk, ...resPoke } = await ServicesPokemon.getPokemon({ name: pokemon })

    dispatch({
      type: types.ADD_POKEMON,
      payload: { ...resPoke }
    })
  };

  const isValidatePokemon = async ({ pokemon }) => {
    const { isOk } = await ServicesPokemon.getPokemon({ name: pokemon, validatePokemon: true });
    if (!isOk) {
      const msg = `El pokemón ${pokemon} no fue encontrado`;
      setMessage(msg)
    }
    return isOk;
  }

  return {
    getPokemon,
    isValidatePokemon,
  }
}
