import { createContext, useState } from 'react'
import ComponentA from './ComponentA';
import CompontNEW from './CompontNEW';

import './App.css'

export const MyContext=createContext("no name");
function App() {
  const [name, setName] = useState('ASHIK')
  return (
    <>
      <MyContext.Provider value={name}>
        <ComponentA />
      </MyContext.Provider>
      <CompontNEW />
    </>
  )
}

export default App
