import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Dashboardlayouts from './layouts/Dashboardlayouts'
import Dashboardlayouts from './layouts/Dashboardlayouts'
import DashboardHome from './pages/DashboardHome'
import Profile from './pages/Profile'
import Course from './pages/Course'
import Assignment from './pages/Assignment'
import Settings from './pages/Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter >
         <Routes >
           <Route path='/' element={<Dashboardlayouts />}>
             <Route path='' element={<DashboardHome />}></Route>
             <Route path='profile' element={<Profile />}></Route>
             <Route path='course' element={<Course/>}></Route>
             <Route path='assignments' element={<Assignment/>}></Route>
             <Route path='settings' element={<Settings/>}></Route>
           </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
