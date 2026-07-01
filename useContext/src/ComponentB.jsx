import React,{useContext} from 'react'
import { MyContext } from './App'
import ComponentC from './ComponentC'

export default function ComponentB() {
  const name=useContext(MyContext)
  return (
    <div className='border p-5'>
      <h1>{name}</h1>
      <ComponentC />
      </div>
  )
}

