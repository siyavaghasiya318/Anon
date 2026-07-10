import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { IoCallSharp } from 'react-icons/io5'
import { GrNotes } from "react-icons/gr";
import { FaSave } from 'react-icons/fa';
import { GoDotFill } from "react-icons/go";


const SellerProfile = () => {
  const { Profile, GetSellerdata } = useContext(UserContext)
  return (
    <>
      <div className="flex justify-between items-center bg-gradient-to-r from-purple-600 to-pink-600 shadow-purple-200  rounded-[35px] text-white  p-8 ">

        <div className="flex items-center gap-5">

          <div className="border border-gray-400 bg-purple-400/50 w-20 h-20 rounded-3xl text-white font-extrabold text-[30px] flex flex-col items-center justify-center uppercase">{Profile?.name.charAt(0)}</div>

          <div className="flex flex-col gap-2">
            <p className="text-[30px] font-bold">{Profile?.name}</p>
            <p className="bg-blue-500/20 font-bold border border-green-500 uppercase text-[10px] tracking-widest rounded-full px-4 py-1 ">Active</p>
          </div>
        </div>

        <div className="flex gap-5">

          <div className="bg-pink-500/60 w-30 flex flex-col gap-1 rounded-2xl p-5">
            <p className="text-gray-200 tracking-widest uppercase text-[10px] font-bold ">Total Sales</p>
            <div className="text-white font-bold text-[22px]">₹ 0</div>
          </div>

          <div className="bg-pink-500/50 shadow w-30 flex flex-col gap-1 rounded-2xl p-5">
            <p className="text-gray-200 tracking-widest uppercase text-[10px] font-bold ">Orders</p>
            <div className="text-white font-bold text-[22px]">0</div>
          </div>

        </div>

      </div>

      <div className="flex gap-10 mt-8 items-center">

        <div className="w-[200%] flex flex-col gap-10">

          <div className="  rounded-4xl overflow-hidden bg-white shadow-sm">
            <p className=" p-8 bg-[#f8fafc] text-[20px] font-bold">Business Identity</p>

            <div className="p-8 flex flex-col gap-10">
              <div className=" flex gap-5 ">
                <div className="w-full flex flex-col gap-1">
                  <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Shop Display name</p>
                  <div type="text" placeholder="EX: Adiddas  " className="outline-0 border font-semibold border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="" >{GetSellerdata?.shopname}</div>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">conatct phone</p>
                  <div type="text" placeholder="EX: Adiddas  " className="outline-0 border text-sm border-gray-100 px-5 rounded-2xl bg-mauve-50 font-semibold py-3 flex gap-3 items-center" id="" ><i className="text-gray-300 mt-1"><IoCallSharp /></i>{GetSellerdata?.phonenum}</div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">GST Identification Number </p>
                <div type="text" placeholder="EX: Adiddas  " className="outline-0 border text-sm border-gray-100 px-5 rounded-2xl bg-mauve-50 font-semibold py-3 flex gap-3 items-center" id="" ><i className="text-gray-300 mt-1"><GrNotes /></i>{GetSellerdata?.gstnum}</div>
              </div>
            </div>

          </div>
          <div className="  rounded-4xl overflow-hidden bg-white shadow-sm">
            <p className=" p-8 bg-[#f8fafc] text-[20px] font-bold">Dispatch Address</p>

            <div className="p-8 flex flex-col gap-10">

              <div className="w-full flex flex-col gap-1">
                <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Street / Building / Area </p>
                <div type="text" placeholder="EX: Adiddas  " className="outline-0 border text-sm border-gray-100 px-5 rounded-2xl bg-mauve-50 font-semibold py-3 flex gap-3 items-center" id="" ><i className="text-gray-300 mt-1"><GrNotes /></i>{GetSellerdata?.address}</div>
              </div>

              <div className=" flex gap-5 ">

                <div className="w-full flex flex-col gap-1">
                  <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">City</p>
                  <div type="text" placeholder="EX: Adiddas  " className="outline-0 border font-semibold border-gray-100 px-5 rounded-2xl bg-mauve-50 py-3" id="" >{GetSellerdata?.city}</div>
                </div>

                <div className="w-full flex flex-col gap-1">
                  <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">State </p>
                  <div type="text" placeholder="EX: Adiddas  " className="outline-0 border text-sm border-gray-100 px-5 rounded-2xl bg-mauve-50 font-semibold py-3 " id="" >{GetSellerdata?.state}</div>
                </div>

                <div className="w-full flex flex-col gap-1">
                  <p className="uppercase text-[10px] font-bold text-gray-400 tracking-widest">Pincode</p>
                  <div type="text" placeholder="EX: Adiddas  " className="outline-0 border text-sm border-gray-100 px-5 rounded-2xl bg-mauve-50 font-semibold py-3 " id="" >{GetSellerdata?.pincode}</div>
                </div>

              </div>
              
            </div>

          </div>


        </div>

        <div className=" bg-[#0f172b] text-gray-500 w- rounded-4xl p-8">
          <div className="text-[22px] font-bold text-white">Save Profile</div>
          <div className="text-[12px] font-semibold my-5">Updating your shop name and address will reflect on all invoices and the store's customer-facing product pages.</div>
          <button className="bg-purple-500 flex gap-3 mt-5 capitalize text-white font-bold text-[18px] items-center w-full justify-center py-4 rounded-2xl">
            <i><FaSave /></i>
            update profile
          </button>

          <hr className="text-gray-700 my-10" />
          <div className="flex gap-3 items-center">
            <i className="text-green-500 text-[12px]"><GoDotFill /></i>
            <p className="text-sm font-semibold">Your data is secure</p>
          </div>

          <div className="flex gap-3 mt-2 items-center">
            <i className="text-blue-500 text-[12px]"><GoDotFill /></i>
            <p className="text-sm font-semibold">Your data is secure</p>
          </div>
        </div>

      </div>

    </>
  )
}

export default SellerProfile
