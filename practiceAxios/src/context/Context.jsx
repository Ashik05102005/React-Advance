import React, { createContext, useState } from 'react'

export const Context = createContext();

function ContextProvider({children}){
 const [page, setPage] = useState(1)
  return (
    <Context.Provider value={{page ,setPage}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider;