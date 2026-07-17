import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Dashboard from './components/Dashboard'
import Users from './components/Users'
import Products from './components/Products'
import Posts from './components/Posts'
import Orders from './components/Orders'
import ProductView from './components/productView'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path='/main' element={<MainLayout />} >
            <Route path='' element={<Dashboard />} />
            <Route path='users' element={<Users />} />
            <Route path='products' element={<Products />} />
            <Route path='posts' element={<Posts  />} />
            <Route path='orders' element={<Orders />} />
          </Route>
          <Route path='/productdetails/:id' element={<ProductView />} />
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position='top-right'
                      autoClose={3000}
                      theme='light'/>
    </>
  )
}

export default App
