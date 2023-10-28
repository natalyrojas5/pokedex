'use client';

import { useContext, useEffect } from "react";

import { useRouter } from 'next/navigation';
import { PokemonContext } from "@/context";

import '../styles.css';
import { Button, Message, Search, CardPokemon } from "@/components";

import { usePokemon, usePokemons, useSearch } from "@/hooks";

export const ViewPokemons = () => {
  const { state } = useContext(PokemonContext);
  const router = useRouter();

  const { pokemons, search, message } = state;

  const { isValidatePokemon } = usePokemon();
  const { getAllPokemons } = usePokemons();
  const { setTextSearch } = useSearch();

  useEffect(() => {
    getAllPokemons({ limit: 10 });
  }, [])

  const onGoPagePokemon = async ({ pokemon }) => {
    const isOk = await isValidatePokemon({ pokemon });
    if (isOk) {
      router.push('/pokemon?name=' + pokemon);
    }
  }

  const onGoMorePokemons = () => {
    const limit = pokemons.limit + 5;
    getAllPokemons({ limit });
  }

  return (
    <>
      <Search
        onChange={setTextSearch}
        value={search.name}
        onSearch={() => onGoPagePokemon({ pokemon: search.name })}
      />
      {
        message.text &&
        <Message text={message.text} />
      }
      {
        Array.isArray(pokemons.data) && pokemons.data.length > 0 &&
        (
          <section className="list-pokemons scroll">
            {
              pokemons.data.map((pokemon, index) => (
                <CardPokemon
                  key={index}
                  img={pokemon.photo}
                  name={pokemon.name}
                  id={pokemon.id}
                  onShowDetail={() => onGoPagePokemon({ pokemon: pokemon.name })}
                />
              ))
            }

          </section>
        )
      }

      <Button text="Mostrar más" onClick={onGoMorePokemons} />
    </>
  );
}
