import React, { createContext , useState } from 'react'

export const MyContext = createContext();

function ContextProvider({children}) {
    const [productData , setProductData]= useState([]);
        
        const [edit , setEdit] = useState(null);
        
  return (
    <MyContext.Provider value={{productData , setProductData , edit , setEdit}}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextProvider ;