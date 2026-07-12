import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
function Dashboardlayouts() {
  return (
   <div className='w-full bg-slate-100'>
    
    <div className='flex w-full border relative'>
        <Sidebar className="fixed"/>
        <main className='w-full bg-violet-50'>
            <Navbar />
            <Outlet />
        </main>
    </div>
   </div>
  )
}

export default Dashboardlayouts