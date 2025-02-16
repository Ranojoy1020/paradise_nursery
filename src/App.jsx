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
    if (cart.find((item) => item.id === plant.id)) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      return;
    }
    else{
      plant.quantity = 1;
    }
    setCart((prev) => [...prev, plant]);
  };

  const removeFromCart = (plant) => {
    if (cart.find((item) => item.id === plant.id)) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );

      if(plant.quantity === 1) deleteFromCart(plant);

      return;
    }
    setCart((prev) => [...prev, plant]);
  };

  const deleteFromCart = (plant) => {
    setCart((prev) => prev.filter((item) => item.id !== plant.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, deleteFromCart }}>
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
