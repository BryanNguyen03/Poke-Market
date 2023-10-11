import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useAuthContext } from "../hooks/useAuthContext";

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
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchCards = async () => {
      if (!user) {
        return;
      }

      // GET request
      const response = await fetch("/collection", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
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
