import React, { useEffect, useState } from "react";
import "./itemListContainer.css";
import { ItemList } from "../../componets/itemList/itemList";
import { useParams } from "react-router-dom";
import { Loading } from "../../componets/loading/loading";
// import ITEMS from "../../data/items.json";
import { getFirestore } from "../../Firebase/firebase";
import { Cart } from "../../componets/cart/cart";
// import { getFirebase } from "../../Firebase/firebase";

export const ItemListContainer = () => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const itemCollection = db.collection("productos");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setItems(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, [id]);

  console.log(id);
  console.log(items);

  // useEffect(() => {
  //   setLoading(true);

  //   const getItems = () => {
  //     return id ? ITEMS.filter((item) => item.categoryId === id) : ITEMS;
  //   };

  //   setTimeout(() => {
  //     // const items = getItems();
  //     const items = getItems();
  //     setItems(items);
  //     setLoading(false);
  //   }, 3000);
  // }, [id]);

  useEffect(() => {
    const orders = db.collection("orders");
    const newOrder = {
      buyer: userInfo,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: price(),
    };
    orders.add(
      newOrder
        .then(({ id }) => {
          setOrderId(id);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        })
    );
  });

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
