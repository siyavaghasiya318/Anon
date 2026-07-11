import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import SideBar from '../AdminComponents/SideBar'
import { UserContext } from '../../Context/UserContext'

const AdminLayout = () => {

  const { Profile } = useContext(UserContext);

  if (!Profile) {
    return <Navigate to="/" replace />;
  }

  if (Profile.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen bg-[#f8f6ff]">
      <div className="w-[30%]">
        <SideBar />
      </div>

      <div className="w-full p-10 bg-[#f8f6ff]">
        <Outlet />
      </div>
    </div>
  );

}

export default AdminLayout
