import React from 'react'
import { products } from '../../assets/CategoryList'
import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

function RecomandedPro() {
  return (
    <>
      <div className="">
        <div className="border leading-12 border-b-gray-100 border-t-0 border-x-0 mt-12 sm:mt-20 font-bold text-[20px] sm:text-[22px]">
          You Might Also like
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-5">
          {products.slice(0, 4).map((item, index) => {
            return (
              <motion.div
                initial={{ y: 100,opacity:0 }} whileInView={{ y: 0,opacity:1 }} transition={{ duration: 0.5 }}
                key={item.id || index}
                className="border border-gray-200 rounded-lg shadow-gray-300 hover:shadow-lg px-2 sm:px-3 pb-3"
              >
                <div className="w-full aspect-square">
                  <img
                    src="https://res.cloudinary.com/do98lw5ja/image/upload/v1769679990/products/wazrnd4o8erjhfqnlc5k.png"
                    className="w-full h-full object-contain"
                    alt={item.name}
                  />
                </div>
                <div className="flex justify-between w-full items-start text-[11px] sm:text-[12px] gap-2 font-semibold">
                  <div className="text-[#FF8F9C] flex-1 min-w-0 truncate">{item.name}</div>
                  <div className="text-gray-500 text-[10px] sm:text-[12px] font-semibold whitespace-nowrap">
                    @{item.brand}
                  </div>
                </div>
                <div className="text-gray-700 text-sm sm:text-base font-semibold my-1 truncate">
                  {item.name}
                </div>
                <div className="flex items-center text-yellow-400 my-2 text-sm sm:text-base">
                  <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
                </div>
                <div className="flex font-semibold items-center gap-2 text-sm sm:text-base">
                  <p>₹{Number(item.price ?? 0).toFixed(2)}</p>
                  <p className="line-through text-gray-400 text-xs sm:text-sm">₹{item.oldPrice}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default RecomandedPro