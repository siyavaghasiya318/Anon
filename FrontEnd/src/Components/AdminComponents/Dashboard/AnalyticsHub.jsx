import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { performance } from '../../../assets/CategoryList'
import { GoDotFill } from "react-icons/go";
import { useCallback } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';

function AnalyticsHub() {
  const{navigate} = useContext(UserContext)
  return (
    <div className="w-full ">
      <div className="flex justify-between items-center">

        <div className="">
          <div className="text-blue-600 uppercase text-[28px] font-bold">Analytics Hub</div>
          <div className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Platform Performance Overview</div>
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
                <div className=" flex items-center gap-5">
                  <div>
                    <div className="text-[12px] font-bold">{item.name}</div>
                    <div className="font-bold text-[25px] text-black ">₹{item.num}</div>
                  </div>

                  <i className={`${item.iconBg} p-3 rounded-xl text-white`}>{item.icon}</i>

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

        <div className="w-[33%] bg-white  rounded-3xl p-8">
          <div className="text-[20px] font-bold ">Top Seller</div>
          <div className="h-98 text-center">
            <div className="flex flex-col justify-center items-center h-full text-[12px] font-bold tracking-wider text-gray-500">Bk fashion</div>
            <div onClick={()=> navigate("/admin/sellers")} className="text-blue-600 w-full cursor-pointer uppercase text-[12px] font-bold tracking-widest hover:underline">view detail</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AnalyticsHub