import React, { useState } from "react";
import "./itemCount.css";

export const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleCount = (operator) => {
    if (operator === "+") {
      if (stock > count) {
        setCount(count + 1);
      }
    } else if (operator === "-") {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };

  return (
    <div className="itemCount">
      <div className="itemCountCounter">
        <div className="itemCountBotones">
          <button
            className="botones"
            disabled={stock === 0}
            onClick={() => handleCount("-")}
          >
            -
          </button>
          <p className="countBotones">{count}</p>
          <button
            className="botones"
            disabled={stock === 0}
            onClick={() => handleCount("+")}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="itemCountAgregar"
        disabled={stock === 0}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
