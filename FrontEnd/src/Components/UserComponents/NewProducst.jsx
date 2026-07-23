import React, { useContext } from 'react'
import { FiStar } from "react-icons/fi";
import { products } from '../../assets/CategoryList';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';


function NewProducst() {
    const { getProducts } = useContext(UserContext)
    const latestProducts = [...getProducts]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 8)

    return (
        <>
            <div className="border leading-12 border-b-gray-100 border-t-0 border-x-0 mt-12 sm:mt-20 font-bold text-[20px] sm:text-[22px]">
                New Products
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-5">
                {latestProducts.map((item) => {
                    return (
                        <Link
                            key={item._id}
                            to={`/productdetail/${item._id}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className="border overflow-hidden group border-gray-200 relative rounded-lg h-auto shadow-gray-300 hover:shadow-lg px-2 sm:px-3 pb-3"
                        >
                            <div className="overflow-hidden">
                                <div className="w-full aspect-[4/5] group-hover:hidden">
                                    <img src={item.images[0]} className="w-full h-full object-contain" alt={item.title} />
                                </div>
                                <div className="w-full aspect-[4/5] hidden group-hover:block">
                                    <img src={item.images[1]} className="w-full h-full object-contain" alt={item.title} />
                                </div>
                            </div>

                            <div className="flex justify-between w-full items-start text-[11px] sm:text-[12px] gap-2 sm:gap-5 font-semibold mt-2">
                                <div className="text-[#FF8F9C] flex-1 min-w-0 truncate">{item.title}</div>
                                <div className="text-gray-500 text-[10px] sm:text-[11px] font-semibold whitespace-nowrap">
                                    @{item.brand}
                                </div>
                            </div>

                            <div className="text-gray-700 text-sm sm:text-base font-semibold my-1 truncate">
                                {item.subcategory}
                            </div>

                            <div className="flex items-center text-yellow-400 my-2 text-sm sm:text-base">
                                <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
                            </div>

                            <div className="flex font-semibold items-center gap-2 text-sm sm:text-base">
                                <p>₹{item.price.toFixed(2)}</p>
                                <p className="line-through text-gray-400 text-xs sm:text-sm">₹767</p>
                            </div>

                            <div className="absolute top-4 sm:top-9 -left-5 -rotate-45">
                                <div className="px-6 sm:px-8 py-1 text-[9px] sm:text-[10px] font-bold text-white bg-[#ff909d] uppercase">
                                    new
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default NewProducst