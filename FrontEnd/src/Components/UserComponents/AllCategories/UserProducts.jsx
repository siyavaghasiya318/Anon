import React, { useContext } from 'react'
import { products } from '../../../assets/CategoryList'
import { FiStar } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';


function UserProducts({ category, gender }) {
    console.log(gender);

    const { getProducts ,search, setsearch} = useContext(UserContext)


    let filteredProducts = getProducts.filter((item) => item.category == category && item.gender == gender)
  
    const searchProducts = getProducts.filter((item) => {
      const searchText = search?.toLowerCase() || "";
  
      return (
        item.title.toLowerCase().includes(searchText) ||
        item.brand?.toLowerCase().includes(searchText) ||
        item.subcategory?.toLowerCase().includes(searchText) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchText))
      ) 
    } )



    return (
        <>

            <div className=""></div>
            <div className="mb-30">
                <div className="grid grid-cols-4 gap-6 ">
                    {(search ? searchProducts: ilteredProducts)?.map((item) => {
                        return (
                            <div className="group border border-red-200   rounded-2xl  ">
                                <div className="group-hover:shadow-2xl h-full rounded-2xl  group-duration-300 transition-all">
                                    <div className=" px-3 py-2 ">
                                        <div className="relative overflow-hidden  flex flex-col justify-between">
                                            <div className="group-hover:hidden  w-full h-55 py-3 flex flex-col justify-center items-center m-auto "><img src={item?.images[0]} className="object-cover w-full h-full rounded-lg" alt="" /></div>
                                            <div className="hidden group-hover:block w-full h-55 py-3 flex flex-col justify-center items-center m-auto"><img src={item?.images[1]} className="object-cover w-full h-full rounded-lg" alt="" /></div>
                                            <div className="absolute top-2 flex flex-col gap-1 right-[-50px] group-hover:right-[0px] transition-all duration-500">
                                                <p className="border border-gray-200 bg-white p-1 text-[18px] rounded-sm shadow-2xl"><IoIosHeartEmpty /></p>
                                                <Link to={`/productdetail/${item._id}`} className="border border-gray-200 bg-white p-1 text-[18px] rounded-sm shadow-2xl "><IoEyeOutline /></Link>
                                                <p onClick={() => CartProduct(item._id, selectedSize)} className="border border-gray-200 cursor-pointer bg-white p-1 text-[18px] rounded-sm shadow-2xl"><IoBagAddOutline /></p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between w-full font- items-center text-[12px] font-semibold">
                                            <div className="text-[#FF8F9C] truncate uppercase w-25">{item?.subcategory}</div>
                                            <div className="text-gray-500 text-[12px]  font-semibold">@{item?.brand}</div>
                                        </div>
                                        <div className="text-gray-700 truncate font-semibold my-1">{item?.title}</div>
                                        <div className="flex items-center text-yellow-400 my-2"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                                        <div className="flex font-semibold items-center gap-2">
                                            <p >₹{item.price.toFixed(2)}</p>
                                            <p className="line-through text-gray-400 text-sm">₹5678</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default UserProducts