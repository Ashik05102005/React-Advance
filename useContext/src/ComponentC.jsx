import React,{useContext} from 'react'
import { MyContext } from './App'
import ComponentD from './ComponentD'

export default function ComponentC() {
  const name=useContext(MyContext)
  return (
    <div className='border p-5'>
      <h1>{name}</h1>
      <ComponentD />
      </div>
  )
}

