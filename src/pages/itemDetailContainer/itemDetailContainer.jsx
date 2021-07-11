import React, { useEffect, useState } from 'react'
import './itemDetailContainer.css'
import { ItemDetail } from '../../componets/itemDetail/itemDetail'
import { useParams } from 'react-router-dom'
// import ITEMS from '../../data/items.json'
import ITEM from '../../data/itemDetail.json'



export const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState([])
   

    useEffect(() => {

        const getItem = () => {
            
            return id ? ITEM.filter((item) => item.itemId === id) : ITEM
        
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