import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../AdminComponents/SideBar'

const AdminLayout = () => {
  return (

    <div className="flex  min-h-screen bg-[#f8f6ff] ">
      <div className="w-[30%] "><SideBar /></div>
      <div className="p-10 bg-[#f8f6ff] w-full">
          <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
