import React from "react"
import {ItemCount} from "../itemCount/itemCount"
import './itemDetail.css'
import {Item} from '../item/item'
import {Link} from 'react-router-dom'


export const ItemDetail = ({items}) => {
    return(
        <div>

            <Item  key={items.id} item={items}/>
            <ItemCount 
            stock="20"
            onAdd={() => alert ("El producto se ha agregado a compras")}/>

            <Link to="/cart">
                <button>Termina tu compra</button>
            </Link>
            
        </div>
    )
}