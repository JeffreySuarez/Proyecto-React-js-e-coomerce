import React from "react";
import "./itemD.css";

export const ItemD = ({ item }) => {
  const { id, title, price, description, pictureUrl } = item;

  return (
    <div className="itemD" id={id}>
      <div className="itemImagen">
        <img src={pictureUrl} alt="imagenProducto" />
      </div>

      <div className="itemContenido">
        <h2>{title}</h2>
        <p className="descripcion">
          <span className="descripcionTitulo">Descripcion: </span>
          <span className="descripcionContenido">{description}</span>
        </p>
        <p className="precio">
          <span className="precioPrecio">Precio: $</span>
          <span className="precioValor">{price}</span>
        </p>
      </div>
    </div>
  );
};
