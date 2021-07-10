
import React from 'react'
import {Fragment} from 'react'
import './itemList.css'
import {Item} from '../item/item'
import { Link } from 'react-router-dom'



export const ItemList = ({items}) => {

    return (
        <div className='item'>
            {items.map((item) => (
                <Item  key={item.id} item={item}/> 
                
            ))}
          
        </div>
    )

}