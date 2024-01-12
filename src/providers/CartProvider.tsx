import React, { FC, useState } from "react";
import { CartContext } from "../Contexts";

type CartProviderProps = {
  children: any;
};

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);
  console.log("cart", cart);

  function handleAddToCart(productId: number, count: number) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    console.log("newCart", newCart);
    setCart(newCart);
  }

  function updateCart(newCart: any) {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const calculatedTotalCount = Object.keys(cart).reduce((previous, current) => {
    return previous + cart[+current];
  }, 0);

  const cartString = JSON.stringify(cart);
  localStorage.setItem("my-cart", cartString);

  const cartValue = {
    cart,
    setCart,
    totalCount: calculatedTotalCount, // Update to use the calculated total count
    handleAddToCart,
    updateCart,
    map: (children: any, fn: any) => children,
    forEach: (children: any, fn: any) => {},
    count: (children: any) => 0,
    only: (children: any) => children,
    toArray: (children: any) => [], // Ensure this matches the expected properties
  };

  return (
    <CartContext.Provider value={cartValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
