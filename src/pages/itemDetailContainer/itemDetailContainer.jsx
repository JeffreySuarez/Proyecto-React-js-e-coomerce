import React, { useEffect, useState } from 'react'
import './itemDetailContainer.css'
import { ItemDetail } from '../../componets/itemDetail/itemDetail'
import { useParams } from 'react-router-dom'
import ITEMS from '../../data/items.json'



export const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState([])

    

    useEffect(() => {

        const getItem = () => {
            
            return id ? ITEMS.filter((item) => item.itemId === id): ITEMS
            
            // return {
            //         id: 1,
            //         title: 'producto5',
            //         description: 'detalle',
            //         price: 1000,
            //         pictureUrl: '',
            //     } 
        }
        const item = getItem()
        setItem(item)
    }, [id])

    return (
        <div>
            <ItemDetail items={item}/>
        </div>
    )

}