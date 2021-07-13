import React, { useContext, useEffect } from "react";
import { CartContext } from "../carContext/carContext";
import { Link } from "react-router-dom";

import "./cartWidget.css";

export const CartWidget = () => {
  const { cantidad, circuloAzulCarrito, productos } = useContext(CartContext);

  useEffect(() => {
    circuloAzulCarrito();
  }, [productos]);

  return (
    <Link to="/cart">
      <div className="carrito">
        <div className="iconCarrito ">
          <i class="far fa-shopping-bag"></i>
          <span className="cantidadCarrito"> {cantidad} </span>
        </div>
      </div>
    </Link>
  );
};
