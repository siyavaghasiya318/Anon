import React, { useContext, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { marketing, sidebardetail } from '../../assets/CategoryList';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';


function SideBar() {
  const[route,Setroute] = useState("admin")
  const{UserLogout,navigate} = useContext(UserContext)
  return (
    <div className="w-[23%] bg-white text-[#667383] fixed  h-screen">
      <div className="  px-7 py-5 shadow-sm">
        <div className="text-[25px] font-bold text-purple-600 ">Admin Panel</div>
        <div className="text-gray-400 text-[10px] py-2 uppercase font-bold flex gap-1"><GoDotFill  className="text-green-500 text-[16px]"/><div>Admin</div></div>

        <Link to="/admin" className="flex items-center gap-2 mt-6 text-white w-full bg-blue-600 py-3 px-5 rounded-lg">
          <FaHome className="text-[20px] " />
          <div className="uppercase text-[12px] font-bold">Dashboard</div>
        </Link>

        <div className="flex flex-col gap-2 mt-8">
          <div className="uppercase px-5 text-[10px] mb-2 font-bold text-gray-400">Management</div>

          <>
            {sidebardetail.map((item) => {
              return(
                <Link to={item.link}>
                  <div className="flex items-center gap-2 hover:bg-sky-50 py-3 px-5 rounded-md font-bold">
                    <i className="text-[20px]">{item.icon}</i>
                    <div className="uppercase text-[12px]">{item.name}</div>
                  </div>
                </Link>
              )
            })}
          </>
        </div>

        <div className=" mt-8 flex flex-col gap-2">
          <div className="uppercase text-[10px] px-5 font-bold">Marketing</div>

          {marketing.map((item) => {
            return(
              <>
                <div className="flex items-center gap-2   hover:bg-sky-50 py-3 px-5 rounded-md font-bold">
                  <i className="text-[20px]">{item.icon}</i>
                  <div className="uppercase text-[12px]">{item.name}</div>
                </div>
              </>
            )
          })}
        </div>

        <button onClick={UserLogout} className="bg-black py-3 w-full justify-center rounded-md mt-8 font-bold text-white uppercase flex items-center gap-2 text-[10px]">
          <i><RiLogoutBoxRLine /></i>
          Logout
        </button>
          
      </div>
    </div>
  )
}

export default SideBar