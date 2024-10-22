import { useState, useEffect } from "react";
import './styles/main.css'
import './styles/App.css'
import useFetchPokemons from './components/useFetchPokemons';
import Card from './components/Card';



function App() {
  const arrayOfPokemons = useFetchPokemons(10);
  const [ sortedArrayOfPokemons, setSortedArrayOfPokemons] = useState([]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return setSortedArrayOfPokemons([...array]);
  };
  
  useEffect(() => {
    if (arrayOfPokemons.length > 0) {
      shuffle(arrayOfPokemons);
      setSortedArrayOfPokemons(arrayOfPokemons);
    }
  }, [arrayOfPokemons]);

  const handleClick = () => {
    shuffle(sortedArrayOfPokemons)
  }

    return (
    <>
      <div>
        <h1>Memory Game</h1>
        <p>Score: </p>
        <p>Best Score:</p>
      </div>
      <div className="cards">
        {sortedArrayOfPokemons.length === 0
        ? <p>Is loading...</p>
        :  sortedArrayOfPokemons.map((pokemon) => (
            <Card 
              key = { pokemon.id } 
              pokeImg = { pokemon.img }  
              name = { pokemon.name }
              onClick = { handleClick }
            />
          ))}
      </div>
    </>
  )
}

export default App
