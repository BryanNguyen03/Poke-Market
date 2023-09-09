import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

// Create structure for our Pokemon data
interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  type: string;
  type2: string;
  number: number;
}

const Store: React.FC = () => {
  // list of Pokemon
  const [pokemonList, setPokemon] = useState<Pokemon[]>([]);

  /**
   * Function that takes in an id and gets the data for the corresponding Pokemon
   * @param id number to identify pokemon
   * @returns a pokemon object with the values fetched from the API
   */
  const getPokemonData = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    // Create our pokemon object with the fetched data
    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      type: data.types[0].type.name,
      type2: data.types[1] ? data.types[1].type.name : null,
      number: data.order,
    };
    return pokemon;
  };

  /**
   * Function to load all 151 Pokemon into our pokemonList
   */
  const getPokemon = async () => {
    let loadedArray: Pokemon[] = [];
    for (let i = 1; i <= 151; i++) {
      loadedArray.push(await getPokemonData(i));
    }

    setPokemon(loadedArray);
    console.log(loadedArray);
  };

  // Load all pokemon into our array when component first renders
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
