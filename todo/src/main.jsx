import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopCartContext from './context/shopCartContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopCartContext>
      <App />
    </ShopCartContext>
  </StrictMode>,
)
