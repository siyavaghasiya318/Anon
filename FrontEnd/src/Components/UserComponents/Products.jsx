import React, { useContext } from 'react'
import { products } from '../../assets/CategoryList'
import { UserContext } from '../../Context/UserContext'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

function Products() {
  const { getProducts,loading,navigate } = useContext(UserContext)
  if (loading) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#FF8F9C] border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading products...</p>
      </div>
    </div>
  );
}
  return (
    <>
    
      <div className="text-[20px] font-bold text-gray-400 mb-4">All Products</div>
      <div  className="grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 w-full">
        {getProducts?.map((item) => {
          return (
            <div
              key={item._id}
              // to={`/productdetail/${item._id}`}
              onClick={() => { navigate(`/productdetail/${item._id}`) ,window.scrollTo(0, 0)}}
            >
              <motion.div initial={{ y: 100 ,opacity:0}} whileInView={{ y: 0,opacity:1 }} transition={{ duration: 0.5 }} className="w-full  h-full overflow-hidden hover:shadow-lg shadow-sm border border-gray-200 rounded-md transition-shadow duration-200">
                <div className="flex gap-3 w-full h-full items-center bg-[#f5f4ef94] p-2">
                  <div className="xs:w-20 w-25 h-30 xs:h-full sm:w-24 flex-shrink-0 aspect-square">
                    <img
                      src={item?.images[0]}
                      className="w-full h-full  object-cover rounded"
                      alt={item?.title || 'product'}
                    />
                  </div>
                  <div className="text-sm flex flex-col gap-1 min-w-0">
                    <div className="font-semibold  text-gray-700 w-40 xs:w-full truncate">
                      {item?.title}
                    </div>
                    <div className="text-gray-500 uppercase truncate text-[12px] font-semibold">
                      {item?.subcategory}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="text-[#FF8F9C] text-[16px] sm:text-[18px] font-semibold">
                        ₹₹{Number(item.price ?? 0).toFixed(2)}
                      </div>
                      <div className="text-[12px] text-gray-400 line-through font-semibold">
                        ₹ 678
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Products