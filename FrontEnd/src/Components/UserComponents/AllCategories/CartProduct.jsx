import React, { useContext } from 'react'
import { UserContext } from '../../../Context/UserContext'
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CartProduct = () => {
  const { fetchCart, DecQuentity, CartProduct, navigate, calculate } = useContext(UserContext)
  // console.log("fetxhcart", fetchCart);

  const total = fetchCart.reduce((acc, total) => acc + total.price, 0)
  const tax = total * 0.05
  const Total = total + tax
 
 

  return (
    <div className="px-25 my-10">
      <div className="p-8 flex gap-10 py-10 bg-gray-50 rounded-2xl  border-e-red-800">
        {fetchCart.length == 0 ?
          (<>
            <div className="flex gap-5 flex-col justify-end py-10 h-80  w-2/3 items-center bg-white rounded-2xl shadow-sm m-auto" >
              <div className="text-[100px] relative  text-[#FF8F9C]"><MdShoppingBag />
                <p className="text-white font-extrabold text-[25px] top-11 right-10 absolute">A</p>
              </div>
              <p className="text-[#FF8F9C] font-semibold">Your Shopping Bag is Empty!!</p>
              <button onClick={() => navigate("/")} className="text-center mt-3 animate-bounce cursor-pointer w-fit border px-6 py-3 hover:bg-[#FF8F9C] outline-0 transition-all duration-300 shadow shadow-pink-200 hover:text-white text-[#FF8F9C] rounded-xl font-bold text-[18px] border-[#FF8F9C]">Start Shopping</button>
            </div>
          </>) :
          (<>
            <div className="w-[70%] ">
              <>
                <p className="text-gray-700  font-bold text-[30px] p-10 text-shadow-2xs">Shopping Cart</p>
                <div className="  rounded-2xl flex flex-col gap-5 px-10 ">
                  {fetchCart.map((item) => {
                    return (
                      <>
                        <div className="bg-white flex text-gray-700 shadow-sm rounded-xl overflow-hidden p-5  gap-6">
                          <div className="w-28 "><img src={item.images[0]} className="w-full h-full object-cover border border-gray-100 rounded-lg" alt="" /></div>
                          <div className="flex flex-col gap-1 w-full">

                            <div className="flex  justify-between items-center">
                              <p className="font-bold text  truncate w-55">{item.title}</p>
                              <i className="text-[#FF8F9C] text-[18px]">< RiDeleteBinLine /></i>
                            </div>

                            <p className="text-gray-500 px-3 py-1  w-fit bg-gray-100 rounded-full font-semibold text-sm">size : <span className="text-[10px] uppercase">{item.size}</span></p>

                            <p className="text-[#FF8F9C] text-[18px] font-extrabold ">₹ {item.totalPrice.toFixed(2)}</p>



                            <button className="flex border w-fit px-3 py-1 items-center gap-4 rounded-md border-gray-200 cursor-pointer ">
                              <i onClick={() => DecQuentity(item._id, item.size)} className="text-[10px] ">< FaMinus /></i>
                              <div className="">{item.quentity}</div>
                              <i onClick={() => CartProduct(item._id, item.size)} className="text-[10px] " >< FaPlus /></i>
                            </button>

                            {/* <p className="text-[13px] text-gray-600 capitalize">{item.shortdescription}</p> */}
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>
              </>
            </div>


            <div className="w-[30%]  text-gray-700">
              <div className="bg-white mt-30 p-6 flex flex-col gap-3 shadow-sm rounded-2xl">
                <p className="text-gray-700  font-bold text-[25px] text-shadow-2xs">Order Summary </p>

                <div className="flex items-center justify-between">
                  <p className="w-20">Subtotal ({fetchCart.length} items)</p>
                  <p>₹ {calculate?.subtotal.toFixed(2)}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="w-20">Tax(5%)</p>
                  <p>₹ {tax.toFixed(2)}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="w-20">Shipping </p>
                  <p className="text-green-600 font-semibold">
                    {Total >= 5000 ?
                      (<>"Free</>):
                      (<>₹ 100</>)
                    }
                  </p>
                </div>

                <hr className="text-gray-200 my-5" />

                <div className="flex items-center text-xl font-bold justify-between">
                  <p className="w-20">Total </p>
                  <p>₹ {Total}</p>
                </div>

                <Link to="/checkout" className="bg-[#FF8F9C] hover:scale-104 hover:shadow transition-all overflow-hidden duration-300 hover:bg-[#fdecee] hover:text-[#FF8F9C] py-3 mt-6 rounded-2xl  text-center text-white font-bold text-lg ">Proceed to Checkout</Link>

                <Link to="/" className="text-[#FF8F9C]  text-center">Continue Shopping</Link>

              </div>

            </div>
          </>)
        }
      </div>

    </div>
  )
}

export default CartProduct
