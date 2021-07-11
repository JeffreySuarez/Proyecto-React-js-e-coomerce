import React from "react";

import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div className="carrito">
      <div className="iconCarrito ">
        <i class="far fa-shopping-bag"></i>
        <span className="cantidadCarrito"></span>
      </div>
    </div>
  );
};
