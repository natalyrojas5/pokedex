'use client';

import { useContext, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import '../styles.css';
import { CardPokemon, GoBack, Grid, Message } from '@/components';
import { PokemonContext } from '@/context';
import { usePokemon } from '@/hooks';
import { CARD_NAMES } from '@/types';


export const ViewPokemon = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const { getPokemon } = usePokemon();

  const { state: { pokemon } } = useContext(PokemonContext);

  useEffect(() => {
    getPokemon({ pokemon: name });
  }, [name]);

  const onGoBack = () => {
    router.back();
  };

  return (
    <>
      <GoBack
        onGoBack={onGoBack}
      />
      {
        pokemon.name ?
          (
            <>
              <CardPokemon
                name={pokemon.name}
                img={pokemon.photo}
                hasBtnDetail={false}
                hasDecoration={false}
              />
              <section className='grids scroll'>
                {
                  pokemon.species &&
                  <Grid
                    title="Especie"
                    itemName={CARD_NAMES.SPECIES}
                    items={pokemon.species}
                  />
                }
                {
                  pokemon.abilities &&
                  <Grid
                    title="Habilidades"
                    itemName={CARD_NAMES.ABILITY}
                    items={pokemon.abilities}
                  />
                }
                {
                  pokemon.types &&
                  <Grid
                    title="Tipos"
                    itemName={CARD_NAMES.TYPE}
                    items={pokemon.types}
                    showLine={false}
                  />
                }
              </section>
            </>
          )
          :
          <Message text="No se encontró Pokemón" />
      }
    </>
  )
}
