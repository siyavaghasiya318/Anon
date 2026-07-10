import React, { useContext } from 'react'
import { FaBoxOpen, FaFilter, FaPlus } from 'react-icons/fa'
import { IoSearch } from "react-icons/io5";
import { MdLocalOffer } from 'react-icons/md'
import { UserContext } from '../../Context/UserContext';
import { GoDotFill } from 'react-icons/go';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const SellerProducts = () => {
    const { navigate, getSellerProducts,setGetSellerProducts } = useContext(UserContext)
    const thclass = "py-5 px-7"
    const tdclass = "py-6 px-7"

        // stock ka max maan lo 100 (progress bar ke liye) - apne hisaab se adjust kar lena
    const maxStock = 100


    return (
        <div className="">
            <div className="flex justify-between items-center">

                <div className="">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight uppercase text-[30px] font-bold">Inventory Management </div>
                    <div className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Catalog Control & Statistics</div>
                </div>

                <button onClick={() => navigate("/seller/products/add")} className="flex items-center px-8 py-4 gap-3 w-fit rounded-lg text-white bg-purple-600">
                    <i className="text-[12px]"><FaPlus /></i>
                    <div className="text-[12px] font-bold ">Add new item</div>
                </button>

            </div>

            <div className="flex gap-5 mt-8">
                <div className="rounded-2xl bg-white w-full py-6 text-center">
                    <p className="text-gray-400 font-bold text-[12px] uppercase">Total</p>
                    <p className="text-purple-600 font-bold text-[25px]">{getSellerProducts.length}</p>
                </div>
                <div className="rounded-2xl bg-white w-full py-6 text-center">
                    <p className="text-gray-400 font-bold text-[12px] uppercase">active</p>
                    <p className="text-green-600 font-bold text-[25px]">0</p>
                </div>
                <div className="rounded-2xl bg-white w-full py-6 text-center">
                    <p className="text-gray-400 font-bold text-[12px] uppercase">low cost</p>
                    <p className="text-red-600 font-bold text-[25px]">0</p>
                </div>
                <div className="rounded-2xl bg-white w-full py-6 text-center">
                    <p className="text-gray-400 font-bold text-[12px] uppercase">out</p>
                    <p className="text-orange-600 font-bold text-[25px]">0</p>
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

            <div className="bg-white rounded-3xl  mt-10">
                {getSellerProducts.length === 0 ?
                    (<div className="flex flex-col gap-6 h-80 bg-white   text-gray-400 items-center justify-center">
                        <div className="bg-gray-50  w-20 h-20 rounded-full text-gray-200  flex flex-col justify-center items-center"><FaBoxOpen className="text-[35px]" /></div>
                        <div className="text-[10px] uppercase font-extrabold tracking-widest ">No item found</div>
                        <button onClick={() => navigate("/seller/products/add")} className="bg-gray-900 px-8 py-3 cursor-pointer rounded-xl uppercase text-[10px] tracking-widest font-bold text-white">Add iteam</button>
                    </div>) :
                    (<>
                    <table className="w-full">
                        <thead className="border-b tracking-widest border-gray-200">
                            <tr className="uppercase text-left font-extrabold text-[10px] text-gray-400">
                                <th className="px-8 py-5">Item info</th>
                                <th className={thclass}>Category</th>
                                <th className={thclass}>Pricing</th>
                                <th className={thclass}>Inventory</th>
                                <th className={thclass}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {getSellerProducts.map((item) => {
                                const stockPercent = Math.min((item.livestock / maxStock) * 100, 100)
                                return (
                                    <tr key={item.id} className="border-b border-gray-100 last:border-0">

                                        {/* Item info */}
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <img src={item.images[0]}  className="w-11 h-11 object-cover rounded-xl bg-gray-50" alt="img"/>
                                                <div>
                                                    <p className="text-gray-800 text-[14px] font-bold">{item.name}</p>
                                                    <div className="flex items-center gap-1 mt-1">
                                                        <GoDotFill className="text-emerald-500 text-[8px]" />
                                                        <p className="text-emerald-500 text-[11px] font-bold uppercase"> {item.status || "Active"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Category */}
                                        <td className={tdclass}>
                                            <p className="px-3 py-1.5 bg-gray-100 text-gray-500 rounded-full w-fit text-[10px] font-bold uppercase">
                                                {item.category}
                                            </p>
                                        </td>

                                        {/* Pricing */}
                                        <td className={tdclass}>
                                            <div className="font-bold text-gray-800 text-sm">₹{item.price}</div>
                                            <p className="text-emerald-500 text-[11px] font-bold">
                                                SALE: ₹{item.salePrice || item.price}
                                            </p>
                                        </td>

                                        {/* Inventory */}
                                        <td className={tdclass}>
                                            <div className="flex items-center justify-between mb-1.5 w-32">
                                                <p className="text-gray-400 text-[10px] font-bold uppercase">Stock:</p>
                                                <p className="text-emerald-500 text-[12px] font-bold">{item.livestock}</p>
                                            </div>
                                            <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-emerald-500 rounded-full"
                                                    style={{ width: `${stockPercent}%` }}
                                                ></div>
                                            </div>
                                        </td>

                                        {/* Actions */}
                                        <td className={tdclass}>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => navigate(`/seller/products/edit/${item.id}`)}
                                                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition"
                                                >
                                                    <FiEdit2 className="text-[15px]" />
                                                </button>
                                                <button
                                                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition"
                                                >
                                                    <RiDeleteBin6Line className="text-[15px]" />
                                                </button>
                                            </div>
                                        </td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                            
                    </>)
                }
            </div>


        </div>
    )
}

export default SellerProducts
