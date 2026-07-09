import useFetch from "./hooks/useFetch";
import { useContext, useEffect, useReducer, useState } from "react";
import React from "react";
import { newContext } from "./context";
import axios from "axios";
import { Link } from "react-router-dom";

function Counter (state,action){
  switch (action.type){
    case "incr": return { count: state.count + 1 };

    case "decr":
      return { count: state.count - 1 };
    default :return state
  }
}

export default function Dataview (){
  // const [data,setData]
  const { input ,  setInput , page , setPage } = useContext(newContext);
  // const [page,setPage] = useState(1)
  const limit=6;
  const {res,total} = useFetch(`http://localhost:3000/users?_page=${page}&_per_page=6`);
  setInput(res)
  // useEffect(()=>{
  //   console.log(res);
  // },[page]);
  const initialState={count:0}
  const [state,dispatch] = useReducer(Counter,initialState)

  return (
    <>
  
    
    <div>
      
      <div> 
        <div><Link to={'/add'} ><button className=" px-5 py-1 my-2 shadow-xl">Add</button></Link></div>
        <div className="flex flex-wrap justify-around gap-5">
        {
          input.map((x,index)=>(
            <div key={x.id} className="shadow-xl w-50 rounded-xl ">
              <h1 className='shadow p-5'>{x.name}</h1>
              <p className='shadow p-5'>{x.email}</p>
              <p className='shadow p-5'>{x.role}</p>
              <p className='shadow p-5'><Link to={`/view/${x.id}` }><button className="border px-3 py-1 bg-blue-500 text-white rounded">view</button></Link></p>
              
            </div>
            ))
          }
          </div>
         
      </div>
      <div className="flex justify-center my-5 gap-2">
          {page>1 ?<button onClick={()=>setPage(page-1)}>prev</button>: null}
          <p>{page}</p>
          {page<total ? <button onClick={()=>setPage(page+1)}>next</button>: null }
      </div>
      <div className="flex justify-around">
        <button onClick={()=>dispatch({type:'decr'})}>decr</button>
        {state.count}
        <button onClick={()=>dispatch({type:'incr'})}>incr</button>
      </div>
    </div>
    </>
  )
}
