import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <Link className="websiteName" to="/">
        Poke-Market
      </Link>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/collection">Collection</Link>
      </div>

      {!user ? (
        <div className="login-signup-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      ) : (
        <div className="user-section">
          <span className="user-email">{user.email}</span>
          <button className="logout-button" onClick={handleClick}>
            Log out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
