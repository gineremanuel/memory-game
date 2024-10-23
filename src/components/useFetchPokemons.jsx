import { useEffect, useState } from "react";

const useFetchPokemons = (limit) => {
const [ arrayOfPokemons, setArrayOfPokemons] = useState([]);
let differentPokemonId = 0

  useEffect(() => {
    const fetchData = async() => {
      try {
        let pokemons = [];
        for (let i = 1; i <= limit; i++) {
          differentPokemonId += 10
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${differentPokemonId}`);
          if(!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          pokemons.push({img: data.sprites.front_default, name: data.name, id: differentPokemonId});
        }
        setArrayOfPokemons(pokemons)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    };
    fetchData();
  }, []);
  return arrayOfPokemons;
}

export default useFetchPokemons;