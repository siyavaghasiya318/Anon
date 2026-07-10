import React, { useContext, useState } from 'react'
import { FaBox, FaBoxOpen, FaFilter, FaPlus, FaUser } from 'react-icons/fa'
import { IoSearch } from "react-icons/io5";
import { MdLocalOffer } from 'react-icons/md'
import { UserContext } from '../../Context/UserContext';
import { BsEyeFill } from "react-icons/bs";
import { FiX } from "react-icons/fi";

const statusColors = {
    Pending: "bg-[#f96666]",
    Processing: "bg-orange-400",
    Shipped: "bg-blue-400",
    Delivered: "bg-emerald-500",
    Cancelled: "bg-red-400",
    Return: "bg-gray-400",
}

const paymentColors = {
    COD: "bg-purple-400",
    Stripe: "bg-indigo-500",
}

const CustomerOrders = () => {
    const { navigate, showAllOrders ,UpdateOrderStatus} = useContext(UserContext)
    const [selectedOrder, setSelectedOrder] = useState(null)


    console.log("show Order",showAllOrders);

    

    return (
        <div className="">

            <div className="">
                <div className="bg-gradient-to-r from-purple-600 to-rose-600  bg-clip-text text-transparent tracking-tight uppercase text-[30px] font-bold">Customer Orders </div>
                <div className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Track & Handle Shipments</div>
            </div>

            <div className="flex items-center w-full justify-between gap-5 mt-8 text-gray-400">
                <div className="flex w-full items-center justify-between bg-white p-6 rounded-2xl">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest p-2 ">processing</p>
                        <p className="text-black text-[25px] font-bold">0</p>
                    </div>
                    <i className="bg-gradient-to-br from-blue-500 to-indigo-600 w-10 h-10 rounded-xl flex justify-center items-center text-white"><FaBox /></i>
                </div>

                <div className="flex justify-between items-center w-full bg-white p-6 rounded-2xl">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest">shipped</p>
                        <p className="text-black text-[25px] font-bold">0</p>
                    </div>
                    <i className="bg-gradient-to-br to-orange-500 from-amber-500 w-10 h-10 rounded-xl flex justify-center items-center text-white"><FaBox /></i>
                </div>

                <div className="flex justify-between w-full items-center bg-white p-6 rounded-2xl">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest">completed </p>
                        <p className="text-black text-[25px] font-bold">0</p>
                    </div>
                    <i className="bg-gradient-to-br from-emerald-500 to-green-600 w-10 h-10 rounded-xl flex justify-center items-center text-white"><FaBox /></i>
                </div>

                <div className="flex justify-between w-full items-center bg-white p-6 rounded-2xl">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest">cancelled </p>
                        <p className="text-black text-[25px] font-bold">0</p>
                    </div>
                    <i className="bg-gradient-to-br from-red-500 to-rose-600 w-10 h-10 rounded-xl flex justify-center items-center text-white"><FaBox /></i>
                </div>
            </div>

            <div className="bg-white rounded-2xl mt-8">
                <div className="flex items-center gap-5 justify-between text-gray-400 p-5">
                    <div className="  gap-2 bg-[#f8fafc] group hover:outline-2 transition-all duration-200 hover:outline-purple-200 hover:shadow-purple-300 flex rounded-2xl w-full items-center px-5">
                        <div><IoSearch className="text-[20px] group-hover:text-purple-500 transition-all duration-300" /></div>
                        <input type="search" className="py-4 outline-0 w-full text-gray-800 font-semibold" placeholder="Search Item.." name="" id="" />
                    </div>

                    <div className="gap-2 flex bg-[#f8fafc] rounded-2xl group font-bold items-center px-5 hover:outline-2 transition-all w-full duration-300 hover:outline-purple-200 hover:shadow-purple-300">
                        <div><FaFilter className=" text-gray-300 mt-1 group-hover:text-purple-500" /></div>
                        <select name="" className="py-4 outline-0 appearance-none w-full text-gray-500 text-[14px] capitalize" id="">
                            <option value="select" >All Categories</option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>
            </div>

            <div className=" bg-white rounded-3xl px-6 pb-6 pt-3 mt-10 text-gray-400 ">
                {showAllOrders.length == 0 ?
                    (<div className="flex flex-col items-center justify-center h-80">
                        <div className="bg-gray-50  w-20 h-20 rounded-full text-gray-200  flex flex-col justify-center items-center"><FaBoxOpen className="text-[35px]" /></div>
                        <div className="text-[10px] uppercase  font-extrabold tracking-widest ">No orders currently</div>
                    </div>)
                    :
                    (<>
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-400 border-b border-gray-100">
                                    <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-widest">Order ID</th>
                                    <th className="py-5 px-7 text-[11px] font-extrabold uppercase tracking-widest">Date</th>
                                    <th className="py-5 px-7 text-[11px] font-extrabold uppercase tracking-widest">Customer</th>
                                    <th className="py-5 px-7 text-[11px] font-extrabold uppercase tracking-widest">City</th>
                                    <th className="py-5 px-7 text-[11px] font-extrabold uppercase tracking-widest ">order</th>
                                    <th className="py-5 px-7 text-[11px] font-extrabold uppercase tracking-widest whitespace-normal break-words max-w-[120px]">Payment methos</th>
                                    <th className="py-5 px-4 text-[11px] font-extrabold uppercase tracking-widest">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {showAllOrders.map((items) => (
                                    <tr key={items._id} className="border-t border-gray-100 hover:bg-gray-50 transition">
                                        <td className="px-8 py-5 font-bold text-gray-700 text-sm">
                                            #{items._id.slice(0, 7)}
                                        </td>
                                        <td className="py-5 px-7 text-gray-500 font-semibold text-[13px]">
                                            {new Date(items.orderDate).toLocaleDateString()}
                                        </td>
                                        <td className="py-5 px-7 font-semibold text-gray-700 text-sm">
                                            {items.address.name}
                                        </td>
                                        <td className="py-5 px-7 text-gray-500 font-semibold text-[13px]">
                                            {items.address.city}
                                        </td>
                                        <td className="py-5 px-7">
                                            <div className="flex ">
                                                <select
                                                    value={items.orderStatus}
                                                    onChange={(e) => UpdateOrderStatus(items._id, e.target.value)}
                                                    className={`${statusColors[items.orderStatus] || "bg-gray-400"} text-white font-bold rounded-full ps-3 py-1 text-[10px] uppercase outline-0 cursor-pointer`}>

                                                    <option value="Pending" className="bg-white text-gray-600">Pending</option>
                                                    <option value="Processing" className="bg-white text-gray-600">Processing</option>
                                                    <option value="Shipped" className="bg-white text-gray-600">Shipped</option>
                                                    <option value="Delivered" className="bg-white text-gray-600">Delivered</option>
                                                    <option value="Cancelled" className="bg-white text-gray-600">Cancelled</option>
                                                    <option value="Return" className="bg-white text-gray-600">Return</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td className="py-5 px-7">
                                            <div className="">
                                                <div className="bg-purple-400 text-white uppercase text-[10px] font-bold px-3 py-1 rounded-full">{items.paymentMethod}</div>
                                            </div>
                                        </td>
                                        <td className="py-5 px-5 flex flex-col items-end">
                                            <button
                                                onClick={() => setSelectedOrder(items)}
                                                className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-purple-500 transition group">

                                                <div className="w-4 h-4 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-purple-50 transition">
                                                    <BsEyeFill className="text-[12px] text-purple-200 group-hover:text-purple-500" />
                                                </div>

                                                <p className="text-[9px] font-bold uppercase tracking-wide">View</p>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>)
                }
            </div>

            {/* Overlay */}
            {selectedOrder && (
                <div
                    onClick={() => setSelectedOrder(null)}
                    className="fixed inset-0 bg-black/40 z-40 transition-opacity"
                ></div>
            )}

            {/* Right-side sliding drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${selectedOrder ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {selectedOrder && (
                    <div className="flex flex-col h-full">

                        {/* Header */}
                        <div className="flex items-center justify-between px-7 py-6 border-b border-gray-100">
                            <div>
                                <p className="text-gray-800 font-bold text-lg">
                                    Order #{selectedOrder._id}
                                </p>
                                <p className="text-gray-400 text-[12px] flex gap-5 font-semibold mt-1">
                                    {new Date(selectedOrder.orderDate).toLocaleDateString()}
                                    <div className="">{new Date(selectedOrder.orderDate).toLocaleTimeString()}</div>
                                </p>
                            </div>

                            <button
                                onClick={() => setSelectedOrder(null)}
                                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 transition">
                                <FiX className="text-[18px]" />
                            </button>
                        </div>

                        {/* Scrollable body */}
                        <div className="flex-1 overflow-y-auto px-7 py-6">

                            {/* Status + Payment */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className={`${statusColors[selectedOrder.orderStatus] || "bg-gray-400"} text-white font-bold rounded-full px-4 py-1.5 text-[10px] uppercase`}>
                                    {selectedOrder.orderStatus}
                                </span>
                                <span className={`${paymentColors[selectedOrder.paymentMethod] || "bg-purple-400"} text-white font-bold rounded-full px-7 py-1.5 text-[10px] uppercase`}>
                                    {selectedOrder.paymentMethod}
                                </span>
                            </div>

                            {/* Customer info */}
                            <div className="grid grid-cols-2 gap-5 mb-6">
                                <div>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Customer</p>
                                    <p className="text-gray-700 font-semibold text-sm">{selectedOrder.address.name}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">City</p>
                                    <p className="text-gray-700 font-semibold text-sm">{selectedOrder.address.city}</p>
                                </div>
                                {selectedOrder.address && (
                                    <div className="col-span-2">
                                        <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Address</p>
                                        <p className="text-gray-700 font-semibold text-sm">{selectedOrder.address.streetaddress}{selectedOrder.address.landmark} {selectedOrder.address.state} - {selectedOrder.address.phoneno}</p>
                                    </div>
                                )}
                                {selectedOrder.address.phone && (
                                    <div>
                                        <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Phone</p>
                                        <p className="text-gray-700 font-semibold text-sm">{selectedOrder.address.phoneno}</p>
                                    </div>
                                )}
                                {selectedOrder.total && (
                                    <div>
                                        <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Total</p>
                                        <p className="text-gray-700 font-bold text-sm">₹{selectedOrder?.total}</p>
                                    </div>
                                )}
                            </div>

                            {/* Items list */}
                            <p className="text-gray-400 text-[10px] font-bold uppercase mb-3">Items</p>
                            <div className="flex flex-col gap-3">
                                {selectedOrder?.item.map((product, i) => (
                                    <div key={i} className="flex items-center gap-3 border border-gray-100 rounded-xl p-3">
                                        <img src={product.productid.images[0]}
                                            className="w-12 h-12 rounded-lg object-cover bg-gray-50"alt=""/>

                                        <div className="flex-1">
                                            <p className="text-gray-700 font-semibold text-sm">{product.productid.title}</p>
                                            <p className="text-gray-500 text-[12px] uppercase font-semibold"> {product.size}</p>
                                            <p className="text-gray-500 text-[12px] font-semibold">Qty: {product.quentity}</p>
                                            
                                        </div>

                                        <p className="text-gray-700 font-bold text-sm">₹{product.productid.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomerOrders