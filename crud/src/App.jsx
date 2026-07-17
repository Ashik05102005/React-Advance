import React,{ useState } from 'react'
import { BrowserRouter ,  Route, Routes  } from 'react-router-dom'
import DataView from './DataView'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='' element={<DataView />}></Route>
          <Route path='/form' element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
