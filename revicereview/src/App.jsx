import { useEffect, useReducer, useState } from 'react'
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";


function inputFunc(state , action ){
  // if(action.type === "input"){
  //   return {...state ,data:action.value }
  // }
  switch (action.type){
    case "input" :{
      return {...state ,data:action.value }
      break ;
    }
    case "reset" :{
      return { ...state ,data : ''}
    }
    case "getData" : {
      return {...state ,localData : action.payload}
    }
    case "delete" :{
      console.log("delete" , action.payload);
      console.log(state.localData);
      const filteredData = state.localData.filter((x)=>x!==action.payload);
      localStorage.setItem("data",JSON.stringify(filteredData))
      return {...state , localData : filteredData};
    }
    case "update" :{
      console.log("updates ")
    }
    default :
    return state;
  }
}


function App() {
  const[input , dispatch]=useReducer(inputFunc , {data:'' , localData : []});
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(input);
    if(!input.data.trim()){
      console.log("empty");
      alert("you need to write in there ");
      return ;
    }
    const updatedData = [...input.localData , input.data];
    console.log(updatedData);
    dispatch({type : "getData" ,  payload : updatedData})
    const res = JSON.parse(localStorage.getItem("data")) || [];
    localStorage.setItem("data",JSON.stringify([...res ,input.data]));
    dispatch({type:"reset"})
  }
  useEffect(()=>{
      const res = JSON.parse(localStorage.getItem("data")) || [];
      dispatch({type : "getData" ,  payload : res})
  },[])
  
  
  return (
    <>
     <div className='w-full min-h-screen bg-gray-50 flex flex-col justify-center items-center'>
        <div className='w-1/2 h-fit shadow-xl p-3 rounded-xl bg-white'>
          <form className=' h-40 flex p-3 flex-col gap-2' onSubmit={submitHandler}>
            <label className='text-gray-700'>Input</label>
            <input type='text '
             placeholder='enter the text'
             className='border p-1 rounded-md border-gray-200 '
             value={input.data}
             onChange={(e)=>dispatch({type:"input" ,value:e.target.value})}></input>
             <button className='bg-gray-500 text-white px-2 py-1 rounded-xl mt-4 hover:bg-gray-400'>Submit</button>
          </form>
        </div>
        <div className='w-full   p-5 flex flex-col  '>
            <div>
              {
                input.localData.map((x , index)=>(
                  <div
                  key={index}
                   className='bg-gray-200 p-3 rounded mt-2 flex justify-between sm:text-2xl'>
                    <p>{x}</p>
                    <div>
                      <button 
                      className='text-3xl text-blue-500 px-5'
                      onClick={(e)=>dispatch({type:"update" , payload :x})}
                      >
                        <MdEdit />
                      </button>
                      <button 
                      className='text-3xl text-red-500 px-5'
                      onClick={(e)=>dispatch({type:"delete" , payload :x})}
                      >
                        <TiDelete />
                      </button>
                    </div>

                  </div>
                ))
              }
            </div>
        </div>
      </div> 
    </>
  )
}

export default App
