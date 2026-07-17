import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Navbar() {
  const navigate = useNavigate();
  const LogoutHandler = ()=>{
      localStorage.removeItem("token")
      toast.info("Logout");
      navigate("/")
  }
  return (
    <nav className="mx-auto my-5 flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/90 px-6 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-violet-500 font-bold text-white">
          EN
        </div>
        <div>
          <h3 className="m-0 text-base font-semibold text-slate-900">Enterprise</h3>
          <p className="m-0 text-sm text-slate-500">Dashboard</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          <Link to={'products'}>Products</Link>
        </button>
        <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          <Link to='posts' >Posts</Link>
        </button>
        <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          <Link to='orders' >Orders</Link>
        </button>
        {/* <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          <Link to={'users'} >Users</Link>
        </button> */}
      </div>

      <div className="flex items-center gap-3">
        <span className="rounded-full bg-blue-100 px-3 py-2 text-sm font-bold text-blue-600" onClick={LogoutHandler} >Logout</span>
        <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 font-bold text-white">
          A
        </div>
      </div>
    </nav>
  )
}

export default Navbar