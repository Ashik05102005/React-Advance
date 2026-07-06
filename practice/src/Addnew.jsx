import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Addnew() {
    const [input,setInput] = useState({
        name:"",
        email :'',
        role:''
    })
    const navigate = useNavigate();
    const changeHandler=(e)=>{
        const  {name , value} = e.target;
        setInput(prev=>({...prev , [name] : value}))
    }
    const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:3000/users", input);
    console.log("User added:", res.data);
    setInput({});
    navigate('/');
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
};

  return (
    <div>
        <form className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4"
         onSubmit={submitHandler}>
      <h2 className="text-2xl font-bold text-center text-gray-800"
      
     >User Form</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter name"
          name = 'name'
          value={input.name}
          onChange={changeHandler}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter email"
          name = 'email'
          value={input.email}
          onChange={changeHandler}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Role */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Role
        </label>
        <select
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={input.role}
          name = 'role'
          onChange={changeHandler}
        >
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Save User
      </button>
    </form>
    </div>
  )
}

export default Addnew