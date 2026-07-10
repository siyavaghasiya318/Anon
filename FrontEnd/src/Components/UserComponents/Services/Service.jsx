import React from 'react'
import { GrDeliver } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiCornerUpLeft } from "react-icons/fi";
import { RiCoupon3Line } from "react-icons/ri";


function Service() {
  return (
    <div className="w-full">
      <div className="border leading-12 border-b-gray-200  text-gray-700 border-t-0 border-x-0  font-bold text-[22px]">Our Services</div>
      <div className="border flex flex-col gap-5 border-gray-200 rounded-lg px-6 py-5 mt-5">

        <div className="flex items-center gap-8 ">
          <p className="text-[#FF8F9C] text-[30px]"><GrDeliver /></p>
          <div className="text-gray-500">
            <p className="text-[18px] font-semibold">Worldwide Delivery</p>
            <p className="text-sm">For Order Over $100</p>
          </div>
        </div>

        <div className="flex items-center gap-8 ">
          <p className="text-[#FF8F9C] text-[30px]">< IoRocketOutline /></p>
          <div className="text-gray-500">
            <p className="text-[18px] font-semibold"> Next Day delivery</p>
            <p className="text-sm">UK Orders Only</p>
          </div>
        </div>

        <div className="flex items-center gap-8 ">
          <p className="text-[#FF8F9C] text-[30px]"><IoCallOutline /></p>
          <div className="text-gray-500">
            <p className="text-[18px] font-semibold">Best Online Support </p>
            <p className="text-sm">Hours: 8AM - 11PM</p>
          </div>
        </div>

        <div className="flex items-center gap-8 ">
          <p className="text-[#FF8F9C] text-[30px]"><FiCornerUpLeft /></p>
          <div className="text-gray-500">
            <p className="text-[18px] font-semibold">Return Policy</p>
            <p className="text-sm">Easy & Free Return</p>
          </div>
        </div>

        <div className="flex items-center gap-8 ">
          <p className="text-[#FF8F9C] rotate-320 text-[30px]"><RiCoupon3Line  /></p>
          <div className="text-gray-500">
            <p className="text-[18px] font-semibold">30% money back </p>
            <p className="text-sm">For Order Over $100</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Service