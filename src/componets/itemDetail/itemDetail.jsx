import React from "react"
import {ItemCount} from "../itemCount/itemCount"
import './itemDetail.css'
// import {Item} from '../item/item'
// import {Link} from 'react-router-dom'
import {useState} from "react"
import { useHistory } from "react-router"
import {useContext} from 'react'
import {CartContext} from '../carContext/carContext'


export const ItemDetail = ({item}) => {

    const [count, setCount] = useState(0);
    const history = useHistory();

    const setProducto = useContext(CartContext)

    const onAdd = (quantity) => {
        setCount(quantity);
        setProducto ( quantity ) ;
    }

    const finishPurchase = () => {
        history.push('/cart')
    }

    return(
        <div>

            <div>
                <h2>{item.title}</h2>
                <img src={item.pictureUrl} alt="imagenProducto" />
                <p>{item.description}</p>
                <p>{item.price}</p>
                 {!count && <ItemCount stock={20} 
                onAdd={onAdd} />}
                {!!count && <button onClick = {finishPurchase}>Terminar mi compra</button>}
            </div>

           
               
            
        </div>
    )
}