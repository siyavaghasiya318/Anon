import React from 'react'

function Collection() {
  return (
    <div>
      <div>
        <div className="bg-[url(https://codewithsadee.github.io/anon-ecommerce-website/assets/images/cta-banner.jpg)] relative bg-right bg-cover bg-no- w-full m-auto h-65 sm:h-80 md:h-90 lg:h-140 rounded-lg">

          <div className="w-full h-full absolute flex flex-col justify-center">
            <div className="m-auto w-52 sm:w-60 md:w-64 lg:w-72 rounded-lg text-center gap-2 sm:gap-3 md:gap-4 flex flex-col items-center px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-12 lg:py-15 bg-white/60">
              <div className="bg-black text-white text-[13px] sm:text-[15px] md:text-[18px] text-center rounded-sm w-fit px-3 py-1 uppercase font-semibold">
                25% Discount
              </div>
              <div className="text-gray-600 font-bold text-[18px] sm:text-[22px] md:text-[25px] lg:text-[28px] leading-6 sm:leading-7 md:leading-8">
                Summer Collection
              </div>
              <p className="text-gray-500 text-[13px] sm:text-[15px] md:text-[18px]">Starting @ $10</p>
              <p className="text-gray-500 font-bold text-[13px] sm:text-[15px] md:text-[18px] uppercase">Shop now</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Collection