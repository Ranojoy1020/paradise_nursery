import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "./CartContext";
import { Header } from "./components/Header";
import { LandingPage } from "./components/LandingPage";
import { ProductListing } from "./components/ProductListing";
import { ShoppingCart } from "./components/ShoppingCart";

import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prev) => [...prev, plant]);
  };

  const removeFromCart = (idx) => {
    setCart((prev) => prev.filter((item, index) => index !== idx));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
