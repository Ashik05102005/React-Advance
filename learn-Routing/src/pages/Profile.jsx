import React from 'react'

function Profile() {
  const profileImage =
  "https://i.pravatar.cc/300?img=1";
  return (
    <div className='m-3  '>
      <div>
        <h1 className='text-3xl font-bold'>Profile</h1>
        <p className='text-gray-600'>Manage your personal information</p>
      </div>
      <div className=' min-h-50 mt-3 p-3 bg-white rounded-xl shadow-md'>
          <div className='p-3 flex gap-5'>
            <img
                src={profileImage}
                alt="Student profile"
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <h1 className='text-2xl font-bold'>John Doe</h1>
                <p className='text-gray-600'>john.gmail.com</p>
                <p className='text-gray-600'>Computer Science Student</p>
              </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-around min-h-60 md:p-8 md:min-h-70 md:text-xl'>
              <hr className='text-gray-400'></hr>
              <div className='flex text-gray-700'>
                <h1 className='w-1/2'>Full Name</h1>
                <h1 >John Doue</h1>
              </div>
              <hr className='text-gray-400'></hr>
              <div className='flex text-gray-700'>
                <h1 className='w-1/2'>Email</h1>
                <h1 >John.gmail.com</h1>
              </div>
              <hr className='text-gray-400'></hr>
              <div className='flex text-gray-700'>
                <h1 className='w-1/2'>Phone</h1>
                <h1 >+1 234 567 8901</h1>
              </div>
              <hr className='text-gray-400'></hr>
              <div className='flex text-gray-700'>
                <h1 className='w-1/2'>Department</h1>
                <h1 >Computer Science</h1>
              </div>
              <hr className='text-gray-400'></hr>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Profile