import React, { useContext } from 'react'
import { GoDotFill } from "react-icons/go";
import { UserContext } from '../../../Context/UserContext'

const OrderSummery = () => {
  const { fetchCart,calculate,Checkoutdata } = useContext(UserContext)
  const total = fetchCart.reduce((acc, total) => acc + total.price, 0)
  const tax = (total * 0.05).toFixed(2)
  const Total = total + tax


  return (
    <div className="mt-20">
      <div className="bg-white h-175 p-8 shadow mt-10 rounded-2xl">
        <div className="text-[22px] font-extrabold text-gray-800"> Order Summary</div>

        <div className="mt-10 flex flex-col gap-5  no-scrollbar overflow-auto ">
          {fetchCart.map((item) => {
            return (
              <>
                <div className="flex gap-5">

                  <div className="w-15 "><img src={item.images[0]} className="w-full h-full object-cover  rounded-lg overflow-hidden" alt="" /></div>

                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-sm ">{item.title}</p>

                    <div className="flex gap-2 items-center">
                      <div className="text-xs font-bold text-gray-400 flex items-center gap-2">QTY: {item.quentity} <GoDotFill className="text-gray-300 text-[10px]" /></div>
                      <div className="text-sm font-extrabold text-[#FF8F9C]">₹{item.totalPrice}</div>
                    </div>

                    <div className="text-xs font-bold text-gray-400 uppercase">{item.size}</div>
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
            <p className="uppercase text-gray-400  font-extrabold text-[16px] tracking-wider">net total</p>
            <p className="text-3xl font-extrabold tracking-tighter ">₹ {calculate?.total}</p>
          </div>
        </div>
        
        <button onClick={Checkoutdata} className="bg-gray-900 w-full py-4 tracking-widest my-5 cursor-pointer rounded-lg text-white font-bold uppercase ">complete order</button>

      </div>
    </div>
  )
}

export default OrderSummery
