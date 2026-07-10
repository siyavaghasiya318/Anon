import React from 'react'

function Collection() {
  return (
    <div>
      <div>
        <div className="bg-[url(https://codewithsadee.github.io/anon-ecommerce-website/assets/images/cta-banner.jpg)] relative bg-right bg-cover w-full h-140 rounded-lg">

          <div className="w-full top-30 absolute flex flex-col">
            <div className=" m-auto  w-60 rounded-lg text-center gap-4 flex  flex-col items-center  px-10 py-15 bg-white/60 ">
              <div className="bg-black text-white text-[18px] text-center rounded-sm w-fit  px-3 py-1 uppercase font-semibold">25% Discount</div>
              <div className="text-gray-600 font-bold text-[28px] leading-8">Summer Collection</div>
              <p className="text-gray-500 text-[18px]">Starting @ $10</p>
              <p className="text-gray-500 font-bold text-[18px] uppercase">Shop now</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Collection 