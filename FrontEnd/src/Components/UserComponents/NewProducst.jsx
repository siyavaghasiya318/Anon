import React from 'react'
import { FiStar } from "react-icons/fi";
import { products } from '../../assets/CategoryList';


function NewProducst() {
  return (
    <>
        <div className="border leading-12 border-b-gray-100 border-t-0 border-x-0 mt-20 font-bold text-[22px]">New Producst</div>

        <div className="grid grid-cols-4 gap-5 mt-5">
            {products.map((item) => {
                return(
                    <>
                        <div className="border border-gray-200 rounded-lg shadow-gray-300 hover:shadow-lg px-3">
                            <div><img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTN8saGBqxlFZSLncVFtUcZfZoIdRN0EJtpSRMXn1WJOPcAdjL2n7mCuPkQqOaWJpinqYqrkQmUv2ZgKGaAbmsTW0jp2nO0ypyDuvOpahEB6AtH1BUWQOzX0g" className="w-30 m-auto" alt="" /></div>
                            <div className="flex justify-between w-full font- items-center text-[12px] font-semibold">
                                <div className="text-[#FF8F9C] w-25">{item.name}</div>
                                <div className="text-gray-500 text-[12px]  font-semibold">@{item.brand}</div>
                            </div>
                            <div className="text-gray-700 font-semibold my-1">{item.name}</div>
                            <div className="flex items-center text-yellow-400 my-2"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                            <div className="flex font-semibold items-center gap-2">
                                <p >₹{item.price.toFixed(2)}</p>
                                <p className="line-through text-gray-400 text-sm">₹{item.oldPrice}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    </>
  )
}

export default NewProducst