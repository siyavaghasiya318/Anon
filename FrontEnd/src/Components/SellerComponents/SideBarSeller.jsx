import React, { useContext } from 'react'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FaBox, FaHome, FaShoppingCart, FaUser } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

const SideBarSeller = () => {
    const{navigate,UserLogout,Profile} = useContext(UserContext)

    const location = useLocation()
    return (
        <div>
            <div className="capitalize text-purple-600 text-[25px] font-bold">Seller hub</div>
            <div className="text-gray-400 text-[10px] py-2  gap-2  uppercase font-bold flex gap-1">
                    <GoDotFill className="text-green-500 text-[16px]" />
                    <p className="">{Profile?.role}</p>
                    <Link to="/" className="bg-rose-400 px-4 uppercase text-[10px] font-bold rounded-full text-white ">view store</Link>
                </div>
                <div>
            </div>

            <NavLink to={"/seller"}  className={`flex items-center gap-2 mt-6  w-full  py-3 px-5 rounded-lg text-gray-500 hover:bg-mauve-50 group hover:text-purple-600 ${location.pathname == "/seller" ? "bg-purple-600 text-white" : "text-gray-500"}`}>
                <FaHome className="text-[20px]  group-hover:scale-110 transition-all duration-300 " />
                <div className="uppercase text-[12px] font-bold">Dashboard</div>
            </NavLink>

            <div className="flex flex-col gap-2">
                <p className="text-gray-400 font-bold text-[10px] mt-8 px-5 uppercase">Manangement</p>

                <NavLink to={"/seller/products"} className={`flex uppercase gap-3 text-[10px] hover:bg-mauve-50 group hover:text-purple-600 transition-all duration-300  rounded-lg py-3 px-5 text-gray-500 font-bold ${location.pathname == "/seller/products" ? "bg-purple-600 text-white" : "text-gray-500"} `}>
                    <i className="text-[18px] group-hover:scale-110 transition-all duration-300"><FaBox /></i>
                    <p>Inventary</p>
                </NavLink>

                <NavLink to={"/seller/order"} className={`flex uppercase gap-3 text-[10px] hover:bg-mauve-50 group hover:text-purple-600 transition-all duration-300  rounded-lg py-3 px-5 text-gray-500 font-bold ${location.pathname == "/seller/order" ? "bg-purple-600 text-white" : "text-gray-500"} `}>
                    <i className="text-[18px] group-hover:scale-110 transition-all duration-300"><FaShoppingCart  /></i>
                    <p>Order</p>
                </NavLink>

                <NavLink to={"/seller/return"} className={`flex uppercase gap-3 text-[10px] hover:bg-mauve-50 group hover:text-purple-600 transition-all duration-300  rounded-lg py-3 px-5 text-gray-500 font-bold ${location.pathname == "/seller/return" ? "bg-purple-600 text-white" : "text-gray-500"} `}>
                    <i className="text-[18px] group-hover:scale-110 transition-all duration-300"><FaArrowRotateLeft  /></i>
                    <p>Return Request</p>
                </NavLink>
            </div>



            <div className="flex flex-col gap-2">
                <p className="text-gray-400 font-bold text-[10px] mt-8 px-5 uppercase">Manangement</p>

                <div className="flex uppercase gap-3 text-[10px] hover:bg-mauve-50 group hover:text-purple-600 transition-all duration-300  rounded-lg py-3 px-5 text-gray-500 font-bold ">
                    <i className="text-[18px] group-hover:scale-110 transition-all duration-300"><BsGraphUpArrow  /></i>
                    <p>Insights</p>
                </div>

                <NavLink to="/seller/profile" className="flex uppercase gap-3 hover:bg-mauve-50 hover:text-purple-600 transition-all duration-300  group rounded-lg py-3 px-5 text-gray-500 font-bold text-[10px]">
                    <i className="text-[18px] group-hover:scale-110 transition-all duration-300"><FaUser   /></i>
                    <p>My Profile</p>
                </NavLink>
            </div>

            <button onClick={UserLogout} className="bg-slate-800 mt-24 text-white uppercase text-[12px] font-bold text-center w-full rounded-lg py-3">Logout</button>
            
        </div>
    )
}

export default SideBarSeller
