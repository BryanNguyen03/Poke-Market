import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">Logo</Link>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
