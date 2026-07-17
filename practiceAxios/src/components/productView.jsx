import React from 'react'
import useFetch from '../useFetch'
import { useParams } from 'react-router-dom'

function ProductView() {
  const { id } = useParams()
  const data = useFetch(`http://localhost:3000/products/${id}`)

  const formatPrice = (value) => {
    if (typeof value !== 'number') return '—'
    return `₹${value.toLocaleString()}`
  }

  const renderStars = (rating = 0) => {
    const rounded = Math.round(rating)
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rounded ? 'text-amber-400' : 'text-slate-500'}
      >
        ★
      </span>
    ))
  }

  const categoryAccent = data?.category === 'Electronics'
    ? 'from-sky-500 to-indigo-600'
    : data?.category === 'Furniture'
      ? 'from-emerald-500 to-teal-600'
      : 'from-fuchsia-500 to-violet-600'

  if (!data?.id) {
    return (
      <div className="min-h-screen  sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-white/10 p-8 text-center backdrop-blur">
          <p className="text-lg font-medium">Loading product details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen  px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[32px] border border-white/10 bg-gray-400 p-6 shadow-2xl shadow-black/40 backdrop-blur xl:grid-cols-[1.1fr_0.9fr] xl:p-10">
        <div className={`flex min-h-[320px] items-center justify-center rounded-[28px] bg-gradient-to-br ${categoryAccent} p-8`}>
          <div className="text-center">
            <div className="mb-4 text-7xl">📦</div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">{data.category}</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">{data.brand}</h2>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
              Product Overview
            </div>
            <h1 className="text-3xl font-semibold sm:text-4xl">{data.title}</h1>
            <p className="mt-3 text-base leading-7 text-slate-300">
              Premium {data.category?.toLowerCase() || 'product'} item built for comfort, performance, and everyday reliability.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <p className="text-sm text-slate-400">Price</p>
                <p className="text-xl font-semibold text-white">{formatPrice(data.price)}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <p className="text-sm text-slate-400">Stock</p>
                <p className="text-xl font-semibold text-white">{data.stock} available</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <p className="text-sm text-slate-400">Rating</p>
                <div className="mt-1 flex items-center gap-1 text-lg">{renderStars(data.rating)}</div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5 sm:grid-cols-2">
              <div>
                <p className="text-sm text-slate-400">Brand</p>
                <p className="mt-1 font-medium text-white">{data.brand}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Category</p>
                <p className="mt-1 font-medium text-white">{data.category}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
              Add to cart
            </button>
            <button className="rounded-full border border-white/15 px-5 py-3 font-semibold text-slate-200 transition hover:bg-white/10">
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView