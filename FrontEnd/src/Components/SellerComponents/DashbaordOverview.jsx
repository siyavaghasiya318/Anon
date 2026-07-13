import React, { useContext } from 'react'
import { performance } from '../../assets/CategoryList'
import { GoDotFill } from "react-icons/go";
import { FaBoxOpen, FaCheckCircle } from 'react-icons/fa';
import { FaTriangleExclamation } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';


const DashbaordOverview = () => {

  const { showAllOrders,getSellerProducts } = useContext(UserContext)

  const processingOrders = showAllOrders.filter((order) => order.orderStatus === "Processing").length
  const shippedOrders = showAllOrders.filter((order) => order.orderStatus === "Shipped").length
  const deliveredOrders = showAllOrders.filter((order) => order.orderStatus === "Delivered").length
  const cancelledOrders = showAllOrders.filter((order) => order.orderStatus === "Cancelled").length
  return (
    <div>
      <div className="flex justify-between items-center">

        <div className="">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight uppercase text-[30px] font-bold">Shop Overview</div>
          <div className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Track your business performance</div>
        </div>

        <div className="flex uppercase font-bold py-3 px-5 gap-8 text-[11px] text-gray-400 bg-white rounded-lg">
          <div>week</div>
          <div>month</div>
          <div>year</div>
        </div>

      </div>

      <div className="flex justify-between items-center my-8 text-gray-400">

        {performance.map((item) => {
          return (
            <>
              <div className="bg-white p-5 tracking-wider rounded-2xl">
                <div className=" flex items-center gap-7">
                  <div>
                    <div className="text-[12px] font-bold">{item.name}</div>
                    <div className="font-bold text-[25px] text-black ">₹{item.num}</div>
                  </div>

                  <i className={`${item.iconBg} p-4 rounded-xl text-white`}>{item.icon}</i>

                </div>

                <div className="flex items-center text-[10px] mt-1 font-bold gap-2">
                  <div className="bg-green-50 p-1  text-green-600">+ {item.graph}%</div>
                  <div className="uppercase text-gray-400 text-[8px] font-bold">{item.time}</div>
                </div>
              </div>
            </>
          )
        })}

      </div>

      <div className="flex w-full gap-5">
        <div className="w-[68%] bg-white overflow-hidden rounded-3xl">

          <div className="flex justify-between bg-[#ffff]  p-8">
            <div className="text-[20px] font-bold">Revenue Trends</div>

            <div className="flex gap-5">
              <div className="flex gap-2 items-center text-gray-400 text-[10px] font-bold tracking-widest uppercase"><i className="text-purple-600 text-[20px] "><GoDotFill /></i>Revenue</div>
              <div className="flex gap-2 items-center text-gray-400 text-[10px] font-bold tracking-widest uppercase"><i className="text-pink-500 text-[20px] "><GoDotFill /></i>Income</div>
            </div>

          </div>

          <div className="p-8 h-100 bg-white shadow-2xl">

          </div>

        </div>

        <div className="w-[33%] h-fit bg-white  rounded-3xl p-8">
          <div className="text-[20px] font-bold  ">Stock Status</div>

          <div className="flex flex-col gap-5 my-5">
            <div className="bg-green-50 p-5 font-bold rounded-2xl flex  justify-between items-center gap-2 text-green-600">
              <div className="flex items-center gap-3 uppercase text-[11px] "><FaCheckCircle className="text-[16px]" />in stock</div>
              <div className="text-[18px]">{getSellerProducts.length}</div>
            </div>

            <div className="bg-orange-50 p-5 font-bold rounded-2xl flex  justify-between items-center gap-2 text-orange-600">
              <div className="flex items-center gap-3 uppercase text-[11px] "><FaBoxOpen className="text-[16px]" />Low Stock</div>
              <div className="text-[18px]">0</div>
            </div>

            <div className="bg-red-50 p-5 font-bold rounded-2xl flex  justify-between items-center gap-2 text-red-600">
              <div className="flex items-center gap-3 uppercase text-[11px] "><FaTriangleExclamation className="text-[16px]" />Out of Stock</div>
              <div className="text-[18px]">0</div>
            </div>

            <Link to="products" onClick={() => window.scrollTo(0,0)} className="text-gray-500 py-4 bg-gray-50 items-center flex flex-col  rounded-2xl w-full cursor-pointer uppercase text-[10px]  font-bold hover:underline ">Management Inventary</Link>
          </div>
        </div>
      </div>

      <div className="flex gap-8 my-10 ">
        <div className=" w-1/2  rounded-3xl p-5 bg-white ">

          <div className="flex justify-between items-center ">
            <p className="text-[18px] font-bold">Best Selling Products</p>
            <Link to="products" onClick={() => scroll(0, 0)} className="text-[12px] uppercase text-blue-500 font-bold hover:underline ">View All</Link>
          </div>

          <p className="mt-50 text-center">No data available</p>
        </div>


        <div className="w-1/2 p-8 bg-white rounded-3xl">
          <p className="text-[18px] font-bold">Order Summary</p>
          <table className="w-full">

            <thead>
              <tr className="uppercase text-left border-gray-100 border-b text-gray-400">
                <th className="px-4  py-5 text-[10px]  font-bold uppercase tracking-widest ">status</th>
                <th className="px-4 py-5 text-end text-[10px] font-bold uppercase tracking-widest">count</th>
                <th className="px-4 py-5 text-end text-[10px] font-bold uppercase tracking-widest">trend</th>
              </tr>
            </thead>



            <tbody className="text-gray-600">

              {["Pending", "Processing", "Shipped", "Delivered", "Cancelled", "Return"].map((status) => (

                <tr key={status} className="w-full border-b border-gray-100">

                  <td className="px-4  py-4  text-[11px] font-bold  uppercase">
                    <div className="flex  items-center gap-2">
                      <GoDotFill className="text-blue-500" />
                      {status}
                    </div>
                  </td>

                  <td className="px-4 py-4 text-end font-bold">
                    {
                      showAllOrders
                        .filter(order => order.orderStatus === status)
                        .reduce((total, order) => total + order.item.length, 0)
                    }
                  </td>

                  <td className="px-4 py-4 text-end  text-[11px] font-bold text-gray-400 uppercase">
                    Stable
                  </td>
                </tr>

              ))}

            </tbody>


          </table>
        </div>
      </div>
    </div>
  )

}

export default DashbaordOverview
