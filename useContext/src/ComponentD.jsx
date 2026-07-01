import React,{useContext} from 'react'
import { MyContext } from './App'

export default function ComponentD() {
  const name=useContext(MyContext)
  return (
    <div className='border p-5'>{name}</div>
  )
}

