import React from 'react'
import { products } from '../../assets/CategoryList'
import { FiStar } from "react-icons/fi";

function BestSeller() {
  return (
    <div className="mt-8">
        <div>
            <div className="text-[14px] sm:text-[16px] uppercase font-bold text-gray-700">Best Seller</div>
            <div className="mt-5 flex flex-col gap-5">
                {products.slice(0, 4).map((item) => (
                    <div key={item.id ?? item.name}>
                        <div className="flex gap-2 items-center">
                            <div className="bg-gray-100 p-2 sm:p-3 rounded-lg shrink-0">
                                <img src="https://res.cloudinary.com/do98lw5ja/image/upload/v1769701858/products/nhorfqha7nuebhpg9aqp.png" className="w-8 sm:w-10" alt={item.name} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm sm:text-base truncate">{item.name}</p>
                                <div className="flex items-center text-[10px] sm:text-[12px] text-yellow-400">
                                    <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
                                </div>
                                <div className="flex font-semibold text-[11px] sm:text-[12px] items-center gap-2">
                                    <p className="line-through">₹{item.oldPrice.toFixed(2)}</p>
                                    <p className="text-gray-400 text-[14px] sm:text-[16px]">₹{item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BestSeller