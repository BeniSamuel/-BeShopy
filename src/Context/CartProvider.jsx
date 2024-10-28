import React, { useState, createContext, useContext} from 'react'

// Creating the context
export const CartContext = createContext();


const CartProvider = ({ children }) => {

  const [cartData, setCartData] = useState([]);

  const addToCart = (product) => {
    setCartData((prevCart) => [...cartData, product])
  }
  return (
    <CartContext.Provider value={{ cartData, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;