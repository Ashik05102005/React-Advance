import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/create'
import Read from './components/read'
import Home from './components/home'
import Update from './components/Update'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/read/:id' element={<Read />}></Route>
          <Route path='/edit/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
