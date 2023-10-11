'use client'

import { useContext, useEffect } from "react";

import { PokemonContext } from "@/context";
import { searchParams } from "@/utils";

import { CardPokemon } from "@/components/Card";
import { Pagination, Search, Message } from "@/components";
import usePokemon from "@/hooks/usePokemon";

export const ViewProfile = () => {
  const { state } = useContext(PokemonContext);
  const { pokemon, pagination, search, message } = state;

  const { getProfile, getSearchProfile, setTextSearch } = usePokemon()

  useEffect(() => {
    getProfile({ offset: 0 })
  }, [])


  const getPokemon = (url) => {
    const offsetNum = searchParams({ urlCus: url, param: 'offset' })
    getProfile({ offset: parseInt(offsetNum) })
  }

  return (
    <>
      <CardPokemon
        img={pokemon.photo}
        name={pokemon.name}
        id={pokemon.id}
      />

      <Search
        onChange={setTextSearch}
        value={search.name}
        onSearch={getSearchProfile}
      />
      {
        message.text && <Message text={message.text} />
      }
      <Pagination
        next={pagination.next}
        previous={pagination.previous}
        onClick={getPokemon}
      />
    </>
  );
}
