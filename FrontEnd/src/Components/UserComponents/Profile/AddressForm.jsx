import React, { useContext } from 'react'
import { FaHome } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineWork } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { UserContext } from '../../../Context/UserContext'

const AddressForm = () => {
    const { isaddress, Setisaddress, UserAddChange, addressForm, showAddress, setAddressForm, UserAddressSubmit, RemoveAddress } = useContext(UserContext)

    const addlable = [
        { name: "home", icon: <FaHome /> },
        { name: "office", icon: <MdOutlineWork /> },
        { name: "other", icon: <FaLocationDot /> }
    ]
    return (
        <>
            <div className="flex flex-col  gap-5 text-gray-400 text-sm w-full  font-semibold">
                <div className="flex items-center w-full">
                    <div className="text-black text-[20px] font-semibold">Add New Address</div>
                </div>


                <div className="flex gap-5 font-bold ">
                    <div className="flex flex-col gap-1 w-full">
                        <div className="uppercase text-[10px] font-extrabold ">Full Name</div>
                        <div className="font-normal"><input type="text" onChange={UserAddChange} name="name" value={addressForm.name} className='py-3 px-2 bg-gray-100 text-black capitalize  rounded-md w-full' placeholder='Receiver Name' id="" /></div>
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <div className="uppercase text-[10px] font-extrabold">Phone number  </div>
                        <div className="font-normal"><input type="text" onChange={UserAddChange} name="phoneno" value={addressForm.phoneno} className='py-3 px-2   bg-gray-100  text-black rounded-md w-full' placeholder='Receiver Name' id="" /></div>
                    </div>
                </div>

                <div className="font-extrabold flex flex-col gap-1">
                    <div className="uppercase text-[10px] font-extrabold">Street address</div>
                    <div className="font-normal  "><textarea onChange={UserAddChange} name="streetaddress" value={addressForm.streetaddress} className="py-2 px-2 w-full outline-0 capitalize  bg-gray-100 text-black rounded-md" id=""></textarea></div>
                </div>


                <div className="flex gap-2 items-center justify-between">

                    <div className="flex flex-col gap-1 justify-between ">
                        <p className="uppercase text-[10px] font-extrabold">City</p>
                        <input type="text" onChange={UserAddChange} name="city" value={addressForm.city} className='py-3 px-2 bg-gray-100 w-full text-black capitalize  rounded-md' placeholder='City' />
                    </div>

                    <div className="flex flex-col gap-1 ">
                        <p className="uppercase text-[10px] font-extrabold">State</p>
                        <input type="text" onChange={UserAddChange} name="state" value={addressForm.state} className='py-3   px-2 bg-gray-100 w-full  text-black capitalize  rounded-md' placeholder='State' />
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="uppercase text-[10px] font-extrabold">Pincode</p>
                        <input type="text" onChange={UserAddChange} name="pincode" value={addressForm.pincode} className='py-3 px-2   bg-gray-100 w-full text-black   rounded-md' placeholder='6 Digit' />
                    </div>
                </div>

                <div className="font-extrabold flex flex-col gap-1">
                    <div className="uppercase text-[10px] font-extrabold">Land mark(optional)</div>
                    <div className="font-normal  "><input onChange={UserAddChange} name="landmark" value={addressForm.landmark} placeholder='E.g. Near Apollo Hospital' className="py-3 px-2 capitalize w-full outline-0  bg-gray-100 text-black rounded-md" id="" /></div>
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

            </div>
        </>
    )
}

export default AddressForm
