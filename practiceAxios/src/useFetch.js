import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data,setData] = useState([])
  const fetchData =async()=>{
    try{
        console.log("Fetching:", url);
        const res = await axios.get(url);
        console.log(res.data);
        setData(res.data)
      }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchData()
  },[url])
  return data;
}
