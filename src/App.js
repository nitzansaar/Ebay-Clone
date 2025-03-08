import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";
import AuthForm from "./Components/AuthForm";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [authType, setAuthType] = useState("login"); // 'login' or 'register'

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAuthSubmit = ({ email, password }) => {
    // Mock authentication logic
    if (authType === "login") {
      alert(`Logged in with email: ${email}`);
      setIsLoggedIn(true);
      setShowAuthForm(false);
    } else {
      alert(`Registered with email: ${email}`);
      setAuthType("login"); // Switch to login after registration
    }
  };

  // Inside App.js
const handleLogout = () => {
  setIsLoggedIn(false);
  setShowAuthForm(false);
};


  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {!isLoggedIn && (
        <div className="auth-buttons">
          <button onClick={() => { setShowAuthForm(true); setAuthType("login"); }}>
            Login
          </button>
          <button onClick={() => { setShowAuthForm(true); setAuthType("register"); }}>
            Register
          </button>
        </div>
      )}
      {showAuthForm && (
        <AuthForm type={authType} onSubmit={handleAuthSubmit} />
      )}
      {isLoggedIn && (
        <>
          <SearchBar onSearch={handleSearch} />
          <ProductList searchQuery={searchQuery} />
        </>
      )}
    </div>
  );
}

export default App;