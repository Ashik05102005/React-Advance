import React, { useReducer, useState } from 'react'
import { createContext } from 'react'


export const CartContext =createContext();

function ShopCartContext({children}) {
    const [count , setcount ] = useState(0)
    const [productList , setProductlist] = useState([])
    
  return (
    < CartContext.Provider value={{ productList , setProductlist , count , setcount }}>
      {children}
    </CartContext.Provider>
  )
}

export default ShopCartContext

