import React from "react";
import { ItemCount } from "../itemCount/itemCount";
import "./itemDetail.css";
import { useState } from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import { CartContext } from "../carContext/carContext";
import { Item } from "../item/item";
import { ItemD } from "../itemD/itemD";

export const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(0);
  const history = useHistory();

  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setCount(quantity);
    addItem(item, quantity);

    console.log(quantity);
    console.log(item);
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
