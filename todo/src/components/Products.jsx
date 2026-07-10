import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../useFetch'
import { CartContext } from '../context/ContextProvider'
import { useNavigate } from 'react-router-dom'

function Products() {
        const {products , setProducts } = useContext(CartContext);
        const navigate = useNavigate();
        const fetchData=()=>{
            useFetch("url")
        }
        fetchData()
        const navigateFunction=(id)=>{
            navigate(`/product/${id}`);
        }
  return (
    <div className='m-2 min-h-screen shadow-2xl rounded-xl md:p-5 px-8 py-2 flex justify-around gap-2 flex-wrap '>
        {products.map((data)=>(
            <div 
            className='h-90 px-5 md:w-70 w-full shadow rounded-xl overflow-auto border border-gray-100 mt-2'
            onClick={()=>navigateFunction(data.id)}
            key={data.id}
        >
            <div className='flex justify-center'>
            <img src={data.images[0]} className='w-50'></img>
        </div>
        <hr className=' text-gray-300'></hr>
        <div className='flex flex-col p-3  '>
            <p className='text-gray-700'>{data.title}</p>
            <p>$ {data.price}</p>
            <div className='flex gap-2 '>
                {data.tags.map((tag)=>(
                    <p key={tag} className='bg-gray-100 px-2 py-1 rounded-xl'>{tag}</p>
                ))}
            </div>
        </div>   
        </div>))}
    </div>
  )
}

export default Products


// const fetch = async ()=>{
//     try{

//         const res = await axios.get("https://dummyjson.com/products?limit=20")
//         console.log(res.data.products);
//         setData(res.data.products);
//     }
//     catch(err){
//         console.log(err)
//     }
// }