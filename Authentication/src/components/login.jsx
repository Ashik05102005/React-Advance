import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const [error,setError]=useState({})
    const [values,setValues]=useState({})
    const navigate= useNavigate()
    useEffect(()=>{
      const token=localStorage.getItem("loginToken");
      if(token){
         navigate('/dashboard')
      }
    },[])
    const submitHandler=async(event)=>{
      event.preventDefault();
      const validation={};
      try{
        const res= await axios.get(`http://localhost:3000/users?email=${values.email}`);
        console.log(res)
        if(res.data.length==0){
          validation.email = "Email not exists";
          console.log(res)
        }
        else{
          if(res.data[0].password===values.password){
            const token=crypto.randomUUID();
            localStorage.setItem('loginToken',token)
            toast.success("Login succesfull")
            navigate('/dashboard')
          }
          else{
            validation.password="Incorrect password"
          }
        }
      }
      catch(err){
        console.log(error)
      }
      if(values.email.trim()===''){
        validation.email="Email is required"
      }
      if(values.password.trim()===''){
          validation.password="Password is required"
        }
      setError(validation);  
    }
  return (
    <div className="min-h-screen flex  items-center justify-center ">
      <form className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
      onSubmit={submitHandler}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Login
        </h2>

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
            <p>{error.email && error.email}</p>
        </div>
        {/* passwword */}
        <div className="mb-5"> 
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e)=>setValues({...values,password:e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            />
            <p>{error.password && error.password}</p>
        </div>
        <div className=" my-5 flex gap-6">
           <Link to="/register" type='submit' className='flex justify-center  w-1/2 py-2 rounded-xl bg-green-500 text-white border-gray-300 text-bold shadow'>Register</Link>
           <button type='submit' className='flex justify-center w-1/2 py-2 rounded-xl bg-blue-500 text-white border-gray-300 text-bold shadow'>Login</button>
        </div>

      </form>
    </div>
  )
}

export default Login