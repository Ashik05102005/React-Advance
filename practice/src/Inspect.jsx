import React, { useContext , useEffect } from 'react'
import { newContext } from './context'
import { Link, useParams } from 'react-router-dom'
function Inspect() {
    const {data , fetchUser} = useContext(newContext)
    const {id}=useParams();
    useEffect(()=>{
        fetchUser(`http://localhost:3000/users/${id}`)
    },[])
  return (
    <div>

        <div>
            <Link to={'/'}><button className='border w-full h-20 text-5xl'>Go back</button></Link>
        </div>
        <div>
            Id -  {data.id}
        </div>
        <div>
            hello {data.name}
        </div>
        <div>
            hello {data.email}
        </div>
        <div>
            hello {data.role}
        </div>
    </div>
  )
}

export default Inspect