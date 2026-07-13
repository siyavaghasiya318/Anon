import React, { useContext } from 'react'
import { products } from '../../assets/CategoryList'
import { UserContext } from '../../Context/UserContext'
import { Link } from 'react-router-dom'

function Products() {
  const{getProducts,search, setsearch} = useContext(UserContext)

  
  return (
    <>
        <div className="text-[20px] font-bold  text-gray-400 mb-4">All Products</div>
        <div className="grid grid-cols-3 gap-5 w-full">
          {getProducts?.map((item) => {
            return(
              <Link to={`/productdetail/${item._id}`} onClick={() => window.scrollTo(0, 0)} >
                <div  className="w-full h-30 overflow-hidden hover:shadow-lg shadow-sm -gray-200 rounded-md">
                  <div className="flex gap-3  w-full h-full items-center bg-[#f5f4ef94]">
                    <div className="w-23 "><img src={item?.images[0]} className="w-full h-full object-cover" alt="" /></div>
                    <div className="text-sm flex flex-col  gap-1">
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
    </>
  )
}

export default Products