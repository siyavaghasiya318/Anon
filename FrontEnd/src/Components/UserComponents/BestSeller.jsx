import React from 'react'
import { products } from '../../assets/CategoryList'
import { FiStar } from "react-icons/fi";


function BestSeller() {
  return (
    <div className="mt-8">
        <div>
            <div className="text-[16px] uppercase font-bold text-gray-700">Best Seller</div>
            <div className="mt-5 flex flex-col gap-5">
                {products.slice(0,4).map((item) => {
                    return(
                        <>
                            <div>
                                <div className="flex gap-2 items-center">
                                    <div className="bg-gray-100 p-3 rounded-lg"><img src="https://res.cloudinary.com/do98lw5ja/image/upload/v1769701858/products/nhorfqha7nuebhpg9aqp.png" className="w-10" alt="" /></div>
                                    <div className="">
                                        <p className="">{item.name}</p>
                                        <div className="flex items-center text-[12px] text-yellow-400"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                                        <div className="flex font-semibold text-[12px] items-center gap-2">
                                            <p className="line-through">₹{item.oldPrice.toFixed(2)}</p>
                                            <p className=" text-gray-400 text-[16px]">₹{item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default BestSeller