import React, { Children, useReducer, useState } from 'react'
import { createContext } from 'react'



export const CartContext = createContext();

export default function ContextProvider({ children }){
    const [products , setProducts] = useState([]);
    const [productData , setProductData] = useState([]);
    
    return (
        <CartContext.Provider 
        value={{products , setProducts ,productData , setProductData}} >
            {children} 
        </CartContext.Provider>
    )
};

