import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(response=>setData(response.data))
        .catch(err=>console.log(err));
    },[])
    const deleteData=(id)=>{
      const confirm=window.confirm("Do you like to delete")
      if(confirm){
        axios.delete(`http://localhost:3000/users/${id}`)
        .then(res=>location.reload())
      }
    }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen w-full p-3 rounded bg-gray-200'>
      <div className='h-20 w-full  rounded p-5 flex justify-between items-center'>
        <div className='text-2xl text-blue-900'>USER DETAILS</div>
        <div className='text-xl border bg-green-500 text-white p-3 rounded-xl'><Link to="/create/">Add User</Link></div>
        
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Age</th>
            <th className="p-3 text-left">Read</th>
            <th className="p-3 text-left">Edit</th>
            <th className="p-3 text-left">Delete</th>

          </tr>
        </thead>

        <tbody>
          {data.map((user,index) => (
            <tr
              key={user.id}
              className="odd:bg-white even:bg-gray-100 hover:bg-blue-50"
            >
              <td className="p-3">{index+1}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.age}</td>
              <td><Link to={`/read/${user.id}`} className='bg-gray-500 text-white px-4 py-1 rounded-xl'>Read</Link></td>
              <td><Link to={`/edit/${user.id}`}className='bg-blue-500 text-white px-4 py-1 rounded-xl'>Edit</Link></td>
              <td><button className='bg-red-500 text-white px-4 py-1 rounded-xl'
                  onClick={e=>deleteData(user.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home