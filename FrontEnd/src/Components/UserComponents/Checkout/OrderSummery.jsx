import React, { useContext } from 'react'
import { GoDotFill } from "react-icons/go";
import { UserContext } from '../../../Context/UserContext'

const OrderSummery = () => {
  const { fetchCart,calculate,Checkoutdata } = useContext(UserContext)
  const total = fetchCart.reduce((acc, total) => acc + total.price, 0)
  const tax = (total * 0.05).toFixed(2)
  const Total = total + tax


  return (
    <div className="md:mt-20 mt-10">
      <div className="bg-white p-8 shadow mt-10 rounded-2xl">
        <div className="lg:text-[22px] md:text-lg text-[20px] font-extrabold text-gray-800"> Order Summary</div>

        <div className="mt-10 flex flex-col max-h-65 gap-5 overflow-auto  no-scrollbar ">
          {fetchCart.map((item) => {
            return (
              <>
                <div className="flex gap-5">

                  <div className="w-15 h-full md:w-12 md:h-15 lg:w-15 lg:h-full "><img src={item.images[0]} className="w-full h-full object-cover  rounded-lg overflow-hidden" alt="" /></div>

                  <div className="flex flex-col gap-1 md:gap-0 lg:gap-1">
                    <p className="font-bold text-sm md:text-xs lg:text-sm">{item.title}</p>

                    <div className="flex gap-2 items-center">
                      <div className="text-xs font-bold text-gray-400 flex items-center gap-2 md:text-[10px] lg:text-xs">QTY: {item.quentity} <GoDotFill className="text-gray-300 text-[10px]" /></div>
                      <div className="text-sm font-extrabold text-[#FF8F9C] md:text-xs lg:text-sm">₹{item.totalPrice}</div>
                    </div>

                    <div className="text-xs md:text-[10px] lg:text-sm font-bold text-gray-400 uppercase">{item.size}</div>
                  </div>

                </div>
              </>
            )
          })}
        </div>

        
          <hr className="my-10 text-gray-200" />
        <div className="flex flex-col gap-4 uppercase text-xs font-bold text-gray-700">
          <div className="flex items-center justify-between">
            <p className="">Subtotal</p>
            <p>₹ {calculate?.subtotal}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="w-20">Tax ( 5% ) </p>
            <p>₹ {tax}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="w-20">Shipping </p>
            <p className="text-green-600 font-semibold">Free</p>
          </div>

          <div className="flex justify-between items-center ">
            <p className="uppercase text-gray-400  font-extrabold text-[16px] md:text-sm lg:text-md tracking-wider">net total</p>
            <p className="text-2xl font-extrabold tracking-tighter lg:text-3xl">₹ {calculate?.total}</p>
          </div>
        </div>
        
        <button onClick={Checkoutdata} className="bg-gray-900 w-full py-3 lg:py-4 text-sm lg:text-md tracking-widest my-5 cursor-pointer rounded-lg text-white font-bold uppercase ">complete order</button>

      </div>
    </div>
  )
}

export default OrderSummery
