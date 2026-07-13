import React, { useContext } from 'react'
import { SiFacebook } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram, FaRegUser } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import UserLogin from './Components/UserComponents/LogIn/UserLogin';
import USerRegister from './Components/UserComponents/LogIn/USerRegister';
import { Link } from 'react-router-dom';
import { UserContext } from './Context/UserContext';
import { navbarIcones } from './assets/CategoryList';
import Forgotpassword from './Components/UserComponents/LogIn/Forgotpassword';
import { useState } from "react";




function UserNavbar() {
  const { SetIsopen, Isopen, islogin, Setislogin, Profile, search, setsearch, navigate, fetchCart, UserLogout, getProducts } = useContext(UserContext)

  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <div className=' m-auto'>

      <div className='text-sm px-15 flex flex-col gap-5 py-5 shadow-sm'>
        <div className='flex justify-between w-full items-center'>

          <div className='flex gap-1 items-center text-gray-500'>
            {navbarIcones.map((icon) => {
              return (
                <p className='bg-gray-200 p-2 rounded-sm'>{icon.icone}</p>
              )
            })}
          </div>

          <div className='text-[12px] uppercase text-gray-500 '><span className='font-semibold'>Free Shipping</span> This Week Order Over - ₹ 5000</div>
          <div className='border p-1 text-[12px] text-gray-500'>
            <select name="" id="">
              <option value="">INR ₹</option>
              <option value="">USD $</option>
            </select>
          </div>
        </div>

        <div className='flex w-full justify-between'>
          <div className="w-full"><img className='w-30' src="data:image/svg+xml,%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%2036'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23202020;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='M27.42,23.39l.28,1.28-3,6.26H18L30.83,5.07,43.65,30.93H37l-2.92-6,.21-1.49-3.44-7.89Zm-2.53-1.64h12l.39,4.48H24.47Z'/%3e%3cpath%20class='cls-1'%20d='M55.52,19a2,2,0,0,0-1.79-.77,3,3,0,0,0-1.46.35,2.37,2.37,0,0,0-1,1A3.29,3.29,0,0,0,51,21.2v9.73H45.67v-16H51v2.4a5.13,5.13,0,0,1,1.89-2.05,5.59,5.59,0,0,1,3-.73,5.39,5.39,0,0,1,4.35,1.6,6.73,6.73,0,0,1,1.35,4.48V30.93H56.06V21.2A3.77,3.77,0,0,0,55.52,19Z'/%3e%3cpath%20class='cls-1'%20d='M65.89,18.17a8.06,8.06,0,0,1,3.27-2.92,11,11,0,0,1,9.36,0,8.19,8.19,0,0,1,3.27,2.92A8,8,0,0,1,83,22.59,7.94,7.94,0,0,1,81.79,27a8,8,0,0,1-3.27,2.92,11,11,0,0,1-9.36,0A7.92,7.92,0,0,1,65.89,27a8,8,0,0,1-1.18-4.37A8.11,8.11,0,0,1,65.89,18.17Zm4.73,6.55A3.8,3.8,0,0,0,72,26.1a3.88,3.88,0,0,0,3.74,0,3.65,3.65,0,0,0,1.35-1.38,4.2,4.2,0,0,0,.51-2.13,4.31,4.31,0,0,0-.51-2.16A3.61,3.61,0,0,0,75.71,19a3.68,3.68,0,0,0-5.09,1.39,4.22,4.22,0,0,0-.53,2.16A4.1,4.1,0,0,0,70.62,24.72Z'/%3e%3cpath%20class='cls-1'%20d='M96,19a2,2,0,0,0-1.79-.77,3,3,0,0,0-1.46.35,2.43,2.43,0,0,0-1,1,3.41,3.41,0,0,0-.35,1.6v9.73H86.11v-16h5.28v2.4a5.23,5.23,0,0,1,1.9-2.05,5.59,5.59,0,0,1,3-.73,5.37,5.37,0,0,1,4.34,1.6A6.68,6.68,0,0,1,102,20.64V30.93H96.5V21.2A3.77,3.77,0,0,0,96,19Z'/%3e%3c/svg%3e" alt="" />
          </div>

          <div className="border w-full border-gray-200 flex items-center px-5 justify-between gap-5 text-gray-700">
            <input type="search"
              value={search} onChange={(e) => setsearch(e.target.value)} onKeyDown={(e) => { navigate("/category")
              }} placeholder='Enter Your Product Name...' className=' w-120 py-2 outline-0' />
            <p className=' text-[20px]'><IoMdSearch /></p>
          </div>


          <div className='flex w-full text-gray-700  gap-6 items-center justify-end'>
            <p className='text-[20px]' ><FaRegHeart /></p>
            <div className="relative" onClick={() => navigate("/cart")}>
              <p className='text-[22px] cursor-pointer'><IoBagHandleOutline /></p>
              <span className="absolute -top-1 -right-2
                   bg-[#FF8F9C] text-white
                   w-4.5 h-4.5 rounded-full
                   flex items-center justify-center
                   text-[10px] font-semibold">{fetchCart.length}</span>
            </div>



            <div className="relative">
              {Profile ? (
                <>
                  <Link to="/profile"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8F9C] to-[#FF6B7A] font-semibold text-white text-lg shadow-md ring-2 ring-white transition-transform duration-200 hover:scale-105"
                  >
                    {Profile.name.charAt(0).toUpperCase()}
                  </Link>

                  {dropdownOpen && (
                    <div className="absolute right-0 top-11 z-50 w-40 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                      {(Profile.role === "seller" || Profile.role === "admin") && (
                        <Link
                          to={`/${Profile.role}`}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm font-medium capitalize text-gray-700 transition-colors hover:bg-[#FF8F9C]/10 hover:text-[#FF6B7A]">
                          {Profile.role} Panel
                        </Link>
                      )}

                      <button
                        onClick={UserLogout}
                        className="block w-full border-t border-gray-100 px-4 py-2.5 text-left text-sm font-medium text-red-500 transition-colors hover:bg-red-50">
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => SetIsopen(true)}
                  className="rounded-full bg-[#FF8F9C] px-6 py-2 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#FF6B7A] active:scale-95">
                  Login
                </button>
              )}
            </div>

          </div>
        </div>


      </div>



      <header className='relative ' >
        <div className='flex px-70  text-gray-700 uppercase my-3 justify-between'>
          <Link to="/" className="font-semibold border-b-2 border-transparent hover:border-[#ff8f9c] hover:text-[#ff8f9c]">Home</Link>
          <div className="group ">
            <p className="font-semibold    hover:border-b-2 hover:text-[#ff8f9c] cursor-pointer" >Categories</p>
            <div className="hidden group-hover:block ms-[-120px] absolute bg-white text-black rounded-xl shadow-lg">

              <div className="grid grid-cols-2 gap-8 px-5 py-5 text-gray-700 capitalize">
                <div>
                  <p className="text-[18px] font-semibold">Men's</p>
                  <hr className="my-2" />
                  <div className=" text-gray-600">
                    <p>casual shoes</p>
                    <p>formal shoes</p>
                    <p>jacket</p>
                    <p>Party-Wear</p>
                    <p>Shirt & T-shirt</p>
                    <p>Shorts Nad jeans</p>
                  </div>
                </div>

                <div>
                  <p className="text-[18px] font-semibold">women's</p>
                  <hr className="my-2" />

                  <ul className="">
                    <li>casual shoes</li>
                    <li>formal shoes</li>
                    <li>jacket</li>
                    <li>Party-Wear</li>
                    <li>Shirt & T-shirt</li>
                    <li>Shorts Nad jeans</li>
                  </ul>
                </div>

              </div>

            </div>
          </div>


          <div className="group">
            <p className="font-semibold  border-b-2 border-transparent hover:border-[#ff8f9c] hover:text-[#ff8f9c] cursor-pointer ">Clothes</p>
            <div className="hidden group-hover:block ms-[-40px] w-50 capitalize px-5 py-5 absolute bg-white text-black rounded-xl shadow-xl ">
              <p>jacket</p>
              <p>Party-Wear</p>
              <p>Shirt & T-shirt</p>
              <p>Shorts Nad jeans</p>
            </div>
            <div>

            </div>
          </div>



          <div className="group ">
            <p className="font-semibold border-b-2 border-transparent hover:border-[#ff8f9c] hover:text-[#ff8f9c] cursor-pointer ">Beauty</p>
            <div className="hidden group-hover:block w-50  ms-[-40px] capitalize px-5 py-5 absolute bg-white text-black rounded-xl shadow-lg">
              <p>Lipstick</p>
              <p>Eye-makeup</p>
              <p>Skincare</p>
              <p>jwellery</p>
            </div>
            <div>

            </div>
          </div>

          <div className="font-semibold border-b-2 border-transparent hover:border-[#ff8f9c] hover:text-[#ff8f9c] cursor-pointer ">Blog</div>
        </div>

      </header>

      {Isopen && <Forgotpassword />}

    </div>
  )
}


export default UserNavbar


