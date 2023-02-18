import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons } from './store/slices/pokemon';

function App() {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handleGetPokemons = () => {
    dispatch(getPokemons(page));
  };

  return (
    <div className="App">
      <h1>Pokemon App</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.url}>{pokemon.name}</li>
          ))}
        </ul>
      )}
      <button disabled={isLoading} onClick={handleGetPokemons}>
        Next Page
      </button>
    </div>
  );
}

export default App;
