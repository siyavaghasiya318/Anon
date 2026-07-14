import React from 'react'
import { blogData } from '../../../assets/CategoryList'

const FashionCard = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-8 mt-10 ">
        {blogData.map((item) => {
          return(
            <>
              <div className="">
                <div className="w-full h-55"><img src={item.image} className="w-full rounded-xl h-full object-cover" alt="" /></div>
                <p className="text-[#FF8F9C] font-semibold mt-2 ">{item.category}</p>
                <div className="font-bold text-gray-800 text-[17px]">{item.title}</div>
                <div className="text-gray-500 flex gap-2 items-center">By {item.author} / {item.date}</div>
              </div>
            </>
          )
        })}  
      </div> 
    </>
  )
}

export default FashionCard
