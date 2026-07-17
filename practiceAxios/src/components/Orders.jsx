import React from 'react'
import useFetch from '../useFetch'

function Orders() {
  const data = useFetch('http://localhost:3000/orders')

  const totalOrders = data.length
  const pendingOrders = data.filter((order) => order.status === 'Pending').length
  const deliveredOrders = data.filter((order) => order.status === 'Delivered').length
  const totalUnits = data.reduce((sum, order) => sum + order.quantity, 0)

  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-emerald-100 text-emerald-700'
      case 'Pending':
        return 'bg-amber-100 text-amber-700'
      case 'Shipped':
        return 'bg-sky-100 text-sky-700'
      default:
        return 'bg-slate-100 text-slate-700'
    }
  }

  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Order Monitoring</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">Track every order in real time</h2>
            <p className="mt-2 text-sm text-slate-600">A clear overview of current shipment progress, order volume, and fulfillment status.</p>
          </div>
          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
            Updated 2 min ago
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">Total Orders</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{totalOrders}</p>
            <p className="mt-2 text-sm text-emerald-600">+12% from last week</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">Pending</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{pendingOrders}</p>
            <p className="mt-2 text-sm text-amber-600">Needs attention</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">Units Packed</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{totalUnits}</p>
            <p className="mt-2 text-sm text-sky-600">{deliveredOrders} delivered</p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Recent Orders</h3>
              <p className="text-sm text-slate-500">Latest customer orders and shipment states</p>
            </div>
            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-5 py-3 font-semibold">Order ID</th>
                  <th className="px-5 py-3 font-semibold">User</th>
                  <th className="px-5 py-3 font-semibold">Product</th>
                  <th className="px-5 py-3 font-semibold">Qty</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((order) => (
                  <tr key={order.id} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-5 py-3 font-medium text-slate-900">#{order.id}</td>
                    <td className="px-5 py-3 text-slate-700">User {order.userId}</td>
                    <td className="px-5 py-3 text-slate-700">Product {order.productId}</td>
                    <td className="px-5 py-3 text-slate-700">{order.quantity}</td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders