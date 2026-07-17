import React from 'react'
import useFetch from '../useFetch'

function Users() {
  const data = useFetch('http://localhost:3000/users')

  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600">Members</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">User directory</h2>
        </div>
        <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
          Add User
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data.map((user) => (
          <div key={user.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-rose-500 to-orange-400 font-semibold text-white">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{user.name}</h3>
                <p className="text-sm text-slate-500">{user.role}</p>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Email</span>
                <span className="font-medium text-slate-900">{user.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Age</span>
                <span className="font-medium text-slate-900">{user.age}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>City</span>
                <span className="font-medium text-slate-900">{user.city}</span>
              </div>
            </div>

            <button className="mt-5 w-full rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users