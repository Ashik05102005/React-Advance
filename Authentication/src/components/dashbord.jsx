import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Dashboard () {
    const [userData,setUserData]=useState([])
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(1);
    const navigate=useNavigate();
    const fetchUser=async () => {
        try{
             const response=await axios.get(`http://localhost:3000/users?_page=${page}&_per_page=5`);
             console.log(response);            
             setUserData(response.data.data);
             setTotalPages(response.data.pages)    
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
       fetchUser();
    },[page])
    const logoutHandler= ()=>{
                        localStorage.removeItem('loginToken');
                        toast.info("Logout Successfull");
                        navigate('/');
                        }
    
  return (
    <div className='relative'>
        <nav className='flex justify-between shadow-md sticky w-full '>
            <div className='p-5 text-3xl font-bold font-serif'>Dashboard</div>
            <div className='px-11 py-5'>
                <button  className='px-3 py-1 rounded-md text-md shadow-md bg-green-500 text-white hover:scale-110 transition'   
                    onClick={logoutHandler}>
                    Logout 
                </button>
            </div>
        </nav>  
        <div className='m-2 shadow-2xl min-h-screen rounded-xl'>
            <h1 className='flex justify-center text-3xl pt-3'>User Details</h1>
            <div className='flex flex-wrap gap-2 justify-center'>{
                userData.map((data)=>(
                    <div className='my-3 p-3 rounded-xl  border border-gray-200 shadow-xl sm:w-[45%] w-screen' key={data.id} >
                        <h1>{data.name}</h1>
                        <h1>{data.email}</h1>
                        <h1>{data.password}</h1>
                    </div>
                ))
                }
            </div>
            <div className='flex justify-center gap-5 my-5'>
                <button
                    disabled={page=== 1}
                    onClick={()=>setPage(page-1)}>
                        <GrPrevious className={page===1?`hidden`:`block hover:text-green-600 hover:scale-110 transition cursor-pointer`}/>
                </button>
                <p className='hover:text-green-600 hover:scale-110 transition cursor-pointer'>{page}/{totalPages}</p>
                <button
                    disabled={page=== totalPages}
                    
                    onClick={()=>setPage(page+1)}>
                        <GrNext className={page===totalPages?`hidden `:`block hover:text-green-600 hover:scale-110 transition cursor-pointer `} />
                </button>
            </div>
        </div>

    </div>
  );
}
