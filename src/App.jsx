import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons } from './store/slices/pokemon';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.pokemon.isLoading);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return <div className="App">{isLoading && <p>Loading...</p>}</div>;
}

export default App;
