import React from "react"
import { Fragment } from "react"
import './itemDetail.css'
import {Item} from '../item/item'

export const ItemDetail = ({items}) => {
    return(
        <Fragment>

            <Item  key={items.id} item={items}/>

        </Fragment>
    )
}