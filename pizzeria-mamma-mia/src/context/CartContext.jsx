import React, { createContext, useState, useContext } from 'react';

// 1. Creación del Contexto
export const CartContext = createContext();

// 2. Creación del Provider
const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

  // Funciones para modificar el estado global

  const addToCart = (pizza) => {
    const index = cart.findIndex((item) => item.id === pizza.id);
    if (index !== -1) {
      // Si ya existe, aumentamos cantidad
      const newCart = [...cart];
      newCart[index].count++;
      setCart(newCart);
    } else {
      // Si no existe, lo agregamos con count 1
      const newPizza = { ...pizza, count: 1 };
      setCart([...cart, newPizza]);
    }
  };

  const increaseQuantity = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  const decreaseQuantity = (id) => {
    const newCart = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
      .filter((item) => item.count > 0); // Eliminamos si llega a 0
    setCart(newCart);
  };

  // Cálculo del total
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;