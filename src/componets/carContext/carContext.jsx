
import { useState } from "react";

import { createContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [producto, setProducto] = useState(0);

    console.log(producto)
    return (
        <CartContext.Provider value={ setProducto }>
           {children}
        </CartContext.Provider>
    )

}