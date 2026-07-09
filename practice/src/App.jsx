import { useContext, useEffect, useState } from 'react'
import { newContext } from './context'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Link, Route ,Routes } from 'react-router-dom'
import Dataview from './Dataview';
import Inspect from './Inspect'
import Addnew from './Addnew'
import EvenOrOdd from './EvenOrOdd'
function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Dataview />}></Route>
      <Route path='/view/:id' element={ <Inspect />}></Route>
      <Route path='/add' element={ < Addnew />}></Route>
      <Route path='/evenorodd' element={<EvenOrOdd />} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
