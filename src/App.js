import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import SearchBar from "./Components/SearchBar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import AuthForm from "./Components/AuthForm";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [authType, setAuthType] = useState("login"); // 'login' or 'register'
  const [cart, setCart] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleAuthSubmit = ({ email, password }) => {
    if (authType === "login") {
      // Mock login logic
      alert(`Logged in with email: ${email}`);
      setIsLoggedIn(true);
      setShowAuthForm(false);
    } else {
      // Mock registration logic
      alert(`Registered with email: ${email}`);
      setAuthType("login"); // Switch to login after registration
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          cartCount={cart.length}
          onLoginClick={() => {
            setShowAuthForm(true);
            setAuthType("login");
          }}
          onRegisterClick={() => {
            setShowAuthForm(true);
            setAuthType("register");
          }}
        />
        {showAuthForm && (
          <AuthForm type={authType} onSubmit={handleAuthSubmit} />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SearchBar onSearch={handleSearch} />
                <ProductList searchQuery={searchQuery} addToCart={addToCart} />
              </>
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;