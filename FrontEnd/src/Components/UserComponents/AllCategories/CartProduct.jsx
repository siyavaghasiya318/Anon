import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../Context/UserContext'
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CartProduct = () => {
  const { fetchCart, DecQuentity, CartProduct, navigate, calculate } = useContext(UserContext)
  
  const subtotal = fetchCart.reduce((acc, item) => {
    return acc + item.totalPrice;
  }, 0);
  
  
  const tax = subtotal * 0.05;

  const total = subtotal + tax;

  

  return (
    <div className="lg:px-25  xs:px-15 md:px-20 my-5 xs:my-10">
      <div className="p-8 lg:flex gap-10 py-10 bg-gray-50 rounded-2xl  border-e-red-800">
        {fetchCart.length === 0 ?
        
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
            <div className="lg:w-[70%] w-full">
              <>
                <p className="text-gray-700  font-bold md:text-[30px] md:p-10 p-5 text-[22px] xs:text-[27px] text-shadow-2xs">Shopping Cart</p>
                <div className="  rounded-2xl flex flex-col gap-5 md:px-10 sm:px-6 px-4">
                  {fetchCart.map((item) => {
                    return (
                      <>
                        <div className="bg-white flex text-gray-700 shadow-sm rounded-xl overflow-hidden md:p-3 lg:p-5 p-3  gap-6">
                          <Link to={`/productdetail/${item._id}`}  className="lg:w-28 md:w-24 md:h-27 sm:w-21 sm:h-22 w-18 h-19  flex flex-col justify-center m-auto"><img src={item.images[0]} className="w-full h-full object-cover border border-gray-100 rounded-lg" alt="" /></Link>
                          <div className="flex flex-col gap-1 w-full">

                            <div className="flex  justify-between items-center">
                              <p className="font-bold lg:text-md md:text-sm sm:text-sm text-xs truncate w-30 xs:w-45 sm:w-55">{item.title}</p>
                              <i className="text-[#FF8F9C] sm:text-md lg:text-[18px] text-sm">< RiDeleteBinLine /></i>
                            </div>

                            <p className="text-gray-500 lg:px-3 px-2 lg:py-1  w-fit bg-gray-100 rounded-full font-semibold text-[10px] sm:text-[12px] md:text-[13px] lg:text-sm">size : <span className="text-[10px] uppercase">{item.size}</span></p>

                            <p className="text-[#FF8F9C] md:text-md sm:text-sm text-xs lg:text-[18px] font-extrabold ">₹ {item.totalPrice.toFixed(2)}</p>



                            <button className="flex border mt-1 w-fit px-2 sm:px-3 lg:py-1 items-center sm:gap-4 gap-2 rounded-md border-gray-200 cursor-pointer ">
                              <i onClick={() => DecQuentity(item.id, item.size)} className="lg:text-[10px] text-[7px]">< FaMinus /></i>
                              <div className="lg:text-md md:text-sm sm:text-xs text-xs">{item.quentity}</div>
                              <i onClick={() => CartProduct(item.id, item.size)} className="lg:text-[10px] text-[7px] " >< FaPlus /></i>
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


            <div className="lg:w-[30%] w-full  text-gray-700">
              <div className="bg-white lg:mt-30 md:mt-20 mt-10 p-6 flex flex-col gap-3 shadow-sm rounded-2xl">
                <p className="text-gray-700  font-bold text-[25px] text-shadow-2xs">Order Summary </p>

                <div className="flex items-center justify-between">
                  <p className="w-20">Subtotal ({fetchCart.length} items)</p>
                  <p>₹ {subtotal.toFixed(2)}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="w-20">Tax(5%)</p>
                  <p>₹ {tax.toFixed(2)}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="w-20">Shipping </p>
                  <p className="text-green-600 font-semibold">
                    Free
                  </p>
                </div>

                <hr className="text-gray-200 my-5" />

                <div className="flex items-center text-xl font-bold justify-between">
                  <p className="w-20">Total </p>
                  <p>₹ {total.toFixed(2)}</p>
                </div>

                <Link to="/checkout" className="bg-[#FF8F9C] hover:scale-104 hover:shadow transition-all overflow-hidden duration-300 hover:bg-[#fdecee] hover:text-[#FF8F9C] py-3 mt-6 rounded-2xl  text-center text-white font-bold text-lg ">Proceed to Checkout</Link>

                <Link to="/" onClick={() => window.scrollTo(0,0)} className="text-[#FF8F9C]  text-center">Continue Shopping</Link>

              </div>

            </div>
          </>)
        }
      </div>

    </div>
  )
}

export default CartProduct
