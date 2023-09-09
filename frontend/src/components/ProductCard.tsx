import React, { useEffect } from "react";
import "../styles/ProductCard.css";

// Structure for our Pokemon data
interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  type: string;
  type2: string;
  number: number;
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

const ProductCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  // map for colour codes we'll be using for the cards depending on the pokemons typing
  const typeColours = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

  return (
    <div className={`pokemonCard-${pokemon.type}`}>
      <div className="pokemonImage">
        <img src={pokemon.sprite} alt="pokemon sprite" />
      </div>
      <div className="pokemonNumber">
        <p>#{pokemon.id}</p>
      </div>
      <div className="pokemon">
        <div className="pokemonName">
          <p>{pokemon.name}</p>
        </div>

        {pokemon.type2 != null ? (
          <div className="pokemonTyping">
            <p className={`type-${pokemon.type}`}>{pokemon.type}</p>
            <p className={`type-${pokemon.type2}`}>{pokemon.type2}</p>
          </div>
        ) : (
          <div className="pokemonTyping">
            <p className={`type-${pokemon.type}`}>{pokemon.type}</p>
          </div>
        )}
      </div>
      <style>
        {`
      .pokemonCard-${pokemon.type}{
        position: relative;
        padding: 30px 50px;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        background: radial-gradient(circle at 50% 0%, ${
          (typeColours as Record<string, string>)[pokemon.type]
        } 50%, transparent 36%)
      } ;
    `}
      </style>
    </div>
  );
};

export default ProductCard;
