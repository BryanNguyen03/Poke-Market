import React, { useState, useEffect } from "react";
import gifPikachu from '../assets/pikachu.gif'
import ProgressBar from "./ProgressBar";
import '../styles/Home.css'
import { useAuthContext } from "../hooks/useAuthContext";

// Structure for our Pokemon data
interface Pokemon {
  _id: string;
  pokemonNum: number;
  name: string;
  sprite: string;
  type: string;
  type2: string;
  level: number;
}


const Home = () => {
  const [cardCollection, setCardCollection] = useState<Pokemon[]>([]);
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
  
  return <div className="App">
    <div className="main-container">
      <div>Welcome to PokeMarket!</div>
      <p>
        This is a project made by Bryan Nguyen and Ricky Tran using the MERN Stack in TypeScript. Enjoy!
      </p>
      {/* ProgressBar */}
      <ProgressBar progress={cardCollection.length / 1000}/>
      <p>
        The bar shows the number of Pokemon you have versus the total number of Pokemon available. Best of luck collecting!
      </p>
    </div>
    <img className="gif" src={gifPikachu}/>
  </div>;
};

export default Home;