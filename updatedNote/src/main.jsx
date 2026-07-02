import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css'
import NotesProvider from './context/NoteContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </StrictMode>,
)
