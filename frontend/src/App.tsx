import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="Navbar"></nav>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/store" Component={Store}></Route>
          <Route path="/cart" Component={Cart}></Route>
        </Routes>
        <div className="Footer"></div>
      </div>
    </Router>
  );
};

export default App;
