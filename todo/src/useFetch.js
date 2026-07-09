import React, { useContext ,useEffect } from 'react'
import axios from 'axios';
import { CartContext } from './context/shopCartContext';

export default function useFetch(url) {
    const { count } = useContext( CartContext ) ;
    const fetchProducts = async ()=>{
        try{
            const res = await axios.get("https://dummyjson.com/products?limit=20")
            console.log(res.data.products);
            
        }
        catch(err){
            console.error(err)
        }
    }
    fetchProducts();
    // useEffect(()=>{
    //     fetchProducts();
    // },[]);

}
