import { useState } from 'react'
import ShopingCart from './components/ShopingCart'
import Products from './components/Products'
import ProductView from './components/ProductView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
      <Routes >
          <Route path='/' element={<ShopingCart />}></Route>
          <Route path='/product/:id' element={<ProductView />} />
      </Routes> 
    </BrowserRouter>
      
      
    </>
  )
}

export default App
