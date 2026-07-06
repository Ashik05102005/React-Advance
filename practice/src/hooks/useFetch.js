import axios from "axios";
import React, { useEffect, useState } from "react";
 export default function useFetch(url){
    const [data,setData] = useState([])
    const [pages , setPages] =useState(0);
    useEffect(()=>{
        fetchUserList();
    },[url])
    async function fetchUserList (){
        const res = await axios.get(url);
        setPages(res.data.pages);
        setData(res.data.data);

        // const total = res.data.pages
        // setData(res.data.data);
       }
    return {res : data , total :  pages} ;
 }