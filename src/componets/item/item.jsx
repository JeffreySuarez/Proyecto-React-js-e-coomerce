
import React from 'react'
import './item.css'

import {Link} from 'react-router-dom'



export const Item = ({item}) => {
    const {id, title, price, description, pictureUrl} = item

    return (

        <Link to={`/item/${id}`} className="item" id={id}>
            <div>
                <h2>{title}</h2>
                <img src={pictureUrl} alt="imagenProducto" />
                <p>{description}</p>
                <p>{price}</p>
            </div>
           
        </Link>
        
    )

}