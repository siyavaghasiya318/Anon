import { IoIosSearch } from "react-icons/io";
import React from 'react'

const ProductFilter = () => {
  return (
    <>
         <div>
            <div className="font-semibold uppercase">Filters</div>
            <hr className="text-gray-200 my-2" />
            <div className="border border-gray-200 p-5 rounded-xl">
                <div className="flex justify-between border w-fit px-5 items-center border-gray-400 rounded-full">
                  <input type="text" placeholder="Search Product" className="py-1 " />
                  <p className="text-gray-600"><IoIosSearch /></p>
                </div>
                <div className=""></div>
            </div>
        </div>
    </>
  )
}

export default ProductFilter