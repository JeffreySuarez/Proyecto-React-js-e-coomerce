import React, { useEffect, useState } from "react";
import "./itemListContainer.css";
import { ItemList } from "../../componets/itemList/itemList";
import { useParams } from "react-router-dom";
import { Loading } from "../../componets/loading/loading";
import ITEMS from "../../data/items.json";
// import { dataBase } from "../../Firebase/firebase";

export const ItemListContainer = () => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   const db = getFirestore();
  //   const itemCollection = db.collection("items");
  //   itemCollection.get().then((querySnapshot) => {
  //     if(querySnapshot.size === 0){
  //       console.log('No hay resultados');
  //     }
  //     setItems(querySnapshot.docs.map(doc => doc.data()));
  //   }).catch ((error) => {
  //     console.log('Error buscando productos', error );
  //   }).finally (() => {
  //     setLoading(false);
  //   })
  // }

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
    }, 3000);
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
