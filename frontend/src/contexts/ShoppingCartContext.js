import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import request from "../utils/request";

const ShoppingCartContext = React.createContext(null);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", [
    { id: 1, name: "test", price: 100, quantity: 1, image: null },
    { id: 2, name: "test2", price: 200, quantity: 2, image: null },
  ]);

  function addToCart(item) {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
      setCartItems([...cartItems]);
    } else {
      setCartItems((cartItems) => [...cartItems, item]);
    }
  }

  function removeFromCart(itemId) {
    setCartItems((cartItems) => {
      return cartItems.filter((item) => item.id !== itemId);
    });
  }

  function incrementQuantity(itemId) {
    setCartItems((cartItems) => {
      return cartItems.map((item) => {
        if (item.id === itemId) {
          item.quantity++;
        }
        return item;
      });
    });
  }

  function decrementQuantity(itemId) {
    setCartItems((cartItems) => {
      return cartItems.map((item) => {
        if (item.id === itemId) {
          item.quantity--;
        }
        return item;
      });
    });
  }

  function setQuantity(itemId, quantity) {
    setCartItems((cartItems) => {
      return cartItems.map((item) => {
        if (item.id === itemId) {
          item.quantity = quantity;
        }
        return item;
      });
    });
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    setQuantity,
  };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
