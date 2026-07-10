import React, { useContext ,useEffect, useState } from 'react'
import axios from 'axios';
import { CartContext } from './context/ContextProvider';

export default function useFetch(url) {
    const { products , setProducts  } = useContext( CartContext ) ;
    // const [data,setData] = useState([])
    const fetchProducts = async ()=>{
        try{
            const res = await axios.get("https://dummyjson.com/products?limit=20");
            console.log(res.data.products)
            setProducts(res.data.products);
            console.log(products);
        }
        catch(err){
            console.error(err)
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[]);
    // return data ;
}
