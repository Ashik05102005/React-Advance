import { useReducer, useState } from 'react'
function reducer(state , action){
  if(action.type ==="input"){
    return {...state , input : action.value }
  }
  else if(action.type === "reset"){
    return {...state , input : "" }
  }
  else{
    return state ;
  }
}

function App() {
  
  const [textInput , dispatch] = useReducer(reducer ,{ input : ""  })
  const res = JSON.parse(localStorage.getItem("data")) || [];
  // console.log(res)
  const submitHandler=(e)=>{
      e.preventDefault();
      console.log("hi" ,textInput);
      localStorage.setItem("data",JSON.stringify([...res , textInput.input]))
      // textInput.data.push(textInput.input);
      dispatch({type : "reset"})
      
   
  }
  return (
    <>
    <form onSubmit={submitHandler}
    className='flex justify-center items-center h-20'>

      <input type='text' 
              value={textInput.input}
              onChange={(e)=>{dispatch({
                type : 'input',
                value:e.target.value})}}
                className='outline-gray-600 border border-gray-300 px-2 py-1 rounded-md '
      ></input>
      <button className='border px-2 py-1 mx-3 bg-blue-500 text-white rounded-md'>submit</button>
      </form>
      <div className=' h-full mx-5 px-5 py-1 flex flex-col gap-3'>
        {res.map((x)=>(
          <div key={crypto.randomUUID()} className='bg-amber-100 py-3 px-5 rounded-xl shadow '>
            <p>{x}</p>
          </div>
          )
        )}
      </div>
    </>
  )
}

export default App
