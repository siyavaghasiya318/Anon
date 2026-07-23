import React from 'react'
import { blogData } from '../../../assets/CategoryList'

const FashionCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 w-[95%] m-auto sm:w-[100%]">
        {blogData.map((item, index) => {
          return (
            <div key={item.id || index} className="">
              <div className="w-full h-60">
                <img src={item.image} className="w-full rounded-xl h-full object-cover" alt={item.title} />
              </div>
              <p className="text-[#FF8F9C] font-semibold mt-2 text-sm sm:text-[16px]">{item.category}</p>
              <div className="font-bold text-gray-800 sm:text-[16px] text-[14px]">{item.title}</div>
              <div className="text-gray-500 flex gap-2 items-center flex-wrap text-xs sm:text-sm">
                By {item.author} / {item.date}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FashionCard