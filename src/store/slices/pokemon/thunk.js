import { startLoadingPokemons, setPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    // Start Loading
    dispatch(startLoadingPokemons());

    // Fetch Pokemon
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}
    `);
    const data = await resp.json();
    // Set Pokemon
    dispatch(setPokemons({ data: data.results, page: page + 1 }));
  };
};
