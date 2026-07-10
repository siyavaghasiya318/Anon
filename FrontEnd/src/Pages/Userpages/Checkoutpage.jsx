import React from 'react'
import Checkout from '../../Components/UserComponents/Checkout/Checkout'
import OrderSummery from '../../Components/UserComponents/Checkout/OrderSummery'

const Checkoutpage = () => {
  return (
    <>
        <div className="flex mx-25 bg-gray-50 gap-10 p-8 m-auto  ">
            <div className="w-[50%]"><Checkout/></div>    
            <div className="w-[50%]"><OrderSummery/></div>    
        </div> 
    </>
  )
}

export default Checkoutpage
