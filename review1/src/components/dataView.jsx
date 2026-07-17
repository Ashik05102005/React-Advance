import React from 'react'
import { useParams } from 'react-router-dom'

export default function DataView() {
    const {id} = useParams();
    console.log(id)
    const localData = JSON.parse(localStorage.getItem("data"));
    const thedata = localData.filter(x=>x.id ===id);
    console.log(thedata)
  return (
    <div className='flex min-h-screen max-w-screen m-5 border items-center justify-center '>
        <div className='border rounded w-1/2 h-fit flex flex-col gap-5 p-5 '>
            {/* <p>{thedata[0].color}</p> */}
            <h1 className={`text-2xl font-mono bg-${thedata[0].color}`}>{thedata[0].title}</h1>
            <h3 className='font-mono'>{thedata[0].body}</h3>
            
        </div>
    </div>
  )
}
