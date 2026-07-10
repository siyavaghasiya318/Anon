import React, { useContext, useState } from 'react'
import { FaLocationDot, FaPlus } from "react-icons/fa6";
import { FaEdit, FaHome, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { UserContext } from '../../../Context/UserContext';
import { RxCross2 } from "react-icons/rx";
import { MdEditLocationAlt, MdOutlineWork } from 'react-icons/md';
import { RiDeleteBinFill } from "react-icons/ri";


const Address = () => {
    const { isaddress, Setisaddress,UserAddChange, addressForm, showAddress, setAddressForm, UserAddressSubmit,RemoveAddress } = useContext(UserContext)

    const addlable = [
        { name: "home", icon: <FaHome /> },
        { name: "office", icon: <MdOutlineWork /> },
        { name: "other", icon: <FaLocationDot /> }
    ]
    return (
        <>
            <form className="w-105">
                <div className="flex gap-2 text-gray-500 ">

                    <div className="">
                        <div className="text-[25px] font-semibold text-black">Shipping Addresses</div>
                        <div className="text-sm font-semibold">Manage your delivery locations for faster checkout.</div>
                    </div>

                    {!isaddress &&
                        <div onClick={() => Setisaddress(true)} className="bg-[#ff909d] cursor-pointer text-white px-5 text-center uppercase font-semibold flex items-center justify-center rounded-lg">
                            <div><FaPlus /></div>
                            <div >Add new</div>
                        </div>}
                </div>



                <div className="">
                    {!isaddress ?
                        (
                            <>
                                {showAddress.length == 0 ?
                                    (<div className="text-center flex flex-col gap-5 p-10">
                                        <div className="text-gray-300 text-[35px] shadow-lg my-5 w-fit m-auto justify-center rounded-full bg-gray-50 p-7"><FaLocationArrow /></div>
                                        <div className="text-black text-[23px]">Where should we deliver?</div>
                                        <div className="text-gray-600">No saved addresses found. Add a delivery location to experience faster checkout.</div>
                                        <button onClick={() => Setisaddress(true)} className="text-white bg-black uppercase px-10  py-2 rounded-lg ms-9 w-fit">Add Address Now</button>
                                    </div>) :


                                    (<div>
                                        <div className="text-gray-700  ">
                                            {showAddress.map((item ,key=0) => {
                                                return(
                                                    <div className="p-5 my-5 bg-white shadow hover:shadow-lg rounded-md">
                                                        <div className="flex items-center justify-between">
                                                            <p className="uppercase font-bold ">{item.lable}</p>
                                                            <div className="flex gap-5 text-[18px] text-gray-400">
                                                                <i onClick={() => RemoveAddress(item._id)} className="hover:text-[#FF909D] cursor-pointer"><RiDeleteBinFill /></i>
                                                                <i className="hover:text-[#FF909D] cursor-pointer"><MdEditLocationAlt  /></i>
                                                            </div>
                                                        </div>

                                                        <div className="text-[16px] text-black capitalize mt-2 font-semibold">{item.name}</div>
                                                        <p className="text-[10px] tracking-wider font-semibold text-gray-500">{item.phoneno}</p>

                                                        <div className="capitalize mt-2 flex items-center">{item.streetaddress},  {item.city}, {item.state}</div>
                                                        <p className="">{item.pincode}</p>
                                                       
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>)
                                }

                            </>





                        ) :
                        (<div className="flex flex-col  gap-5 text-gray-400 text-sm w-full font-semibold">
                            <i onClick={() => Setisaddress(false)} className="w-full flex justify-end text-gray-500 text-[18px] cursor-pointer"><RxCross2 /></i>
                            <div className="flex items-center w-full">
                                <div className="text-black text-[20px] font-semibold">Add New Address</div>
                            </div>


                            <div className="flex gap-5 font-bold">
                                <div className="flex flex-col gap-1">
                                    <div className="uppercase text-[10px] font-extrabold ">Full Name</div>
                                    <div className="font-normal"><input type="text" onChange={UserAddChange} name="name" value={addressForm.name} className='py-2 px-2 bg-gray-100 text-black capitalize  rounded-md' placeholder='Receiver Name' id="" /></div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <div className="uppercase text-[10px] font-extrabold">Phone number  </div>
                                    <div className="font-normal"><input type="text" onChange={UserAddChange} name="phoneno" value={addressForm.phoneno} className='py-2 px-2   bg-gray-100  text-black rounded-md' placeholder='Receiver Name' id="" /></div>
                                </div>
                            </div>

                            <div className="font-extrabold flex flex-col gap-1">
                                <div className="uppercase text-[10px] font-extrabold">Street address</div>
                                <div className="font-normal  "><textarea onChange={UserAddChange} name="streetaddress" value={addressForm.streetaddress} className="py-2 px-2 w-full outline-0 capitalize  bg-gray-100 text-black rounded-md" id=""></textarea></div>
                            </div>


                            <div className="flex gap-2 items-center justify-between">

                                <div className="flex flex-col gap-1 justify-between ">
                                    <p className="uppercase text-[10px] font-extrabold">City</p>
                                    <input type="text" onChange={UserAddChange} name="city" value={addressForm.city} className='py-3 px-2 bg-gray-100 w-28 text-black capitalize  rounded-md' placeholder='City' />
                                </div>

                                <div className="flex flex-col gap-1 ">
                                    <p className="uppercase text-[10px] font-extrabold">State</p>
                                    <input type="text" onChange={UserAddChange} name="state" value={addressForm.state} className='py-3   px-2 bg-gray-100 w-28  text-black capitalize  rounded-md' placeholder='State' />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <p className="uppercase text-[10px] font-extrabold">Pincode</p>
                                    <input type="text" onChange={UserAddChange} name="pincode" value={addressForm.pincode} className='py-3 px-2   bg-gray-100 w-28 text-black   rounded-md' placeholder='6 Digit' />
                                </div>
                            </div>

                            <div className="font-extrabold flex flex-col gap-1">
                                <div className="uppercase text-[10px] font-extrabold">Land mark(optional)</div>
                                <div className="font-normal  "><input onChange={UserAddChange} name="landmark" value={addressForm.landmark} placeholder='E.g. Near Apollo Hospital' className="py-2 px-2 capitalize w-full outline-0  bg-gray-100 text-black rounded-md" id="" /></div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="uppercase text-[10px] font-extrabold">Address lable</div>
                                <div className="flex gap-2 ">

                                    <div className="flex gap-3">
                                        {addlable.map((item) => (
                                            <button
                                                key={item.name}
                                                type="button"
                                                onClick={() =>
                                                    setAddressForm(prev => ({
                                                        ...prev,
                                                        lable: item.name
                                                    }))
                                                }
                                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase transition-all

                                                    ${addressForm.lable === item.name
                                                        ? "bg-[#ff909d] text-white"
                                                        : "bg-gray-100 text-gray-500"
                                                    }`}
                                            >
                                                {item.icon}
                                                {item.name}
                                            </button>
                                        ))}
                                    </div>


                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setAddressForm(prev => ({
                                        ...prev,
                                        isDefault: !prev.isDefault
                                    }))
                                }
                                className={`w-14 h-7 rounded-full transition-all duration-300 flex items-center px-1
                                    ${addressForm.isDefault ? "bg-[#ff909d]" : "bg-gray-300"}
                                `}
                            >
                                <div
                                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300
                                    ${addressForm.isDefault ? "translate-x-7" : "translate-x-0"}
                                    `}
                                />
                            </button>

                            <div className="flex gap-5 justify-end">
                                <button onClick={() => Setisaddress(false)} className="text-[12px] uppercase px-5 py-1 cursor-pointer rounded-lg hover:bg-gray-50 hover:text-gray-700 font-extrabold">cancel</button>
                                <button type="submit" onClick={UserAddressSubmit} className="text-white bg-slate-600 cursor-pointer px-8 py-3 rounded-lg uppercase font-bold ">save address</button>
                            </div>

                        </div>)}
                </div>
            </form>
        </>
    )
}

export default Address
