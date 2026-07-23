import React, { useContext, useState } from 'react'
import { UserContext } from '../../../Context/UserContext'
import { FaStar } from 'react-icons/fa';

const Order = () => {
  const { Profile, fetchOrder } = useContext(UserContext)
  const [rating, setRating] = useState(0);

  return (
    <div>
      <div className="md:w-95 m-auto md:m-0 flex items-center justify-between">
        <div className="font-semibold text-[22px] md:text-[24px]">My orders </div>
        <p className="text-sm  text-gray-400">{fetchOrder.length} total Orders</p>
      </div>


      {fetchOrder.length === 0 ?
        (<div className="flex flex-col mt-5  items-center py-30 m-auto justify-center bg-[rgba(251,199,205,0.26)] text-[#f87d8c] rounded-3xl  font-bold ">Start Shopping</div>) :
        (
          <>
            {fetchOrder.map((items) => {
              return (
                <>
                  <div className="md:w-105 w-full rounded-xl mb-5 pb-5 shadow-sm">
                    <div className="md:flex  bg-gray-50 p-5 justify-between uppercase text-[12px] font-semibold text-gray-500">

                      <div className="">
                        <div>Order Placed</div>
                        <div className="text-black">{new Date(items.orderDate).toLocaleDateString()}</div>
                      </div>
                      <div className="my-2 md:my-0">
                        <div>Total Amount</div>
                        <div className="text-black">₹{items.total}</div>
                      </div>

                      <div className="">
                        <div>Ship To</div>
                        <div className="text-[#ff8f9c]">{Profile?.name}</div>
                      </div>

                    </div>
                    <div className="uppercase text-[12px] px-5 flex md:flex-col gap-2 md:gap-0 text-gray-500 mt-5 font-semibold">
                      <div className="">Payment</div>
                      <div className="text-black">{items.paymentMethod}</div>
                    </div>
                    {items.item.map((pro) => {
                      return (
                        <>
                          <div className="flex  text-[10px] px-5 pt-2 md:pt-5 text-gray-500 justify-between">
                            <div className="flex gap-2  md:gap-5  text-[12px]">
                              <div className="">
                                <img src={pro.productid?.images[0]} className="w-23  border border-gray-200 rounded-lg" alt="" />
                              </div>
                              <div className="flex flex-col gap-2 font-semibold">
                                <div className="bg-gray-100 rounded-md px-2 py-1  ">QTY: {pro.quentity}</div>
                                <div className="text-black">₹ {pro.totalPrice}</div>
                              </div>

                            </div>


                            <div className="uppercase font-semibold flex flex-col items-end gap-2">
                              <div className="">Order Status</div>
                              <div className="text-blue-600 w-fit rounded-full uppercase bg-blue-100 px-3 py-1">{items.orderStatus}</div>

                              <div className="">Identifier</div>
                              <div className="w-fit  uppercase text-[12px] text-black font-bold"># {pro.productid?._id.slice(0, 7)}</div>

                            </div>

                          </div>
                          {items.orderStatus === "Delivered" ?
                            ("")
                            :
                            (<div className="md:hidden  flex flex-col px-5 pt-1  items-end"><button className="bg-[#ff909d] w-fit font-semibold text-[10px] md:text-sm px-3 md:px-5 py-2 rounded-lg text-white flex flex-col item-end">TRACK PACKAGE 🚚</button></div>)
                          }
                        </>
                      )
                    })}
                    {items.orderStatus === "Delivered" && (
                      <div className="mt-4 px-5">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                              key={star}
                              onClick={() => setRating(star)}
                              className={`md:text-lg cursor-pointer transition ${star <= rating ? "text-yellow-300" : "text-gray-200"
                                }`}
                            />
                          ))}
                        </div>

                        <textarea
                          placeholder="Write your review..."
                          className="w-full border rounded-lg text-sm md:text-md border-gray-200 p-3 mt-3 outline-none resize-none"
                          rows={2} />

                        <button className="md:mt-3 mt-1 bg-[#ff909d] text-white px-4  text-[12px] py-2 font-bold rounded-lg hover:bg-[#f87d8 hover:scale-103 transition-all duration-300 cursor-pointer hover:shadow">
                          Submit Review
                        </button>
                      </div>
                    )}
                    {items.orderStatus === "Delivered" ?
                      ("")
                      : (<div className=" p-5 flex flex-col hidden md:block items-end"><button className="bg-[#ff909d] w-fit font-semibold text-xs md:text-sm px-5 py-2 rounded-lg text-white flex flex-col item-end">TRACK PACKAGE 🚚</button></div>)
                    }
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
