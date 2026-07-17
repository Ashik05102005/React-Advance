import React,{useContext, useEffect, useState} from 'react'
import useFetch from '../useFetch'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../context/Context';

function Products() {
  // const [page,setPage] = useState(1);
  const {page,setPage} = useContext(Context)
  const data = useFetch(`http://localhost:3000/products?_page=${page}&_per_page=5`);
  console.log(data)
  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Inventory</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Product catalog</h2>
        </div>
        <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
          Add Product
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data.data?.map((item) => (
          <div key={item.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-emerald-600">{item.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.title}</h3>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                {item.brand}
              </span>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Price</span>
                <span className="font-semibold text-slate-900">₹{item.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Stock</span>
                <span className="font-semibold text-slate-900">{item.stock} units</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Rating</span>
                <span className="font-semibold text-slate-900">★ {item.rating}</span>
              </div>
            </div>
            <Link to={`/productdetails/${item.id}`}>
            <button className="mt-5 w-full rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
              View Details
            </button>
            </Link>
          </div>
        ))}
      </div>
        <div className=' h-10 my-10 flex justify-center items-center'>
          <div className='flex justify-center items-center gap-5'>
           { page>1 ? <button onClick={()=>{setPage(page=>page-1)}} className='border px-2 py-1 rounded '>prev</button>:null}
            <span>{page}/{data.pages}</span>
           { page<2 ? 
           <button onClick={()=>{setPage(page=>page+1)}} className='border px-2 py-1 rounded '>next</button>
           :null}
          </div>
        </div>
    </div>
  )
}

export default Products