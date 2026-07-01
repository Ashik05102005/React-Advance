import React from 'react'
import useUser from './hooks/useUser'

function UserData() {
    const userData=useUser(`http://localhost:3000/users`);
    console.log(userData)
  return (
    <div className='borer flex flex-wrap justify-center gap-5 mt-5 p-3'>
    {userData.map((user)=>(
         <div key={user.id} className='border  border-gray-200 rounded-xl shadow-xl flex flex-col gap-2 p-5 sm: w-50'>
            <h1>name : {user.name}</h1>
            <p>email : {user.email}</p>
            <p>phone : {user.phone}</p>
            <p>age   : {user.age}</p>
            <p>city :{user.city}</p>
            <p>role : {user.role}</p>
        </div>)
    )
    }
    </div>
  )
}

export default UserData;