
import React from 'react'
import './item.css'



export const Item = ({item}) => {
    const {id, title, price, description, pictureUrl} = item

    return (
        <div id={id}>
            <h2>{title}</h2>
            <img src={pictureUrl} alt="imagenProducto" />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )

}