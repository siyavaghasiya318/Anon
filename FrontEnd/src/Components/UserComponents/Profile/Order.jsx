import React, { useContext } from 'react'
import { UserContext } from '../../../Context/UserContext'

const Order = () => {
  const { Profile, fetchOrder } = useContext(UserContext)
  
  return (
    <div>
      <div className=" w-95  flex items-center justify-between">
        <div className="font-semibold text-[24px]">My orders </div>
        <p className="text-sm  text-gray-400">1 total Orders</p>
      </div>


      {fetchOrder.length === 0 ?
        (<div className="flex flex-col items-center py-30 m-auto justify-center">Start Shopping</div>) :
        (
          <>
            {fetchOrder.map((items) => {
              return (
                <>
                  <div className="w-105 mt-5 rounded-xl  shadow-sm">
                    <div className="flex bg-gray-50 p-5 justify-between uppercase text-[12px] font-semibold text-gray-500">

                      <div className="">
                        <div>Order Placed</div>
                        <div className="text-black">{new Date(items.orderDate).toLocaleDateString()}</div>
                      </div>
                      <div className="">
                        <div>Total Amount</div>
                        <div className="text-black">₹{items.total}</div>
                      </div>

                      <div className="">
                        <div>Ship To</div>
                        <div className="text-[#ff8f9c]">{Profile?.name}</div>
                      </div>

                    </div>
                    <div className="uppercase text-[12px] px-5 text-gray-500 mt-5 font-semibold">
                      <div className="">Payment</div>
                      <div className="text-black">{items.paymentMethod}</div>
                    </div>
                    {items.item.map((pro) => {
                      return (
                        <>
                          <div className="flex  text-[10px] px-5 pt-5 text-gray-500 justify-between">
                            <div className="flex gap-5 text-[12px]">
                              <div className=""><img src={pro.productid.images[0]} className="w-23 border border-gray-200 rounded-lg" alt="" /></div>
                              <div className="flex flex-col gap-2 font-semibold">
                                <div className="bg-gray-50 rounded-full px-2 py-1 ">QTY: {pro.quentity}</div>
                                <div className="text-black">₹ {pro.totalPrice}</div>
                              </div>
                            </div>

                            <div className="uppercase font-semibold flex flex-col items-end gap-2">
                              <div className="">Order Status</div>
                              <div className="text-blue-600 w-fit rounded-full uppercase bg-blue-100 px-3 py-1">{items.orderStatus}</div>
                              <div className="">Identifier</div>
                              <div className="w-fit  uppercase text-[12px] text-black font-bold"># {pro.productid._id.slice(0, 7)}</div>

                            </div>
                          </div>

                        </>
                      )
                    })}
                    <div className=" p-5 flex flex-col  items-end"><button className="bg-[#ff909d] w-fit font-semibold text-sm px-5 py-2 rounded-lg text-white flex flex-col item-end">TRACK PACKAGE 🚚</button></div>
                  </div>
                </>
              )
            })}
          </>
        )
      }





    </div>
  )
}

export default Order
