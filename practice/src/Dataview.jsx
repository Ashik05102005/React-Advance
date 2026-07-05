import { useContext, useEffect } from "react";
import React from "react";
import { newContext } from "./context";
import axios from "axios";
import { Link } from "react-router-dom";

Link


export default function Dataview (){
  // const [data,setData]
  const {counter,setCounter , input ,setInput } = useContext(newContext)
  const increment = ()=>{
    setCounter(counter+1);
    return;
  }
  const changeHandler=(e)=>{
    console.log(e.target.name)
    const{text , value}=e.target;
    console.log(text , value)
    setInput(prev=>({...prev , 
        text : value}))
    console.log(input);
  }
  const fetchdata = async () => {
    const res = await axios.get(`http://localhost:3000/users`);
    setInput(res.data)
    console.log(res.data)
  }
  useEffect(()=>{
    fetchdata(`http://localhost:3000/users`)
  },[]);

  return (
    <>
    <div>
    {counter}
    <div>

    <button type="button " onClick={increment}>increment</button>
    </div>
    </div>
    <div>
      <input
      className='border'
       type="text" 
       name="chars"  
       onChange={changeHandler}></input>
      <div> 
        <div><Link to={'/add'} ><button className=" px-5 py-1 my-2 shadow-xl">Add</button></Link></div>
        <table  className='shadow'>
            <thead>
            <tr>
              <th className='shadow p-5'>Id</th>
              <th className='shadow p-5'>Name</th>
              <th className='shadow p-5'>email</th>
              <th className='shadow p-5'>role</th>
              <th className='shadow p-5'>View</th>
            </tr>
            </thead>
            <tbody>
        {
          input.map((x)=>(
            <tr key={x.id}>
              <td className='shadow p-5'>{x.id}</td>
              <td className='shadow p-5'>{x.name}</td>
              <td className='shadow p-5'>{x.email}</td>
              <td className='shadow p-5'>{x.role}</td>
              <td className='shadow p-5'><Link to={`/view/${x.id}` }><button className="border px-3 py-1 bg-blue-500 text-white rounded">view</button></Link></td>
              
            </tr>
            ))
          }
          </tbody>
          </table>
      </div>
    </div>
    </>
  )
}
