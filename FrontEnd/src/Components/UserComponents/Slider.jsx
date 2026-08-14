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
                  <div className="grid grid-cols-2 absolute sm:grid-cols-2 px-6 sm:px-12 md:px-30 py-16 sm:py-20  md:py-25 lg:py-35">
                    <div className='m-auto text-center sm:text-left flex flex-col gap-2'>
                      <div className='text-[#FF8F9C] font-semibold text-[16px] sm:text-[19px] md:text-[25px]'>{item.title}</div>
                      <div className='font-bold text-[16px] md:my-0 sm:text-[28px] md:text-[32px] lg:text-[40px] w-full max-w-[350px] sm:max-w-[400px] leading-6 sm:leading-9 md:leading-12'>{item.name}</div>
                      <div className="font-bold text-gray-400 text-[16px] sm:text-[22px] lg:text-[30px] md:text-[28px]">
                        Starting at ₹ <span className='text-[16px] sm:text-[22px] md:text-[28px] lg:text-[33px]'>{item.price}</span>
                      </div>
                    </div>
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


