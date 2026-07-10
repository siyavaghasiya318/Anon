import React from 'react'
import SideBarSeller from '../SellerComponents/SideBarSeller'
import { Outlet } from 'react-router-dom'

const SellerLayout = () => {
  return (
    <div className="flex">
      <div className="w-[23%] px-6 py-5 sticky top-0 h-screen"><SideBarSeller /></div>
      <div className="p-10 bg-gradient-to-r from-[#fcf2f8] to-[#982af90c]   w-[77%]">
          <Outlet />
      </div>
    </div>
  )
}

export default SellerLayout
