import React, { useContext } from 'react'
import SideBarSeller from '../SellerComponents/SideBarSeller'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

const SellerLayout = () => {

  const { Profile } = useContext(UserContext);

  if (!Profile) {
    return <Navigate to="/" replace />;
  }

  if (Profile.role !== "seller") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex">
      <div className="w-[23%] px-6 py-5 sticky top-0 h-screen">
        <SideBarSeller />
      </div>

      <div className="w-[77%] p-10 bg-gradient-to-r from-[#fcf2f8] to-[#982af90c]">
        <Outlet />
      </div>
    </div>
  );

}

export default SellerLayout
