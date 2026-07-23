import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";

function Footer() {
  return (
    <div className="bg-[#212121] text-[#afacacb7]">
      <div className="px-5 sm:px-10 lg:px-20">
        <div className="py-8 sm:py-10 flex flex-col gap-2">
          <p className="text-[#FF8F9C] uppercase text-[16px] sm:text-[18px] font-semibold">Brand directory</p>
          <p className="text-[14px] sm:text-[16px]">
            <span className="text-[#afacacae] font-bold uppercase me-5">Fashion:</span>
            T-Shirt | Shirt | Shorts | Jeans | Jacket | Clothes | Innerwear | Hosiery |
          </p>
          <p className="text-[14px] sm:text-[16px]">
            <span className="text-[#afacacae] uppercase font-bold me-5">Beauty:</span>
            Lipstick | Make-up | eye-Makeup | Highlighter | Foundation | Fixer |
          </p>
          <p className="text-[14px] sm:text-[16px]">
            <span className="text-[#afacacae] uppercase me-5 font-bold">jewellery:</span>
            Necklace | Earring | Couple rings | Pendants | Crystal | Bangles | bracelets | nosepin | chain | Couple rings |
          </p>
          <p className="text-[14px] sm:text-[16px]">
            <span className="text-[#afacacae] uppercase me-5 font-bold">cosmetics:</span>
            T-Shirt | Shirt | Shorts | Jeans | Jacket | Clothes | Innerwear | Hosiery |
          </p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 px-5 sm:px-10 lg:px-20 py-10">
        <div className="flex flex-col gap-1">
          <p className="text-gray-200 uppercase font-bold">Popular Categories</p>
          <hr className="w-15 mb-4 text-[#FF8F9C] border" />
          <p>Fashion</p>
          <p>Party Wear</p>
          <p>Perfumes</p>
          <p>Jewelry</p>
          <p>Watches</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-gray-200 uppercase font-bold">Products</p>
          <hr className="w-15 mb-4 text-[#FF8F9C] border" />
          <p>Prices drop</p>
          <p>New products</p>
          <p>Best sales</p>
          <p>Contact us</p>
          <p>Contact us</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-gray-200 uppercase font-bold">Our Company</p>
          <hr className="w-15 mb-4 text-[#FF8F9C] border" />
          <p>Delivery</p>
          <p>Legal Notice</p>
          <p>Terms and conditions</p>
          <p>About us</p>
          <p>Secure payment</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-gray-200 uppercase font-bold">Services</p>
          <hr className="w-15 mb-4 text-[#FF8F9C] border" />
          <p>Prices drop</p>
          <p>New products</p>
          <p>Best sales</p>
          <p>Contact us</p>
          <p>Sitemap</p>
        </div>

        <div className="flex flex-col gap-2 col-span-2 sm:col-span-3 lg:col-span-1">
          <p className="text-gray-200 uppercase font-bold">Contact</p>
          <hr className="w-15 mb-4 text-[#FF8F9C] border" />

          <div className="flex gap-3">
            <p><IoLocationOutline className="mt-1 text-[23px] shrink-0" /></p>
            <p className="text-[15px] sm:text-[18px]">419 State 414 Rte Beaver Dams, New York(NY), 14812, USA</p>
          </div>

          <div className="flex gap-3">
            <p><IoCallOutline className="mt-1 text-[23px] shrink-0" /></p>
            <p className="text-[15px] sm:text-[18px]">(607) 936-805</p>
          </div>

          <div className="flex gap-3">
            <p><LuMail className="mt-1 text-[20px] shrink-0" /></p>
            <p className="text-[15px] sm:text-[18px]">example@gmail.com</p>
          </div>
        </div>
      </div>

      <hr />

      {/* <div className="flex gap-2 my-5 justify-center items-center">
        
      </div> */}
    </div>
  )
}

export default Footer