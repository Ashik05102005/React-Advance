import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DataView() {
    const {id} = useParams();
    console.log(id)
    const localData = JSON.parse(localStorage.getItem("data"));
    const thedata = localData.filter(x=>x.id ===id);
    console.log(thedata)
  return (
    <div className='flex flex-col py-5 rounded-xl max-w-screen m-5  items-center justify-center shadow-2xl shadow-gray-200'>
      <div className='h-20  w-full flex justify-center  m-2 '>
        <Link to={'/'} className=' px-3 flex items-center'><button className='border  h-10 px-2 rounded-md'>Back</button></Link>
        <span className='w-2/3  flex items-center'>{`the data according to the id : ${id}`}</span>
      </div>
        <div className={` rounded-md w-2/3 h-fit flex flex-col gap-5 p-5 ${thedata[0].color}`}>
            <h1 className={`text-2xl font-extrabold font-mono bg-${thedata[0].color}`}>{thedata[0].title}</h1>
            <h3 className='font-mono'>{thedata[0].body}</h3>
            
        </div>
    </div>
  )
}
