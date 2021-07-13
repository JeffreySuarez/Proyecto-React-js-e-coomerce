import React, { useEffect, useState } from "react";
import "./itemListContainer.css";
import { ItemList } from "../../componets/itemList/itemList";
import { useParams } from "react-router-dom";
import { Loading } from "../../componets/loading/loading";
import ITEMS from "../../data/items.json";

export const ItemListContainer = () => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getItems = () => {
      return id ? ITEMS.filter((item) => item.categoryId === id) : ITEMS;
    };

    //tiempo loadingde la pagina

    setTimeout(() => {
      const items = getItems();
      setItems(items);
      setLoading(false);
    }, 4000);
  }, [id]);
  console.log(items);

  return (
    <section className="item">
      {loading ? (
        <Loading clasName="loading" />
      ) : (
        <div>
          {items.length > 0 ? (
            <ItemList items={items} />
          ) : (
            <p>Esta ventana no contiene productos.</p>
          )}
        </div>
      )}
    </section>
  );
};
