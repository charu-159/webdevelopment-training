import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div>
      <h1>🛍️ My E-Commerce Store</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
