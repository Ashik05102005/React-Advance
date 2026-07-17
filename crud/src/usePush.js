import axios from 'axios'
import React, { useEffect } from 'react'

export default function usePush( data) {
    const datapush= async()=>{
        const res = await axios.post('http://localhost:3000/products' , data);
        console.log(res);
        return 
    }
  useEffect(()=>{
    datapush()
  },[])
}
