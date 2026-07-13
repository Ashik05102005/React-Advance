import React from 'react'
import {
  HiOutlineBars3,
  HiOutlineBell,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className='h-15 mt-1 max-w-full shadow-md flex justify-between p-3 items-center bg-white '>
      <div><HiOutlineBars3 /></div>
      <div className='flex gap-2 items-center'>
        <HiOutlineBell/>
        <div className='flex items-center'>
           <hr className='text-3xl w-5 rotate-90 text-gray-300'></hr>
        </div>
        <div className='flex gap-2 items-center'>
          <FaRegUserCircle />
          <h1>John Doue</h1>
          <HiOutlineChevronDown />
        </div>
      </div>
    </div>
  )
}

export default Navbar