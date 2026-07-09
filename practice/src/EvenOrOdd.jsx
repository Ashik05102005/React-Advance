import React, { useState } from 'react'

function EvenOrOdd() {
    const [num,setNum]=useState(0);
    const [check,setCheck]=useState(0)
    const submitHandler =(e)=>{
        e.preventDefault();
        console.log(num);
        setCheck(num);
    }
  return (
    <div>dscv
        <form onSubmit={submitHandler}>
            <input type='number' className='border' onChange={(e)=>{setNum(e.target.value)}}></input>
            <button className='border'>submit</button>
        </form>
        {check===0 ? null :check%2===0 ? <div className='border w-40 h-50 flex justify-center items-center text-2xl m-10'>even</div>
                    :<div className='border w-40 h-50 flex justify-center items-center text-2xl m-10'>odd</div> }
    </div>
  )
}

export default EvenOrOdd