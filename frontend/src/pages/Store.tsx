import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

// Create structure for our Pokemon
interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  type: string;
  type2: string;
  level: number;
}

const Store: React.FC = () => {
  // list of Pokemon
  const [pokemonList, setPokemon] = useState<Pokemon[]>([]);

  /**
   * Function that takes in an id and gets the data for the corresponding Pokemon
   * @param {number} id number to identify pokemon
   * @returns {Pokemon} a pokemon object with the values fetched from the API
   */
  const getPokemonData = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    // Generate card level (level of card ranges from 1 - 3)
    const cardLevel = Math.floor(Math.random() * 3) + 1;

    // Create our pokemon object with the fetched data
    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      type: data.types[0].type.name,
      type2: data.types[1] ? data.types[1].type.name : null,
      level: cardLevel,
    };
    return pokemon;
  };

  /**
   * Function to load our daily Pokemon cards
   */
  const getPokemon = async () => {
    let loadedArray: Pokemon[] = [];

    // Get 4 random Pokemon cards for daily store
    for (let i = 1; i <= 4; i++) {
      // Generate random Pokemon ID and load into our array
      const pokemonID = Math.floor(Math.random() * 1000) + 1;
      loadedArray.push(await getPokemonData(pokemonID));
    }

    // set our list of Pokemon to loadedArray
    setPokemon(loadedArray);
    console.log(loadedArray);
  };

  // Load cards on first render
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="cardContainer">
      <div className="pokemonCards">
        {pokemonList.map((pokemon) => (
          <ProductCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Store;
