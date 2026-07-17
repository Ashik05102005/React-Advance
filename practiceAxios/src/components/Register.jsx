import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Register() {
    const [input , setInput] = useState({name : '' ,
                                         email : '' ,
                                         password : '' ,
                                         confirmPass : ''})
    const [errors , setErrors] = useState({});
    const changeHandler = (e)=>{
        // console.log(e.target.value)
        setInput({...input , [e.target.name] : e.target.value})

    }
    const checkEmail=async (email)=>{
        const res = await axios.get(`http://localhost:3000/users/?email=${email}`);
        if(res.data[0]>=1){
            console.log("exists");
            return true
        }
        false
    }

    const submitHandler =  async (e)=>{
        e.preventDefault();

        let errorsList ={};
        if(input.name.trim() ===""){
            errorsList ={...errorsList , name:"name requires"}
        }
        if(input.email.trim() ===""){
            errorsList ={...errorsList , email:"name requires"}
        }
        if(input.password.trim() ===""){
            errorsList ={...errorsList , password:"name requires"}
        }
        if(input.confirmPass.trim() ===""){
             errorsList ={...errorsList , confirmPass:"name requires"}
        }
        const emailCheck =checkEmail(input.email);
        console.log(emailCheck)
        if(!emailCheck){
            errorsList ={...errorsList , email:"already exists"}
        }
        if(input.password !== input.confirmPass){
            errorsList ={...errorsList , password:"not match "}
        }
        console.log(input);
        if(Object.keys(errorsList).length>0){
            console.log("errors",errorsList);
            setErrors(errorsList);
            toast.error("registeration failed")
            return
        }
        const data = {name : input.name , email : input.email , password : input.password}
        const res = await axios.post('http://localhost:3000/users',data);
        na
        console.log(res);
        
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100 px-4'>
        <div className='w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200'>
            <form className='flex flex-col gap-4' onSubmit={submitHandler}>
                <h1 className='text-2xl font-semibold text-slate-800 text-center'>Register</h1>
                <label className='text-sm font-medium text-slate-600'>Fullname</label>
                <input 
                type='text' 
                className='rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-blue-50' 
                name='name'
                onChange={changeHandler}/>
                <label className='text-sm font-medium text-slate-600'>Email</label>
                <input 
                type='text' 
                className='rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-blue-50'
                name='email'
                onChange={changeHandler} />
                <label className='text-sm font-medium text-slate-600'>Password</label>
                <input 
                type='text' 
                className='rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-slate-500'
                name='password'
                onChange={changeHandler} />
                <label className='text-sm font-medium text-slate-600'>Conform Password</label>
                <input 
                type='text' 
                className='rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-blue-500'
                name='confirmPass'
                onChange={changeHandler} />
                <button className='border py-2 rounded-md bg-gray-800 text-gray-100 hover:bg-gray-700' >Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register