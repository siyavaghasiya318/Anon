import React, { useContext } from 'react'
import { UserContext } from '../../../Context/UserContext'
import { Link, useParams } from 'react-router-dom'
import { FiStar } from 'react-icons/fi';

function Allproducts() {
  const { category, gender, subcategory } = useParams();

  const { getProducts } = useContext(UserContext)
  // const Filterdata = 
  let filteredProducts = getProducts.filter((item) => item.category == category && item.gender == gender && item.subcategory == subcategory)

  return (
    <>
      {/* <div className="my-20">
        <div className="grid grid-cols-3 px-30 gap-10 w-full">
          {filteredProducts?.map((item) => {
            return (
              <Link to={`/productdetail/${item._id}` }className="group">

                <div className="text-xl mb-10 font-semibold uppercase">{item.subcategory}</div>
                <div className="w-full h-50  hover:translate-y-0.5 transition-all duration-300 overflow-hidden hover:shadow-lg shadow-sm-pink-700 rounded-md">
                  <div className="flex gap-3  w-full h-full items-center bg-[#f5f4ef94]">

                    <div className="">
                      <div className="w-40 h-full group-hover:hidden"><img src={item?.images[0]} className="w-full h-full object-cover" alt="" /></div>
                      <div className="w-40 h-full group-hover:block hidden"><img src={item?.images[1]} className="w-full h-full object-cover" alt="" /></div>
                    </div>

                    <div className="text-sm flex flex-col w-34 gap-1">
                      <div className="font-semibold text-gray-700">{item?.title}</div>
                      <div className="text-gray-500 uppercase truncate text-[12px] font-semibold">{item?.subcategory}</div>
                      <div className="flex items-center gap-2">
                        <div className="text-[#FF8F9C] text-[18px] font-semibold">₹{item?.price.toFixed(2)}</div>
                        <div className="text-[12px] text-gray-400 line-through font-semibold">₹ 678</div>
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            )
          })}
        </div>
      </div> */}

      <div className="border leading-12 border-b-gray-100 border-t-0 border-x-0 mt-20 font-bold text-[22px]"></div>

      <div className="grid grid-cols-4 gap-5 mt-5 my-20 px-30 m-auto">
        {filteredProducts.map((item) => {
          return (
            <Link to={`/productdetail/${item._id}` }className="group">
              <div className="border border-gray-200 rounded-xl shadow-gray-300 hover:shadow-lg overflow-hidden">
                <div className="">
                  <div className="w-full h-full group-hover:hidden transition-all duration-300"><img src={item?.images?.[0]} className="w-full h-full object-cover" alt="" /></div>
                  <div className="w-full h-full group-hover:block hidden transition-all duration-300"><img src={item?.images?.[1]} className="w-full h-full object-cover" alt="" /></div>
                </div>


                <div className="flex justify-between w-full p-3 font- items-center text-[12px] font-semibold">
                  <div className="text-[#FF8F9C] w-25 line-clamp-2">{item?.title}</div>
                  <div className="text-gray-500 text-[12px]  font-semibold">@{item?.brand}</div>
                </div>

                <div className="p-3">
                  <div className="text-gray-700 font-semibold my-1 line-clamp-1">{item?.title}</div>
                  <div className="flex items-center text-yellow-400 my-2"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                  <div className="flex font-semibold items-center gap-2">
                    <p >₹{item?.price.toFixed(2)}</p>
                    <p className="line-through text-gray-400 text-sm">₹8765</p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Allproducts