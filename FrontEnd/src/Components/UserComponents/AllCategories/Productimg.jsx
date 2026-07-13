import React, { useContext } from 'react'
import { UserContext } from '../../../Context/UserContext'

const Productimg = () => {
  const{search} = useContext(UserContext)
  return (
    <>
      {search  ? 
      (<div className="w-full h-60">
        <img src="https://e-commerce-web-page-yekr.vercel.app/assets/blog_banner-Bdpq2hG-.png" className="w-full h-full object-cover rounded-2xl mt-5" alt="img" />
      </div>):
      (<div>
        <img src="https://e-commerce-web-page-yekr.vercel.app/assets/blog_banner-Bdpq2hG-.png" className="w-full h-full rounded-2xl mt-5" alt="img" />
      </div>)
    }
    </>
  )
}

export default Productimg
