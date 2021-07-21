import { useContext } from "react";
import { CartContext } from "../carContext/carContext";
import React from "react";

export const Cart = () => {
  const { productos, removerItem, clear } = useContext(CartContext);
  let carro = false;
  if (productos.length > 0) {
    carro = true;
  }

  return (
    <main>
      <div className="cuerpoCarrito">
        <h1>Carrito</h1>

        {carro &&
          productos.map((producto) => (
            <div key={producto.item.id}>
              <ul>
                <li>{producto.item.title}</li>
                <li>Precio Unidad: $ {producto.item.price}</li>
                <li>Cantidad: {producto.quantity}</li>
                <li>
                  $ {Number(producto.quantity) * Number(producto.item.price)}
                </li>
                <li>
                  <button
                    onCLick={() => {
                      removerItem(producto.items.id);
                    }}
                  >
                    Eliminar Producto
                  </button>
                </li>
              </ul>
            </div>
          ))}
        <div>
          <button
            onClick={() => {
              clear();
            }}
          >
            Limpiar Todo
          </button>
        </div>
      </div>
    </main>
  );
};
