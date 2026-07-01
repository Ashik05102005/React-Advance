import { useState } from 'react'
import UserData from './UserData'
import UserNumbers from './UserNumbers'
import UseRef from './UseRef'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='flex justify-center text-5xl pt-5'>USER INFO</h1>
     <UserData />
     <UserNumbers />
     <UseRef />
    </>
  )
}

export default App
