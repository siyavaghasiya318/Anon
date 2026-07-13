import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../../Context/UserContext'
import { MdLogout } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { accountdetail } from '../../../assets/CategoryList';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { IoSave } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";

import Address from './Address';
import Order from './Order';





function UserProfile() {
  const { Profile, UserLogout,selectedPage, SetSelectedPage, HandleSeller, Seller, SellerSubmit, HandlePassword, passwordData, currentpassword, newpassword, setPasswordData, NewPassword } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const updateref = useRef(null)

  return (
    <div className="w-[70%] m-auto mt-10 mb-30">
      <div className="flex ">
        <div className="w-[30%]  sticky top-0 h-screen ps-5 pt-10 text-gray-500  border-e">
          <div className="">
            <div className="text-[21px] font-bold px-5">My Account</div>
            <hr className="my-5" />

            <div className="flex flex-col gap-2 px-3">
              {accountdetail.map((item) => {
                const isActive = selectedPage === item.name.toLocaleLowerCase();
                return (
                  <div
                    key={item.name}
                    className={`flex cursor-pointer items-center gap-3 rounded-md px-5 py-2 ${isActive
                      ? "bg-[#ff909d] text-white"
                      : "hover:bg-gray-100 text-gray-500"
                      }`}
                    onClick={() => {
                      SetSelectedPage(item.name.toLocaleLowerCase());
                      selectedPage == "logout" && UserLogout();
                    }}
                  >
                    <i className="text-[22px]">{item.icon}</i>
                    <p className="capitalize text-[18px]">{item.name}</p>
                  </div>
                );
              })}

              <div
                className={`flex cursor-pointer items-center gap-3 rounded-md px-5 py-2 ${selectedPage === "logout"
                  ? "bg-[#ff909d] text-white"
                  : "hover:bg-gray-100 text-gray-500"
                  }`}
                onClick={UserLogout}
              >
                <i className="text-[22px]"><MdLogout /></i>
                <p className="capitalize text-[18px]">Logout</p>
              </div>
            </div>



          </div>
        </div>



        <div className=" w[70%] mt-8 px-10">

          {selectedPage == "dashboard" ? (
            <div className=" rounded-xl p-5 w-105 relative shadow-sm group">


              {!isOpen ? (<div className="flex flex-col gap-3 text-gray-500">
                <div className="flex justify-end text-gray-500 text-[18px] cursor-pointer" onClick={() => setIsOpen(true)}><FaEdit /></div>
                <div className="flex gap-5 mt-5">
                  <div className="w-[25%] flex items-center">
                    <div className="w-21 h-21 rounded-full bg-[#3b82f6] flex items-center justify-center">
                      <p className="text-3xl font-bold text-white ">{Profile?.name.charAt(0)}</p>
                    </div>
                  </div>
                  <div className="w-[75%] text-gray-500">
                    <p className="text-xl font-bold capitalize">{Profile?.name}</p>
                    <p className="">{Profile?.email}</p>
                    <p >No phone added</p>
                  </div>
                </div>
                <p className="text-lg">From your dashboard you can view your recent orders, manage addresses and edit account details.</p>
              </div>) :



                (
                  <div className="">
                    <div className="flex gap-5 mt-5">
                      <div className="w-[25%] flex flex-col justify-center items-center">
                        <div className="w-21 h-21 rounded-full bg-[#3b82f6] flex items-center justify-center" onClick={() => updateref.current.click()}>
                          <p className="text-3xl font-bold text-white uppercase">{Profile?.name.charAt(0)}</p>
                        </div>
                        <p>Change</p>
                      </div>
                      <form className="w-[75%] flex  flex-col gap-3">
                        <input type="file" className="hidden" ref={updateref} />
                        <input type="text" placeholder='Name' className="border w-[90%] h-8 px-3 capitalize outline-0 rounded-sm" />
                        <input type="email" placeholder='Email' className="border w-[90%] h-8 px-3 capitalize outline-0 rounded-sm" />
                        <input type="tel" placeholder='Phone No' className="border w-[90%] h-8 px-3 capitalize outline-0 rounded-sm" />

                        <div className="w-[90%] flex gap-1 justify-end mt-3 ">

                          <button className="w-fit border  rounded-sm px-5 py-2 flex gap-1 items-center font-semibold" onClick={() => setIsOpen(false)}>
                            <RxCross2 className="mt-1" />
                            <div className="">Cancel</div>
                          </button>

                          <button className="w-fit border text-center m-auto rounded-sm px-5 py-2 bg-[#ff909d] text-white flex gap-2 items-center font-semibold ">
                            <div><IoSave className="mt-1" /></div>
                            <div className="text-center" >Save</div>
                          </button>

                        </div>
                      </form>
                    </div>
                  </div>
                )
              }

            </div>




          ) :
            selectedPage == "update password" ? (
              <div className="p-5 rounded-lg w-105 shadow-sm">

                <div className="text-[20px] text-gray-500 font-semibold">
                  Change Password 🔐
                </div>

                {/* Current Password */}
                <div className="flex items-center justify-between border border-gray-400 mt-5 rounded-md px-5 py-2">
                  <input
                    type={showCurrentPass ? "text" : "password"}
                    value={passwordData.currentpassword}
                    onChange={HandlePassword}
                    className="w-full text-[16px] outline-0"
                    placeholder="Current Password"
                    name="currentpassword"
                  />

                  <i
                    className="text-gray-400 text-[18px] cursor-pointer"
                    onClick={() => setShowCurrentPass(!showCurrentPass)}
                  >
                    {showCurrentPass ? <IoEye /> : <IoEyeOff /> }
                  </i>
                </div>


                {/* New Password */}
                <div className="flex items-center justify-between border border-gray-400 mt-5 rounded-md px-5 py-2">
                  <input
                    type={showNewPass ? "text" : "password"}
                    onChange={HandlePassword}
                    value={passwordData.newpassword}
                    className="w-full text-[16px] outline-0"
                    placeholder="New Password"
                    name="newpassword"
                  />

                  <i
                    className="text-gray-400 text-[18px] cursor-pointer"
                    onClick={() => setShowNewPass(!showNewPass)}
                  >
                    {showNewPass ?  <IoEye /> :<IoEyeOff /> }
                  </i>
                </div>


                <button
                  onClick={NewPassword}
                  className="bg-[#ff909d] py-2 text-center outline-0 mt-5 w-full text-white rounded-md text-[18px]"
                >
                  Update Password
                </button>

              </div>
            ) :
              selectedPage == "orders" ? (
                <Order />
              ) :
                selectedPage == "my wallet" ? (
                  <p>Coming Soon...</p>
                ) :
                  selectedPage == "addresses" ? (
                    <Address  />
                  ) :
                    selectedPage == "become seller" ? (
                      <div>
                        <div className="rounded-lg w-105 shadow-sm p-5 text-[18px] text-black">
                          <div className="text-[22px] font-bold capitalize text-gray-500">become a seller</div>

                          <form action="" onSubmit={SellerSubmit} className="w-full mt-5 flex flex-col gap-2">
                            <input type="text" onChange={HandleSeller} name="shopname" value={Seller.shopname} placeholder="Shop Name" className="border rounded-sm p-2  text-[16px] w-full" />
                            <input type="number" onChange={HandleSeller} name='gstnum' value={Seller.gstnum} placeholder="GST Number" className="border rounded-sm p-2 w-full" />
                            <input type="number" onChange={HandleSeller} name='phonenum' value={Seller.phonenum} placeholder="Phone Number " className="border rounded-sm p-2 w-full" />
                            <input type="text" onChange={HandleSeller} name='address' value={Seller.address} placeholder="Street Address" className="border rounded-sm p-2 w-full" />

                            <div className="flex gap-3">
                              <input type="text" onChange={HandleSeller} name='city' value={Seller.city} placeholder="City" className="border rounded-sm p-2 w-full" />
                              <input type="text" onChange={HandleSeller} name='state' value={Seller.state} placeholder="State" className="border rounded-sm p-2 w-full" />
                            </div>

                            <input type="number" onChange={HandleSeller} name='pincode' value={Seller.pincode} placeholder="Pincode" className="border rounded-sm p-2 w-full" />
                            <button type='submit' className="bg-[#ff909d] text-white rounded-sm font-semibold w-full py-2 m-auto">Submit Request</button>
                          </form>

                        </div>
                      </div>
                    ) :
                      ""
          }
        </div>


      </div>

    </div>
  )
}

export default UserProfile