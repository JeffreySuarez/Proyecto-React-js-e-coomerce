import { useState } from "react";

import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(0);
  const [producto, setProducto] = useState(0);

  const handleSetCantidad = () => {
    setCantidad();
  };

  const handleSetProducto = () => {
    setProducto();
  };

  console.log(cantidad);
  console.log(producto);
  return (
    <CartContext.Provider value={(handleSetCantidad, handleSetProducto)}>
      {children}
    </CartContext.Provider>
  );
};
