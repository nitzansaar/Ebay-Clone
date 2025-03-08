import React from "react";

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg"
          alt="eBay Logo"
          className="logo"
        />
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search for anything" />
        <button>Search</button>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;