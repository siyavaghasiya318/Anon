import React from 'react'

function Slider() {
  return (
    <>
        <div className='bg-[url(https://res.cloudinary.com/do98lw5ja/image/upload/v1769879838/banners/peoiz4odc99of7br7hg4.jpg)] bg-center overflow-hidden bg-cover object-cover w-full m-auto h-130'>


          <div className="grid grid-cols-2 px-20 py-40 ">
            <div className='m-auto'>
              <div className='text-[#FF8F9C]   font-semibold text-[25px] text-left'>Sale Offer</div>
              <div className='font-bold text-[40px]  w-100 text-left leading-12'>NEW FATION SUMMER SALE</div>
              <div className="font-bold text-gray-400 text-[30px]">starting at ₹ <span className='text-[33px]'>1400.00</span></div>
            </div>
          </div>


        </div>
    </>
  )
}

export default Slider