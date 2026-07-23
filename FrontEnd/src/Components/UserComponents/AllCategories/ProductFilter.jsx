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
            <div className="border border-gray-200 p-5   rounded-xl">
                <div className="flex px-4 border items-center border-gray-400 rounded-full">
                  <div className="w-35"><input type="search"  placeholder="Search Product" className="py-1 w-fit outline-0 " /></div>
                  <p className="text-gray-600"><IoIosSearch /></p>
                </div>
                <div className=""></div>
            </div>
        </div>
    </>
  )
}

export default ProductFilter