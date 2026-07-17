import React, { useEffect, useReducer ,useState } from 'react'
import { useNavigate } from 'react-router-dom';

function reducer (state , action){
    switch(action.type ){
        case "input" : {
            return {...state , [action.name]:action.payload}
        }
        default:
           { return state}
    }
}

function MainView() {
     const [input , dispatch] = useReducer(reducer , {title : '' , body : '' ,  color : ''});
     const [dataView , setDataView] = useState([])
     const submitHandler = (e)=>{
        e.preventDefault();
        console.log(input);
        const updatedData = {...input , id : crypto.randomUUID()}
        const localData = JSON.parse(localStorage.getItem("data")) || []
        localStorage.setItem("data" ,JSON.stringify([...localData , updatedData ]) )

     }
        const navigate = useNavigate();
         const localData = JSON.parse(localStorage.getItem("data"))||[];

  return (
    <div>
        <div className='flex min-w-screen h-100  justify-center '>
            <form
            className='shadow-xl rounded-xl  flex flex-col justify-around m-5 p-8 w-full max-w-100'
            onSubmit={submitHandler}>
               <label
               className='text-gray-700'
               >title</label>
                <input
                type='text'
                className='border border-gray-400 rounded-md py-1 px-3 '
                placeholder='Enter Title'
                onChange={(e)=>dispatch({type:"input",name : "title" , payload:e.target.value})}
                ></input>
                <label
                className='text-gray-700'
                >body</label>
                <input
                type='text'
                placeholder='enter body'
                className='border border-gray-400 rounded-md py-1 px-3 '  
                onChange={(e)=>dispatch({type:"input",name:"body" , payload:e.target.value})}
                ></input>
                <div className='flex  justify-center gap-5'>
                    <button
                    type='button'
                     className=' h-10 w-10 rounded bg-red-500'
                     onClick={(e)=>dispatch({type:"input",name:"color", payload:"red-200"})}></button>
                    <button 
                    type='button'
                    className=' h-10 w-10 rounded bg-blue-500'
                    onClick={(e)=>dispatch({type:"input",name:"color", payload:"blue-200"})}></button>
                    <button 
                    type='button'
                    className=' h-10 w-10 rounded bg-green-500'
                    onClick={(e)=>dispatch({type:"input",name:"color", payload:"green-200"})}></button>
                    <button 
                    type='button'
                    className=' h-10 w-10 rounded bg-gray-500'
                    onClick={(e)=>dispatch({type:"input",name:"color", payload:"gray-200"})}></button>
                </div>
                <button 
                className='border py-1 rounded-md bg-amber-900 text-amber-50 text-xl '
                type="submit">submit</button>
            </form>
        </div>
        <div className='flex gap-5 flex-col shadow-xl rounded-xl min-h-50 my-5 mx-8 p-5 '>
            {
                localData.map((x)=>(
                    <button 
                    
                    onClick={()=>{navigate(`/data/${x.id}`)}}
                    key={x.id}
                     className={`p-2 rounded bg-${x.color}`}>{x.title} </button>
                ))
            }
        </div>
    </div>
  )
}

export default MainView ;