import React from "react";
import "./item.css";

import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  const { id, title, price, description, pictureUrl } = item;

  return (
    <div className="item1" id={id}>
      <h3>{title}</h3>
      <img src={pictureUrl} alt="imagenProducto" />
      <p>{description}</p>
      <p>$ {price}</p>
      <Link to={`/item/${id}`} className="item">
        <button className="comprar">COMPRAR</button>
      </Link>
    </div>
  );
};
