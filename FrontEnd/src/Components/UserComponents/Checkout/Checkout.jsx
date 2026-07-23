import React, { useContext, useState } from 'react'
import { UserContext } from '../../../Context/UserContext'
import { FaPlus, FaRegCreditCard } from 'react-icons/fa6'
import { BsCashCoin } from 'react-icons/bs'
import Address from '../Profile/Address'
import AddressForm from '../Profile/AddressForm'

const Checkout = () => {
    const { showAddress, setPaymentMethod, paymentMethod, selectedAddressid, setSelectedAddress, showAddressModal, setShowAddressModal } = useContext(UserContext)
    return (
        <>
            <div className="text-gray-700">
                <p className="md:text-[30px] xs:px-0 px-5 text-[25px] text-gray-800 font-bold tracking-wider text-shadow-2xs">Checkout</p>

                <div className="mt-8 flex flex-col gap-4 rounded-2xl shadow bg-white">

                    <div className="xs:flex  items-center justify-between px-8 md:pt-8 pt-5 pb-2 ">
                        <p className="lg:text-[22px] md:text-lg text-md sm:text-[20px] font-extrabold text-gray-800">Shipping Address</p>
                        <div onClick={() => setShowAddressModal(true)}
                            className="flex items-center gap-1.5 xs:mt-0 mt-3 text-[#ff909d] font-bold lg:text-sm text-xs cursor-pointer">
                            <FaPlus className="lg:text-[11px] text-[10px] mt-0.5" />
                            <p >Add New</p>
                        </div>
                    </div>

                    {showAddress.length == 0 ?
                        (<div className="flex px-10 font-bold text-md md:text-lg lg:text-xl py-10 xs:m-5 mt-0 mx-5 mb-5  text-[#ff909d] flex-col justify-center items-center border-2 border-gray-200 rounded-2xl">
                            Plese Add Address
                        </div>) :
                        (
                            <div className="px-8 pb-8 flex flex-col gap-8">
                                {showAddress.map((item) => {
                                    return (
                                        <div
                                            key={item._id}
                                            onClick={() => setSelectedAddress(item._id)}
                                            className={`cursor-pointer border-2 shadow   shadow-[#c4bdbe] rounded-2xl px-8 py-5 transition-all duration-300 ${selectedAddressid === item._id
                                                ? "border-[#ff909d] bg-[#fff5f6a0]"
                                                : "border-gray-200 bg-white"
                                                }`}>

                                            <div className="uppercase font-bold text-gray-800 flex items-center gap-2">
                                                {item.name}
                                                <p className="bg-gray-200 rounded-sm px-3 py-1 text-[10px] uppercase font-extrabold text-gray-600">{item.lable}</p>
                                            </div>
                                            <div className="flex item-center gap-1 font-semibold text-sm capitalize">{item.streetaddress} {item.landmark} {item.city} {item.state} - {item.pincode}</div>
                                            <p className="text-[12px] text-gray-400 font-bold">{item.phoneno}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }
                </div>


                <div className="bg-white p-8 shadow md:mt-10 mt-8 rounded-2xl">
                    <div className="lg:text-[22px] md:text-lg text-[20px] font-extrabold text-gray-800">
                        Payment Method
                    </div>

                    <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 mt-8">

                        <div onClick={() => setPaymentMethod("cod")}
                            className={`border-2  rounded-xl p-5 cursor-pointer  transition-all duration-300 ${paymentMethod === "cod"
                                ? "border-[#ff909d] bg-[#fff5f6]"
                                : "border-gray-100"
                                }`}>

                            <div className="flex justify-between mb-5">
                                <i className="text-[22px] text-[#ff909d]"><BsCashCoin /></i>

                                <div className={`lg:w-5 w-4 lg:h-5 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod === "cod"
                                    ? "border-[#ff909d]"
                                    : "border-gray-300"
                                    }`}>

                                    {paymentMethod === "cod" && (
                                        <div className="lg:w-2.5 w-2 h-2 lg:h-2.5 rounded-full bg-[#ff909d]" />
                                    )}
                                </div>
                            </div>

                            <div className="uppercase text-[12px] font-extrabold">
                                Cash on delivery
                            </div>

                            <p className="text-gray-400 text-[10px] font-bold">
                                Pay when you receive
                            </p>
                        </div>


                        <div onClick={() => setPaymentMethod("stripe")}
                            className={`border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 ${paymentMethod === "stripe"
                                ? "border-[#ff909d] bg-[#fff5f6]"
                                : "border-gray-100"
                                }`}>

                            <div className="flex justify-between mb-5">
                                <i className="text-[22px] text-gray-500"><FaRegCreditCard /></i>

                                <div
                                    className={`lg:w-5 w-4 lg:h-5 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod === "stripe"
                                        ? "border-[#ff909d]"
                                        : "border-gray-300"}`}>

                                    {paymentMethod === "stripe" && (<div className="lg:w-2.5 w-2 h-2 lg:h-2.5 rounded-full bg-[#ff909d]" />)}
                                </div>
                            </div>

                            <div className="uppercase text-[12px] font-extrabold">
                                Card / Online
                            </div>

                            <p className="text-gray-400 text-[10px] font-bold">
                                Secure via Stripe
                            </p>
                        </div>

                    </div>
                </div>
            </div>




            {showAddressModal && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl p-6 w-[700px] max-h-[90vh] overflow-hidden relative">

                        <button
                            onClick={() => setShowAddressModal(false)}
                            className="absolute top-4 right-4 text-xl"
                        >
                            ✕
                        </button>

                        <AddressForm />

                    </div>
                </div>
            )}
        </>
    )
}

export default Checkout
