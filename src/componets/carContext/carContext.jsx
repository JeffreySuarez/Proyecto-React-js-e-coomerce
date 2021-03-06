import { useEffect, useState } from "react";

import { createContext } from "react";
import { Cart } from "../cart/cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(0);
  const [productos, setProductos] = useState([]);

  // const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   const nextTotal = cantidad
  //     .map(({ item, quantity }) => item.price * quantity)
  //     .reduce(
  //       (cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice,
  //       0
  //     );

  //   setTotal(nextTotal);
  // }, [cantidad]);

  const getOrder = () => {
    const items = cantidad.map(({ item }) => ({
      id: item.id,
      title: item.title,
      price: item.price,
    }));
    return {
      buyer: {
        name: "Jeffrey",
        phone: "+57 342 546 567",
        email: "jasr7221@gmail.com",
      },
      items,

      //falta realizar el total
    };
  };

  const addItem = (item, cantidad) => {
    console.log("items: ", item);

    const isInCart = productos.some(
      (producto) => producto.item.id === item[0].id
    );

    if (!isInCart) {
      const nuevaLista = {
        item: {
          title: item[0].title,
          id: item[0].id,
          pictureUrl: item[0].pictureUrl,
          price: item[0].price,
        },
        quantity: cantidad,
      };

      setProductos([...productos, nuevaLista]);
    } else {
      productos.forEach((producto) => {
        if (producto.item.id === item[0].id) {
          return (producto.quantity += cantidad);
        }
      });
    }
  };

  function circuloAzulCarrito() {
    let total = 0;
    if (productos.length > 0) {
      productos.forEach((producto) => {
        total += producto.quantity;
      });
    }
    console.log("total:", total);
    setCantidad(total);
  }

  function removerItem(itemId) {
    setProductos(productos.filter((producto) => producto.item.id === !itemId));
  }

  function clear() {
    setProductos([]);
    setCantidad(0);
  }

  useEffect(() => {
    circuloAzulCarrito();
  }, [productos]);

  return (
    <CartContext.Provider
      value={{
        productos,
        cantidad,
        removerItem,
        clear,
        addItem,
        circuloAzulCarrito,
        // total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
