import { IoIosSearch } from "react-icons/io";
import React, { useContext } from 'react'
import { UserContext } from "../../../Context/UserContext";

const ProductFilter = () => {
  const{searchHandleChange,search} = useContext(UserContext)
  return (
    <>
         <div className="w-full">
            <div className="font-semibold uppercase ">Filters</div>
            <hr className="text-gray-200 my-2" />
            <div className="border border-gray-200 lg:p-5 p-3 sm:p-4 mt-4 lg:mt-0 rounded-xl">
                <div className="flex px-4 border  items-center border-gray-400 rounded-full">
                  <div className="lg:w-35 w-42 sm:w-50"><input type="search"  placeholder="Search Product" className="py-1 w-fit outline-0 " /></div>
                  <p className="text-gray-600"><IoIosSearch /></p>
                </div>
                <div className=""></div>
            </div>
        </div>
    </>
  )
}

export default ProductFilter