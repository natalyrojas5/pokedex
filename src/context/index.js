'use client'

import { createContext, useReducer } from 'react';
import { initialState, reducer } from '@/store';

export const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PokemonContext.Provider value={{
      state, dispatch
    }}>
      {children}
    </PokemonContext.Provider>
  )
}