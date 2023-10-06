import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Collection from "./pages/Collection";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/store" Component={Store}></Route>
          <Route path="/collection" Component={Collection}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/signup" Component={Signup}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
