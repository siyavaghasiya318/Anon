import React, { useEffect } from 'react'
import Checkout from '../../Components/UserComponents/Checkout/Checkout'
import OrderSummery from '../../Components/UserComponents/Checkout/OrderSummery'

const Checkoutpage = () => {
  useEffect(() => {
    scrollTo(0, 0)
  })
  return (
    <>
      <div className="md:flex mx-0 lg:mx-25 xs:mx-5 md:mx-10 bg-gray-50 gap-10 xs:p-8 p-4  m-auto mb-10  ">
        <div className="md:w-[50%]"><Checkout /></div>
        <div className="md:w-[50%]"><OrderSummery /></div>
      </div>
    </>
  )
}

export default Checkoutpage
