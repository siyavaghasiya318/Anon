import React from 'react'

function Slider() {
  return (
    <div className="">
        <div className='bg-[url(https://res.cloudinary.com/do98lw5ja/image/upload/v1769879838/banners/peoiz4odc99of7br7hg4.jpg)] bg-center overflow-hidden bg-cover w-full m-auto h-50 sm:h-70 md:h-100 lg:h-120 xl:130'>

          <div className="grid grid-cols-2 sm:grid-cols-2 px-6 sm:px-12 md:px-10 py-16 sm:py-20  md:py-25 lg:py-35">
            <div className='m-auto text-center sm:text-left'>
              <div className='text-[#FF8F9C] font-semibold text-[16px] sm:text-[19px] md:text-[25px]'>Sale Offer</div>
              <div className='font-bold text-[16px] md:my-0 sm:text-[28px] md:text-[32px] lg:text-[40px] w-full max-w-[350px] sm:max-w-[400px] leading-6 sm:leading-9 md:leading-12'>NEW FASHION <br /> SUMMER SALE</div>
              <div className="font-bold text-gray-400 text-[16px] sm:text-[22px] lg:text-[30px] md:text-[28px]">
                Starting at ₹ <span className='text-[16px] sm:text-[22px] md:text-[28px] lg:text-[33px]'>1400.00</span>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Slider