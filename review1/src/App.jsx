import { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
// import Main from './components/main'
import MainView from './components/MainView'
import DataView from './components/dataView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='' element={<MainView />}></Route>
          <Route path='/data/:id' element={<DataView />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
