import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="transition-all duration-300 ease-out animate-[fadeIn_0.3s_ease-out]">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout