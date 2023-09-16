import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

interface Pokemon {
  _id: string;
  pokemonNum: number;
  name: string;
  sprite: string;
  type: string;
  type2: string;
  level: number;
}

const Collection: React.FC = () => {
  // All filters
  const [cardCollection, setCardCollection] = useState<Pokemon[]>([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [sortByName, setSortByName] = useState(false);
  const [sortByRarity, setSortByRarity] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch("/collection");
      const json = await response.json();

      if (response.ok) {
        setCardCollection(json);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="collectionContainer">
      <div className="pokemonCards">
        {cardCollection &&
          cardCollection.map((pokemon) => (
            <ProductCard key={pokemon._id} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
