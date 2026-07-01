import React from 'react'
import useUser from './hooks/useUser'

function UserNumbers() {
    const userData=useUser('http://localhost:3000/users')
  return (
    <div className=' flex flex-col items-center py-5'>
        <h1 className='text-3xl text-red-500'>--Number Of Active Users--</h1>
        <h1 className='text-9xl text-green-500'>{userData.length}</h1>
    </div>
  )
}

export default UserNumbers