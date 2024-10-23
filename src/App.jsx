import { useState, useEffect } from "react";
import './styles/main.css'
import './styles/App.css'
import useFetchPokemons from './hooks/useFetchPokemons';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const arrayOfPokemons = useFetchPokemons(10);
  const [ sortedArrayOfPokemons, setSortedArrayOfPokemons] = useState([]);
  const [ repeteadId, setRepeteadId ] = useState([]);
  const [ score, setScore ] = useState(0);
  const [ highScore, setHighScore ] = useState(0);


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

  const handleClick = (id) => {
    if(repeteadId.includes(id)) {
      setScore(0)
      setRepeteadId([])
    } else {
      const newScore = score + 10
      setScore(newScore)
      setRepeteadId([...repeteadId, id])
      setHighScore((prevHighScore) => {
        return newScore > prevHighScore ? newScore : prevHighScore;
      });
    }
    shuffle(sortedArrayOfPokemons)
  }

    return (
    <div className="body">
      <Header
        score = { score }
        highScore = { highScore }
      />
      <div className="cards">
        {sortedArrayOfPokemons.length === 0
        ? <p>Is loading...</p>
        :  sortedArrayOfPokemons.map((pokemon) => (
            <Card 
              key = { pokemon.id } 
              pokeImg = { pokemon.img }  
              name = { pokemon.name }
              onClick = { () => handleClick(pokemon.id) }
            />
          ))}
      </div>
    </div>
  )
}

export default App
