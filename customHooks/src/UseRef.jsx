import React, { useReducer } from 'react'
import { useRef } from 'react'

function Counter(state,action){
 if(action=='increment'){
    return state+1
 }
 else {
    return state-1
 }
}
function UseRef() {
    const[state,dispatch]=useReducer(Counter ,0);
  return (
    <div className='border flex flex-col items-center text-4xl p-5'>
        <h1>Counter</h1>
        <div className=' m-3 p-3 flex flex-col items-center'>
            <div className=' text-9xl'>{state}</div>
            <div className='flex gap-5 my-5'>
                <button 
                className='border px-5 py-2 text-amber-50 rounded-xl bg-green-500'
                onClick={()=>dispatch('increment')}
                >increment</button>
                <button className='border px-5 py-2 text-amber-50 rounded-xl bg-red-500'
                onClick={()=>dispatch('decrement')}
                >decrement</button>
            </div>
        </div>
    </div>
  )
}

export default UseRef