import React, { useEffect, useState } from 'react'
import './itemDetailContainer.css'
import { ItemDetail } from '../itemDetail/itemDetail'



export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    

    useEffect(() => {

        const getItem = () => {
            return {
                    id: 1,
                    title: 'producto5',
                    description: 'detalle',
                    price: 1000,
                    pictureUrl: '',
                } 
        }
        const item = getItem()
        setItem(item)
    }, [])

    return (
        <div>
            <ItemDetail items={item}/>
        </div>
    )

}