
import React from 'react'
import {Fragment} from 'react'
import './itemList.css'
import {Item} from '../item/item'



export const ItemList = ({items}) => {

    return (
        <Fragment>
            {items.map((item) => (
                <Item  key={item.id} item={item}/> 
            ))}
        </Fragment>
    )

}