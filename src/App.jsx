import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import {Header} from "./components/Header";
import {LandingPage} from "./components/LandingPage";
import {ProductListing} from "./components/ProductListing";
import {ShoppingCart} from "./components/ShoppingCart";

import './App.css'

// Context for Cart State
const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prev) => [...prev, plant]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};



const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header useCart={useCart}/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing useCart={useCart} />} />
          <Route path="/cart" element={<ShoppingCart useCart={useCart} />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
