import React from "react";
import { ItemCount } from "../itemCount/itemCount";
import "./itemDetail.css";
// import {Item} from '../item/item'
// import {Link} from 'react-router-dom'
import { useState } from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import { CartContext } from "../carContext/carContext";
// import { ItemList } from "../itemList/itemList"
import { Item } from "../item/item";
import { ItemD } from "../itemD/itemD";

export const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(0);
  const history = useHistory();

  const handleSetCantidad = useContext(CartContext);
  const handleSetProducto = useContext(CartContext);

  const onAdd = (quantity, productos) => {
    setCount(quantity);
    handleSetCantidad(quantity);
    handleSetProducto(productos);
    console.log(quantity);
    console.log(productos);
  };

  //   const onAdd = (productos) => {
  //     handleSetProducto(productos);
  //   };

  const finishPurchase = () => {
    history.push("/cart");
  };

  return (
    <div>
      <div className="itemDetalle">
        {item.map((item) => (
          <ItemD key={Item.id} item={item}></ItemD>
        ))}
      </div>
      <div className="itemButtonCounter">
        <div>{!count && <ItemCount stock={20} onAdd={onAdd} />}</div>
        <div className="itemTerminar">
          {!!count && (
            <button onClick={finishPurchase}>Terminar mi compra</button>
          )}
        </div>
      </div>
    </div>
  );
};
