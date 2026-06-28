import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {
    const {id}=useParams();
    const [values,setValues]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
            axios.get(`http://localhost:3000/users/${id}`)
            .then(res=>setValues(res.data))
            .catch(err=>console.log(err));
    },[])

    const submitHandler=(event)=>{
        event.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`,values)
        .then(res=>navigate('/'))
    }
    const clearData=()=>setValues({...values,name:'',email:"",age:''})
  return (
     <div className="min-h-screen flex  items-center justify-center"
        onSubmit={submitHandler}>
        <form className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8"
            >
                Edit User
            </h2>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Full Name
                </label>
                <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                    value={values.name}
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
                    value={values.email}
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
                     value={values.age}
                    onChange={(e)=>setValues({...values,age:e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                />
            </div>
            <div className="flex justify-end gap-4">
                      <button
                        type="reset"
                        className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                        onClick={clearData}
                      >
                        Reset
                      </button>
            
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition shadow-md"
                      >
                        Edit
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

export default Update