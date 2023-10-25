import React, { useState } from "react";
import gifPikachu from '../assets/pikachu.gif'
import '../styles/Home.css'

const Home = () => {
  return <div className="App">
    <div className="main-container">
      <div>Welcome to PokeMarket!</div>
      <p>
        This is a project made by Bryan Nguyen and Ricky Tran using the MERN Stack in TypeScript. Enjoy!
      </p>
      {/* ProgressBar */}
      <p>
        The bar shows the number of Pokemon you have versus the total number of Pokemon available. Best of luck collecting!
      </p>
    </div>
    <img className="gif" src={gifPikachu}/>
  </div>;
};

export default Home;
