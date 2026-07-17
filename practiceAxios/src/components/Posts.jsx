import React from 'react'
import useFetch from '../useFetch'

function Posts() {
  const data = useFetch('http://localhost:3000/products')

  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">Featured Products</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Browse the latest items</h2>
        </div>
        <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
          View All
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {item.category}
                </span>
                <span className="text-sm font-semibold text-white">★ {item.rating}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Brand</span>
                <span className="font-semibold text-slate-700">{item.brand}</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Price</p>
                  <p className="text-lg font-semibold text-slate-900">₹{item.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">Stock</p>
                  <p className="text-lg font-semibold text-slate-900">{item.stock}</p>
                </div>
              </div>

              <button className="mt-5 w-full rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
                Explore Product
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Posts