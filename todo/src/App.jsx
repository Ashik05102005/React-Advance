import { useState } from 'react'
import ShopingCart from './components/ShopingCart'
import Products from './components/Products'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShopingCart />
      <Products />
    </>
  )
}

export default App
