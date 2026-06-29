import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import axios from 'axios';


function Register() {
  const [errorMsg,setErrorMsg]=useState({});
  const [values,setValues]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const navigate=useNavigate();
  
  
  const submitHandler=async(event)=>{
    event.preventDefault();
    setValues({
    ...values,
    createdAt:new Date()
  })
   
   const validation={};
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(values.name.trim()===''){
    validation.name="Name is required"
    
   }
   if(values.email.trim()===''){
    validation.email="Email is required"
   }
   const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(values.password);
   console.log(hasSpecialCharacter)
   if(values.password.length<=8  ){
    validation.password="Password must contain minimum 8 characters"
   }
   if(!hasSpecialCharacter){
     validation.password="Password must contain at least one special character"
   }
   if(values.password.trim()===''){
    validation.password="Password is required"
   }
   if(values.password!==values.confirmPassword){
    validation.confirmPassword="❌ Passwords do not match."
   }
   if(values.confirmPassword.trim()===''){
    validation.confirmPassword="Confirm Password is required"
   }
   if(!emailRegex.test(values.email)){
    validation.email="Enter in correct format"
   }

  const res= await axios.get(`http://localhost:3000/users?email=${values.email}`)

   if(res.data.length>0){
    validation.email = "Email already exists";
    console.log(res)
   }
   console.log(values.password)
   console.log(values.confirmPassword)
   if(Object.keys(validation).length>0){
    console.log(validation);
    setErrorMsg(validation);
    return;
   }
   
   axios.post('http://localhost:3000/users',values)
   navigate('/');

  }

  
  return (
    <div className="min-h-screen flex  items-center justify-center ">
      
      <form className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
      onSubmit={submitHandler}>
        <Link to={'/'}><IoMdArrowBack className='text-2xl text-green-500'/></Link>
        
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Register
        </h2>
        {/* fullname */}
        <div className="mb-5"> 
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e)=>setValues({...values,name:e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            />
            <p className='text-red-600'>{errorMsg.name && errorMsg.name}</p>
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
           <p className='text-red-600'>{errorMsg.email && errorMsg.email}</p>
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
            <p className='text-red-600'>{errorMsg.password && errorMsg.password}</p>
        </div>
        {/* confirm passwword */}
        <div className="mb-5"> 
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e)=>setValues({...values,confirmPassword:e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            />
            <p className='text-red-600'>{errorMsg.confirmPassword && errorMsg.confirmPassword}</p>
        </div>
        <div className=" my-5 flex gap-6">
           <button to="/register" type='submit' className='flex justify-center  w-full py-2 rounded-xl bg-green-500 text-white border-gray-300 text-bold shadow'>Register</button>
           
        </div>

      </form>
    </div>
  )
}

export default Register