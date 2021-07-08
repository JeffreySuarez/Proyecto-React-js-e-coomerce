
import React, { useEffect, useState } from 'react'
import './itemListContainer.css'
import { ItemList } from '../../componets/itemList/itemList'
import { useParams } from 'react-router-dom'
import ITEMS from '../../data/items.json'



export const ItemListContainer = () => {

    const {id} = useParams()

    const [items, setItems] = useState([])

   

    useEffect(() => {

        const getItems = () => {

            return id ? ITEMS.filter((item) => item.categoryId === id): ITEMS
        }
        const items = getItems()
        setItems(items)
    }, [id])
    console.log(items)

    return (
        <div>
            <ItemList items={items}/>
            
        </div>
    )

}