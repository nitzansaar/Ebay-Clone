import React from "react";
import { Link } from "react-router-dom";
import ebayLogo from "../ebay-logo.png"; // Adjust the path if needed

function Navbar({ isLoggedIn, onLogout, cartCount, onLoginClick, onRegisterClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={ebayLogo} alt="eBay Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search for anything" />
        <button>Search</button>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <>
            <Link to="/cart">Cart ({cartCount})</Link>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={onLoginClick}>Login</button>
            <button onClick={onRegisterClick}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;