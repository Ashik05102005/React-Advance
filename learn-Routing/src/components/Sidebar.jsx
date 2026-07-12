import React from 'react'
import { Link } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBookOpen,
  HiOutlineClipboardDocumentList,
  HiOutlineCog6Tooth,
  HiOutlineArrowRightOnRectangle,
  HiOutlineBell,
  HiOutlineBars3,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineFolder,
  HiOutlineAcademicCap,
} from "react-icons/hi2";
function Sidebar() {
  const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: HiOutlineHome,
  },
  {
    name: "Profile",
    path: "profile",
    icon: HiOutlineUser,
  },
  {
    name: "Courses",
    path: "course",
    icon: HiOutlineBookOpen,
  },
  {
    name: "Assignments",
    path: "assignments",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    name: "Settings",
    path: "settings",
    icon: HiOutlineCog6Tooth,
  },
];
  return (
    <div className=' min-h-screen max-w-1/3 flex flex-col bg-slate-900 text-slate-200 sm:text-2xl md:text-3xl'>
      <div className='flex flex-wrap items-center gap-5 p-5 text-2xl font-bold'>
        <HiOutlineAcademicCap className='text-4xl text-violet-500'/>
        <h1>
          Student Dashboard
        </h1>
            </div>
      {menuItems.map((data)=>(
        <button className='  px-3 py-5  text-xl rounded-md gap-5 font-medium hover:bg-slate-300 hover:text-slate-900 transition focus:bg-state-state-400'>
          <Link to={data.path}>
            <div className='flex items-center gap-3' >
              <data.icon/>
              <p>{data.name}</p>
            </div>
          </Link>
        </button>
     ) )}
    </div>
  )
}

export default Sidebar