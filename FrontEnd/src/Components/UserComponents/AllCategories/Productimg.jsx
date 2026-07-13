import React, { useContext } from 'react'
import { UserContext } from '../../../Context/UserContext'

const Productimg = () => {
  const{search} = useContext(UserContext)
  return (
    <>
      {!search   ? 
      (<div>
        <img src="https://e-commerce-web-page-yekr.vercel.app/assets/blog_banner-Bdpq2hG-.png" className="w-full h-full rounded-2xl mt-5" alt="img" />
      </div>):
      (<div className="w-full">
        <div className=" bg-[url('https://e-commerce-web-page-yekr.vercel.app/assets/blog_banner-Bdpq2hG-.png')] bg-cover h-70  object-bottom w-full bg-bottom rounded-2xl mt-5" alt="img">
          <p className="bg-black/30 w-fulll h-full rounded-2xl flex flex-col justify-center items-center text-white font-extrabold text-4xl">Result For "{search}"</p>
        </div>
      </div>)
      
    }
    </>
  )
}

export default Productimg
