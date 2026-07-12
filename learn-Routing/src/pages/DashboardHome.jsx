import React from 'react'
import {
  HiOutlineBookOpen,
  HiOutlineClipboardDocumentList,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineFolder,
} from "react-icons/hi2";
import { BiTask } from "react-icons/bi";

function DashboardHome() {
  const stats = [
  {
    title: "Courses Enrolled",
    value: 5,
    icon: HiOutlineBookOpen,
    style: "text-violet-100 bg-violet-600",
  },
  {
    title: "Assignments",
    value: 12,
    icon: HiOutlineClipboardDocumentList,
    style: "text-green-100 bg-green-600",
  },
  {
    title: "Upcoming",
    value: 3,
    icon: HiOutlineCalendarDays,
    style: "text-orange-100 bg-orange-500",
  },
  {
    title: "Progress",
    value: "68%",
    icon: HiOutlineChartBar,
    style: "text-blue-100 bg-blue-600",
  },
];
const upcomingAssignments = [
  {
    id: 1,
    title: "React Project",
    subject: "Web Development",
    dueDate: "Due in 2 days",
    status: "Pending",
  },
  {
    id: 2,
    title: "Data Structures Problem Set",
    subject: "Data Structures ",
    dueDate: "Due in 4 days",
    status: "Pending",
  },
  {
    id: 3,
    title: "Database Normalization",
    subject: "Database Systems",
    dueDate: "Due in 1 week",
    status: "Pending",
  },
];
const enrolledCourses = [
  {
    id: 1,
    title: "Web Development",
    progress: 75,
    progressColor: "bg-violet-600",
    iconStyle: "bg-violet-200 text-violet-700",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    progress: 60,
    progressColor: "bg-green-500",
    iconStyle: "bg-green-200 text-green-700",
  },
  {
    id: 3,
    title: "Database Systems",
    progress: 80,
    progressColor: "bg-orange-500",
    iconStyle: "bg-orange-200 text-orange-700",
  },
];
  return (
    <div className='m-2  p-2'>
      <div className=' p-3'>
        <h1 className='text-4xl'>Dashboard 👋</h1>
        <p className='text-gray-600'>Welcome back, John! Here's what's Happening with your courses</p>
      </div>
      <div className=' min-h-20 h-fit mt-3 flex flex-wrap p-3 gap-2 justify-around '>
          {stats.map((data)=>(
            <div className='w-70 h-20 shadow-md rounded-md flex p-2 items-center gap-3 bg-white'>
              <div className={` p-2.5 rounded ${data.style}`} >
                <data.icon className={`h-6 w-6 `}  />
              </div>
              <div>
                <h1>{data.title}</h1>
                <h1>{data.value}</h1>
              </div>
            </div>
          ))}
      </div>
      <div className='  h-full flex md:flex-row flex-col gap-2  mt-2 justify-between px-5 py-2'>
          <div className=' px-4 py-2   rounded-md md:w-6/12  bg-white shadow-md'>
            <div className='flex justify-between  '>
              <h1 className='font-bold'>Upcoming Assignments</h1>
              <button className='text-violet-700'>View all</button>
            </div>
            <hr className='text-violet-200 my-2'></hr>
            <div>
            {upcomingAssignments.map((data)=>(
              <div className='flex '>
                <div className=' w-full flex justify-between p-2'>
                  <div className='flex items-center gap-5'>
                    <div className=' p-2 rounded-full bg-violet-200 text-violet-900'>
                       <BiTask className=' w-6 h-6 '/>
                    </div>
                    <div>
                      <h1 className='font-medium'>{data.title}</h1>
                      <p className='text-red-600'>{data.dueDate}</p>
                    </div>
                  </div>
                  <div>
                    <p className='bg-violet-200 px-2 py-1 rounded-xl text-violet-800'>{data.subject}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className=' min-h-fit md:w-6/12 rounded-md shadow-md  bg-white px-4' >
            <div className='flex flex-col '>
              <div className='flex justify-between w-full p-2 '>
                <h1 className='font-bold'>Enrolled Courses</h1>
                <button className='text-violet-700'>View all</button>
              </div>
                <hr className='text-violet-200 my-2 '></hr>
                <div className=' flex flex-col gap-4 text-md font-medium justify-around  h-full mt-2 '>
                  {
                    enrolledCourses.map((x)=>(
                      <div key={x.id} className=' flex justify-between  p-2 '>
                        <div className='flex items-center gap-2 '>
                          <div className={` p-2 text-xl rounded-full ${x.iconStyle}`}><HiOutlineFolder /></div>
                          <span>{x.title}</span>
                          </div>
                        <div className='flex items-center gap-2  w-1/2'>
                          <div className="h-2  w-full overflow-hidden rounded-full bg-gray-200">
                            <div
                              className={`h-full rounded-full  ${x.progressColor}`}
                              style={{ width: `${x.progress}%` }}
                            />
                          </div>
                            <p>{x.progress}%</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default DashboardHome