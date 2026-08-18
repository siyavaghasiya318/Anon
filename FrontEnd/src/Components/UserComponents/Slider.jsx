import React, { useEffect, useState } from 'react'
import { motion, scale } from "framer-motion"
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { slider } from '../../assets/CategoryList';

function Slider() {

  

  const [index, Setindex] = useState(0)

  const [data, Setdata] = useState(false)
  const total = slider.length - 1


  const next = () => {
    index == total ? Setindex(0) : Setindex(index + 1)
  }
  const prev = () => {
    index == 0 ? Setindex(total) : Setindex(index - 1)
  }

  useEffect(() => {
    if (data || total <= 1) return;
    const interval = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(interval);
  }, [data, total])



  setTimeout(() => {
    data ? next() : null
  }, 3000);

  return (
    <>
      <motion.div initial={{opacity:0}} whileInView={{ opacity:1 }} transition={{ duration: 1.2 }} className="mt-5 lg:mt-0">
        <div className='flex   w-[100%] m-auto overflow-hidden  relative' onMouseLeave={() => Setdata(false)} onMouseEnter={() => Setdata(true)}>

          <div className='flex justify-between w-full text-[35px] text-[#FA8896] top-1/2 absolute z-100'>
            <p onClick={prev}><FaCaretLeft /></p>
            <p onClick={next}><FaCaretRight /></p>
          </div>
          {slider.map((item) => {
            return (
              <>
                <div className='shrink-0 w-full transition-all duration-300  flex relative ' style={{ transform: `translateX(-${index * 100}%)` }} >
                  <img src={item.img} width="100%" alt="" />
                  <div className="flex  absolute w-full h-full">
                    <div className='m-auto flex flex-col sm:gap-4 lg:gap-5 w-[60%] justify-center items-center border- h-full '>
                      <div className='text-[#FF8F9C] font-semibold text-[16px] sm:text-[18px] md:text-[20px]'>{item.title}</div>
                      <div className='font-bold text-[16px] md:my-0 sm:text-[28px]  md:text-[28px] lg:text-[40px] w-full max-w-[350px] sm:max-w-[300px] md:max-w-[300px] text-center leading-6 sm:leading-9 md:leading-10'>{item.name}</div>
                      <div className="font-bold text-gray-400 text-[14px] sm:text-[20px] lg:text-[30px] md:text-[23px]">
                        Starting at ₹ <span className='text-[16px] sm:text-[22px] md:text-[28px] lg:text-[33px]'>{item.price}</span>
                      </div>
                    </div>

                    <div className="w-[40%]"></div>

                  </div>
                </div>

              </>
            )
          })}
        </div>
      </motion.div>
    </>
  )
}

export default Slider


