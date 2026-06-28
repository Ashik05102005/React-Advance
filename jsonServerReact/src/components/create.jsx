import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create() {

  const [values,setValues] = useState({
    name:'',
    email:'',
    age:''
  })
  const navigate=useNavigate();
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(e.target)
    axios.post('http://localhost:3000/users',values)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    navigate('/')
    
  }

    return (
    <div className="min-h-screen flex  items-center justify-center ">
      <form className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
      onSubmit={submitHandler}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Create User
        </h2>

        {/* Name */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            onChange={(e)=>setValues({...values,name:e.target.value})}
            />
        </div>

        {/* Email */}
        <div className="mb-5"> 
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e)=>setValues({...values,email:e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            />
        </div>

        {/* Age */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Age
          </label>
          <input
            type="number"
            placeholder="Enter age"
            onChange={(e)=>setValues({...values,age:e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="reset"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition shadow-md"
          >
            Create User
          </button>
          <div
            type="submit"
            className="px-6 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition shadow-md"
          >
          <Link to='/'>Home</Link> 
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create