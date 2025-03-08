import React from "react";

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <h1>My eBay Clone</h1>
      <div className="nav-links">
        {isLoggedIn ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;