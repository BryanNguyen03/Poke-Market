import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useAuthContext } from "../hooks/useAuthContext";
import collectionsLogo from '../assets/collectionsLogo.png'
import '../styles/Collection.css'

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
      <img className="logo" src={collectionsLogo}/>
      <hr style={{color: '#fff', backgroundColor: '#fff', width: '75%', height: '2px', margin: '2vh 0'}}/>

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
