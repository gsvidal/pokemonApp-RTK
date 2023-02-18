import { startLoadingPokemons, setPokemons } from './pokemonSlice';
import { pokemonApi } from '../../../api/pokemonApi';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    // Start Loading
    dispatch(startLoadingPokemons());

    // Fetch Pokemon
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    // Set Pokemon
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
