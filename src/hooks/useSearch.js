import { useContext } from 'react';
import { PokemonContext } from '@/context';
import { types } from '@/store';

export const useSearch = () => {
  const { dispatch } = useContext(PokemonContext);

  const setMessage = (text) => {
    dispatch({
      type: types.ADD_MESSAGE,
      payload: text
    });
    setTimeout(() => {
      dispatch({
        type: types.RESET_MESSAGE,
      });
      dispatch({
        type: types.UPDATE_TEXT_SEARCH,
        payload: '',
      })
    }, 3000);
  }


  const setTextSearch = ({ target }) => {
    const { value = '' } = target;
    dispatch({
      type: types.UPDATE_TEXT_SEARCH,
      payload: value,
    })
  }
  return {
    setMessage,
    setTextSearch
  }
}
