import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='p-5 shadow-xl m-2 rounded-2xl'>
        <h1 className='text-3xl text-gray-700'>Shopping Cart</h1>
        <Link to={'/'}>home</Link>
    </div>
  )
}

export default Navbar