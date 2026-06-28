import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function Read() {
  const [data,setData]=useState([])
  const {id}=useParams();
  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${id}`)
    .then(res=>{console.log(res)
      setData(res.data);
    })
    .catch(err=>console.log(err.message));
  },[id])
  return (
    <div className='border w-full min-h-screen flex justify-center items-center '>
      <div className='w-1/2 border border-gray-300 rounded-xl p-5 text-gray-800 shadow-md '>
        <h1>Name :{data.name}</h1>
        <h1>Email :{data.email}</h1>
        <h1>Age :{data.age}</h1>
        <div className='flex justify-end gap-2 my-5'>
          <button className='border rounded-xl bg-blue-500 px-4 py-1 text-white'>Edit</button>
          <button className='border rounded-xl bg-red-500 px-4 py-1 text-white'> delete</button>
          <Link to="/" className='border rounded-xl bg-purple-500 px-4 py-1 text-white'>home</Link>
        </div>
      </div>
    </div> 
  )
}

export default Read