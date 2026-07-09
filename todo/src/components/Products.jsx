import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../useFetch'
import { CartContext } from '../context/shopCartContext'

function Products() {
    const [data , setData] = useState([])
    const { productList , productDispatch } = useContext(CartContext);
    let res;
    useEffect(()=>{
       res = useFetch("url");
    },[])
  return (
    <div className='m-2 min-h-screen shadow-2xl rounded-xl md:p-5 px-8 py-2 flex justify-around gap-2 flex-wrap '>
        {/* {data.map((data)=>(
            <div 
            className='h-80 px-5 md:w-70 w-full shadow rounded-xl overflow-auto border border-gray-100 mt-2'
            key={data.id}
        >
            <div className='flex justify-center'>
            <img src={data.images[0]} className='w-50'></img>
        </div>
        <hr className=' text-gray-300'></hr>
        <div className='flex flex-col gap-2 '>
            <p className='text-gray-700'>{data.title}</p>
            <p>$ {data.price}</p>
            <div className='flex gap-2 '>
                {data.tags.map((tag)=>(
                    <p className='bg-gray-100 px-2 py-1 rounded-xl'>{tag}</p>
                ))}
            </div>
        </div>   
        </div>))} */}
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