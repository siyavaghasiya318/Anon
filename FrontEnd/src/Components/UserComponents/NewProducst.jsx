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
            <div className="border  leading-12 border-b-gray-100 border-t-0 border-x-0 mt-20 font-bold text-[22px]">New Producst</div>

            <div className="grid grid-cols-4 gap-5  mt-5">
                {latestProducts.map((item) => {
                    return (
                        <>
                            <Link to={`/productdetail/${item._id}`} onClick={() => window.scrollTo(0, 0)} 
                            className="border overflow-hidden group border-gray-200 relative rounded-lg h-85 shadow-gray-300 hover:shadow-lg px-3">
                                <div className="group overflow-hidden">
                                    <div className="w-40 h-50 m-auto group-hover:hidden"><img src={item.images[0]} className="w-full h-full m-auto" alt="img " /></div>
                                    <div className="w-40 h-50  m-auto hidden group-hover:block"><img src={item.images[1]} className="w-full h-full m-auto" alt="" /></div>
                                </div>
                                <div className="flex justify-between w-full  items-center text-[12px] gap-5 font-semibold">
                                    <div className="text-[#FF8F9C] w-25">{item.title}</div>
                                    <div className="text-gray-500 text-[11px]   font-semibold">@{item.brand}</div>
                                </div>
                                <div className="text-gray-700 font-semibold my-1">{item.subcategory}</div>
                                <div className="flex items-center text-yellow-400 my-2"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                                <div className="flex font-semibold items-center gap-2">
                                    <p >₹{item.price.toFixed(2)}</p>
                                    <p className="line-through text-gray-400 text-sm">₹767</p>
                                </div>
                                 {/* <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-3 -left-6 w-24 bg-[#ff8f9c] text-white text-[11px] font-bold text-center py-1 rotate-[-45deg]">
            NEW
        </div>
    </div> */}
                               <div className="bg-[#ff909d] rotate-320 absolute top-9 -left-5 "> <div className="absolute px-8 py-1 text-[10px] font-bold text-white bg-[#ff909d] uppercase">new</div></div>
                            </Link>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default NewProducst