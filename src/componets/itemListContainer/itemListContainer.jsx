
import React, { useEffect, useState } from 'react'
import './itemListContainer.css'
import { ItemList } from '../itemList/itemList'



export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    

    useEffect(() => {

        const getItems = () => {

            return [
                {
                    id: 1,
                    title: 'producto1',
                    description: 'detalle',
                    price: 1000,
                    pictureUrl: '',
                },
                {
                    id: 2,
                    title: 'producto2',
                    description: 'detalle',
                    price: 1000,
                    pictureUrl: '',
                },
                {
                    id: 3,
                    title: 'producto3',
                    description: 'detalle',
                    price: 1000,
                    pictureUrl: '',
                },
                {
                    id: 4,
                    title: 'producto4',
                    description: 'detalle',
                    price: 1000,
                    pictureUrl: '',
                },
            ]
        }
        const items = getItems()
        setItems(items)
    }, [])

    return (
        <div>
            <ItemList items={items}/>
        </div>
    )

}