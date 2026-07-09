import axios from "axios";
import React, { createContext, useState } from "react";

export const newContext = createContext ();

export default function ContextProvider({children}){
    const [page,setPage] = useState(1)
    const [counter,setCounter]= useState(0)
    const [input,setInput]=useState([])
    const [data,setData]=useState([])
    const fetchdataList = async () => {
    const res = await axios.get(`http://localhost:3000/users`);
    setInput(res.data)
  }
  const fetchUser = async (url)=>{
    const  ressponse = await axios.get(url)
    console.log(ressponse.data)
    setData(ressponse.data)
  }
    return (
        <newContext.Provider 
        value={ {counter, setCounter , input ,setInput , data , setData , fetchUser , page, setPage}}>
            {children}
        </newContext.Provider>
    )
}