import React, { useReducer , useEffect, useState } from 'react'
import useFetch from '../useFetch'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const inputReducer = (state , action)=>{
    switch(action.type){
        case "setInput" : {
            return {...state , [action.dataOf] :action.payload}
        }
    }
}

export default function Login() {
    const navigate = useNavigate()
    const [input , dispatch] = useReducer(inputReducer , {email:'',password :''})
    const [token , setTocken] = useState('')
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token"));
        console.log(token)
        if(token){
            console.log("user already exists")
            navigate("/main/products")
        }
    },[])
    const sumbitHandler = async (e)=>{
        e.preventDefault();
        console.log(input)
        const data =await axios.get(`http://localhost:3000/users?email=${input.email}&password=${input.password}`);
        console.log(data.data);
        setTocken(data.data);
        if(data.data.length >= 1){
            console.log("successfull");
            toast.success("login successfull");
            localStorage.setItem("token" ,JSON.stringify(data.data[0].id) )
            navigate("/main/products")
        }
        else{
            toast.error("login unsuccessfull")
            console.log("unseccessfull");
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50 px-4'>
        <div className='w-full max-w-md rounded-2xl border border-slate-100 bg-slate-100 p-8 shadow-2xl shadow-'>
            <form onSubmit={sumbitHandler} className='flex flex-col gap-4'>
                <h1 className='text-2xl font-semibold text-slate-700 text-center'>Login</h1>
                <label 
                className='text-sm text-slate-600'
                >email</label>
                <input type='text' 
                       className='rounded-lg border border-slate-700 bg-slate-100 px-3 py-2 text-slate-800 outline-none focus:border-slate-200' 
                       onChange={(e)=>dispatch({type:"setInput",dataOf:"email",payload:e.target.value})}/>
                <label className='text-sm text-slate-360'>password</label>
                <input type='password' 
                        className='rounded-lg border border-slate-700 bg-slate-100 px-3 py-2 text-slate-800 outline-none focus:border-slate-500' 
                        onChange={(e)=>dispatch({type:"setInput",dataOf:"password",payload:e.target.value})}/>
                <button type='submit' className='rounded-lg bg-slate-500 text-slate-50  px-4 py-2 font-medium  transition hover:bg-slate-400'>submit</button>
                <button type='button' className='text-slaye-500 mt-2 ' onClick={()=>navigate('/register')}>You didn't have account</button>
            </form>
        </div>
    </div>
  )
}
