import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../context/ContextProvider';
import axios from 'axios';
import Navbar from './Navbar';


function ProductView() {
  const {id} = useParams()
  console.log(id);
  const {productData , setProductData} = useContext(CartContext);
  const [image , setImage] = useState('');
  const fetchData = async ()=>{
    const res = await axios.get(`https://dummyjson.com/products/${id}`)
    console.log(res.data)
    setProductData(res.data)
    setImage(res.data.images)
  }
  useEffect(()=>{
    fetchData();
  },[id])
  return (
    <div>
      <Navbar />
      <div>
        
      </div>
      
      <div className='w-full min-h-screen flex justify-center '>
        <div className='m-5 w-1/2 h-fit rounded-xl shadow p-5'>
          <div className='w-full flex justify-center'>
            <img 
            className='w-2/3'
            src={image}></img>
          </div>
          <hr className='text-gray-300'></hr>
          <h1 className='text-xl font-semibold my-1'>{productData.title}</h1>
          <button className='border p-2 bg-slate-500 text-white rounded'>{productData.price}</button>
          <p  className='text-gray-500'>{productData.description}</p>
          <p  className='bg-slate-200 w-fit px-2 rounded'>{productData.category}</p>
          <p>{productData.brand}</p>
          <p>{productData.rating}</p>
          <p>{productData.stock}</p>
          <p>{productData.warrantyInformation}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductView
