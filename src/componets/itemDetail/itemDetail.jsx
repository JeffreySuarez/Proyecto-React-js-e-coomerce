import React from "react"
import {ItemCount} from "../itemCount/itemCount"
import './itemDetail.css'
// import {Item} from '../item/item'
// import {Link} from 'react-router-dom'
import {useState} from "react"
import { useHistory } from "react-router"
import {useContext} from 'react'
import {CartContext} from '../carContext/carContext'
// import { ItemList } from "../itemList/itemList"
import {Item} from '../item/item'
import { ItemList } from "../itemList/itemList"


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
                {item.map((item) => (
                        <Item key={Item.id} item={item}>
                            {!count && <ItemCount stock={20} 
                    onAdd={onAdd} />}
                {!!count && <button onClick = {finishPurchase}>Terminar mi compra</button>}

                        </Item>
                        
                ) )}
               
                {!count && <ItemCount stock={20} 
                    onAdd={onAdd} />}
                {!!count && <button onClick = {finishPurchase}>Terminar mi compra</button>}
               
                
            </div>  
        </div>
    )
}