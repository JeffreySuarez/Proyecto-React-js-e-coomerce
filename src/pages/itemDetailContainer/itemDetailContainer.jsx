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
            
            return id ? ITEMS.filter((item) => item.itemId === id) : ITEMS
        
        }
        const item = getItem()
       
        setItem(item)
      
    }, [id])
    console.log(id)
    console.log(typeof(id))
    console.log(item)
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )

}